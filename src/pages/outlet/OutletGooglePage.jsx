import { Link2 } from 'lucide-react'
import Button from '../../components/ui/button'
import { Card } from '../../components/ui/card'

export default function OutletGooglePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Google Connection</h2>
        <p className="text-sm text-slatey-500">Manage OAuth status and business locations.</p>
      </div>
      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slatey-400">Status</p>
            <p className="mt-2 text-lg font-semibold text-emerald-600">Connected</p>
            <p className="text-sm text-slatey-500">Last sync: 4 minutes ago</p>
          </div>
          <Button variant="outline">
            <Link2 className="h-4 w-4" />
            Reconnect
          </Button>
        </div>
      </Card>
    </div>
  )
}
