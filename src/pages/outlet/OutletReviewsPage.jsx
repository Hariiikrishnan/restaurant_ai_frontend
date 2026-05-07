import { useState } from 'react'
import ReviewCard from '../../components/reviews/ReviewCard'
import Input from '../../components/ui/input'

const reviews = [
  {
    id: 'o1',
    customerName: 'Samira T.',
    rating: 5,
    text: 'Amazing ambience and quick service.',
    status: 'responded',
    aiResponse: 'Samira, we are thrilled you loved the ambience. See you soon.'
  },
  {
    id: 'o2',
    customerName: 'Will D.',
    rating: 2,
    text: 'My order was delayed.',
    status: 'escalated',
    aiResponse: 'Thank you for letting us know. We are looking into the delay right away.'
  }
]

export default function OutletReviewsPage() {
  const [query, setQuery] = useState('')
  const filtered = reviews.filter((review) => review.customerName.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Reviews</h2>
        <p className="text-sm text-slatey-500">Search, filter, and review AI-generated responses.</p>
      </div>
      <Input placeholder="Search by customer name" value={query} onChange={(event) => setQuery(event.target.value)} />
      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
