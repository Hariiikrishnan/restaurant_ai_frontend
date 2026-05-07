import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Filter } from 'lucide-react'
import ReviewCard from '../../components/reviews/ReviewCard'
import Button from '../../components/ui/button'
import { fetchReviews } from '../../services/reviewService'
import Skeleton from '../../components/feedback/Skeleton'

const reviewFeed = [
  {
    id: 'rev-1',
    customerName: 'Maria L.',
    rating: 5,
    text: 'Absolutely loved the ambience and food.',
    status: 'responded',
    aiResponse: 'We are thrilled you loved the ambience, Maria. See you again soon.'
  },
  {
    id: 'rev-2',
    customerName: 'Evan J.',
    rating: 3,
    text: 'Service was okay, room for improvement.',
    status: 'escalated',
    aiResponse: 'Thank you for the honest feedback, Evan. We would love to make your next visit better.'
  }
]

export default function AdminReviewsPage() {
  const [filter, setFilter] = useState('all')
  const { data, isLoading } = useQuery({
    queryKey: ['reviews', filter],
    queryFn: () => fetchReviews(filter === 'all' ? {} : { status: filter }),
    staleTime: 60 * 1000
  })

  const rows = data?.reviews?.length ? data.reviews : reviewFeed
  const reviews = filter === 'all' ? rows : rows.filter((item) => item.status === filter)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Reviews</h2>
          <p className="text-sm text-slatey-500">Track AI responses and escalation status.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => setFilter('all')}>
            <Filter className="h-4 w-4" />
            All
          </Button>
          <Button variant="ghost" onClick={() => setFilter('responded')}>
            Responded
          </Button>
          <Button variant="ghost" onClick={() => setFilter('escalated')}>
            Escalated
          </Button>
        </div>
      </div>

      {isLoading && !data ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}
