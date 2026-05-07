import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CheckCircle2, Link2, Loader2, Store } from 'lucide-react'
import { startGoogleOAuth, getGoogleConnectionStatus } from '../services/googleAuthService'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { useAuth } from '../contexts/AuthContext'

export default function ConnectGooglePage() {
  const { profile } = useAuth()
  const [outletId, setOutletId] = useState(profile?.outletId || '')

  const enabled = useMemo(() => outletId && outletId.length > 0, [outletId])

  const { data, isLoading } = useQuery({
    queryKey: ['google-connection', outletId],
    queryFn: () => getGoogleConnectionStatus(outletId),
    enabled
  })

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-12">
      <div>
        <span className="badge-ring">
          <Link2 className="h-4 w-4" /> Google Business Profile
        </span>
        <h1 className="mt-4 text-3xl font-semibold">Connect Google Business</h1>
        <p className="mt-2 text-sm text-slatey-600">
          Securely connect your Google Business Profile. Tokens are stored on the backend. The frontend only
          initiates OAuth.
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-6">
        <label className="text-xs uppercase tracking-[0.2em] text-slatey-400">Outlet ID</label>
        <Input
          className="mt-2"
          placeholder="Enter your outlet Firestore ID"
          value={outletId}
          onChange={(event) => setOutletId(event.target.value)}
        />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button onClick={() => startGoogleOAuth(outletId)} disabled={!outletId}>
            Connect Google Business
          </Button>
          <Button variant="outline" disabled={!outletId || isLoading}>
            {isLoading ? 'Checking status...' : 'Refresh status'}
          </Button>
        </div>

        <div className="mt-6 rounded-2xl border border-slatey-200 bg-white/70 p-4">
          {isLoading ? (
            <div className="flex items-center gap-3 text-sm text-slatey-500">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading connection status
            </div>
          ) : data?.connected ? (
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" /> Connected
              </div>
              <div className="text-slatey-600">
                Connected account: <span className="font-semibold">{data.accountEmail}</span>
              </div>
              <div className="text-slatey-600">Active location: {data.activeLocation || 'Not set'}</div>
              <div className="grid gap-2">
                {(data.locations || []).map((location) => (
                  <div key={location.id} className="flex items-center justify-between rounded-xl border border-slatey-200 bg-slatey-50 px-3 py-2">
                    <span>{location.name}</span>
                    <Button variant="ghost" size="sm">Set active</Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-slatey-500">
              <Store className="h-4 w-4" /> No Google connection detected yet.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
