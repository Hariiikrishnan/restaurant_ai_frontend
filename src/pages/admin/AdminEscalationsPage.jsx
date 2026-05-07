import { useQuery } from '@tanstack/react-query'
import { PhoneCall, Timer } from 'lucide-react'
import StatusBadge from '../../components/feedback/StatusBadge'
import { Card } from '../../components/ui/card'
import { fetchEscalations } from '../../services/reviewService'

const escalations = [
  {
    id: 'e1',
    outlet: 'Golden Lotus Hotel',
    rating: 1,
    status: 'pending',
    responseTime: '45m',
    channel: 'WhatsApp'
  },
  {
    id: 'e2',
    outlet: 'Urban Bite',
    rating: 2,
    status: 'escalated',
    responseTime: '1h 20m',
    channel: 'WhatsApp'
  }
]

export default function AdminEscalationsPage() {
  const { data } = useQuery({
    queryKey: ['escalations'],
    queryFn: () => fetchEscalations(),
    staleTime: 60 * 1000
  })

  const rows = data?.escalations?.length ? data.escalations : escalations
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Escalations</h2>
        <p className="text-sm text-slatey-500">Monitor negative review handling across outlets.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {rows.map((item) => (
          <Card key={item.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slatey-900">{item.outlet}</p>
                <p className="text-xs text-slatey-400">Rating {item.rating}/5</p>
              </div>
              <StatusBadge status={item.status} />
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-slatey-600">
              <span className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" /> {item.channel}
              </span>
              <span className="flex items-center gap-2">
                <Timer className="h-4 w-4" /> {item.responseTime}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
