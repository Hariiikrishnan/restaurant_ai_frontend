import { useParams } from 'react-router-dom'
import { Activity, Link2, MessageCircle, Phone } from 'lucide-react'
import StatCard from '../../components/analytics/StatCard'
import ReviewCard from '../../components/reviews/ReviewCard'
import Button from '../../components/ui/button'
import StatusBadge from '../../components/feedback/StatusBadge'

const sampleReviews = [
  {
    id: 'r1',
    customerName: 'Lara M.',
    rating: 5,
    text: 'Best brunch spot in town. Loved the service!',
    status: 'responded',
    aiResponse: 'So glad you enjoyed brunch with us, Lara. Hope to see you again soon.'
  },
  {
    id: 'r2',
    customerName: 'Derek P.',
    rating: 2,
    text: 'Service was slow and the table was not ready.',
    status: 'escalated',
    aiResponse: 'Thank you for sharing this. We are sorry for the delay and would love to make this right.'
  }
]

export default function AdminOutletDetailPage() {
  const { id } = useParams()

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Outlet profile</h2>
          <p className="text-sm text-slatey-500">Outlet ID: {id}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit outlet</Button>
          <Button>Sync now</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Avg rating" value="4.3" icon={<Activity className="h-5 w-5" />} />
        <StatCard title="Reviews this week" value="128" icon={<MessageCircle className="h-5 w-5" />} />
        <StatCard title="Escalations" value="6" icon={<Phone className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recent reviews</h3>
          <div className="grid gap-4">
            {sampleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slatey-200 bg-white/80 p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Google status</h3>
              <Link2 className="h-4 w-4 text-brand-500" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <StatusBadge status="active" />
              <span className="text-sm text-slatey-500">Connected to location 4821</span>
            </div>
            <Button variant="outline" className="mt-4">Reconnect</Button>
          </div>
          <div className="rounded-2xl border border-slatey-200 bg-white/80 p-5">
            <h3 className="text-lg font-semibold">Escalation log</h3>
            <div className="mt-4 space-y-3 text-sm text-slatey-600">
              <div className="flex items-center justify-between">
                <span>Slow service - 2★</span>
                <span className="text-amber-600">WhatsApp sent</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Order missing item - 1★</span>
                <span className="text-rose-600">Pending reply</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Great staff - 5★</span>
                <span className="text-emerald-600">AI replied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
