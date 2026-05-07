import { Card } from '../../components/ui/card'
import StatusBadge from '../../components/feedback/StatusBadge'

const escalations = [
  { id: 'oe1', review: 'Slow service at dinner', status: 'pending', rating: 2 },
  { id: 'oe2', review: 'Order missing item', status: 'escalated', rating: 1 }
]

export default function OutletEscalationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Escalations</h2>
        <p className="text-sm text-slatey-500">Follow up on negative reviews escalated to WhatsApp.</p>
      </div>
      <div className="grid gap-4">
        {escalations.map((item) => (
          <Card key={item.id} className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-semibold text-slatey-900">{item.review}</p>
              <p className="text-xs text-slatey-400">Rating {item.rating}/5</p>
            </div>
            <StatusBadge status={item.status} />
          </Card>
        ))}
      </div>
    </div>
  )
}
