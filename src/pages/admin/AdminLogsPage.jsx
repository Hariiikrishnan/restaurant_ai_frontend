import { Activity } from 'lucide-react'
import { Card } from '../../components/ui/card'

const logs = [
  { id: 'l1', type: 'REVIEW_RESPONDED', status: 'success', timestamp: '2 minutes ago' },
  { id: 'l2', type: 'REVIEW_ESCALATED', status: 'success', timestamp: '6 minutes ago' },
  { id: 'l3', type: 'CRON_RUN_COMPLETE', status: 'success', timestamp: '10 minutes ago' }
]

export default function AdminLogsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">AI Logs</h2>
        <p className="text-sm text-slatey-500">Audit trail for review automation and failures.</p>
      </div>
      <div className="grid gap-4">
        {logs.map((log) => (
          <Card key={log.id} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slatey-900">{log.type}</p>
                <p className="text-xs text-slatey-400">{log.timestamp}</p>
              </div>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-600">{log.status}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
