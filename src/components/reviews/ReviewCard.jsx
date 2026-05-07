import StatusBadge from '../feedback/StatusBadge'

export default function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl border border-slatey-200 bg-white/80 p-5 shadow-sm dark:border-slatey-700 dark:bg-slatey-900/70">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slatey-900 dark:text-slatey-100">{review.customerName}</p>
          <p className="text-xs text-slatey-500">Rating {review.rating}/5</p>
        </div>
        <StatusBadge status={review.status} />
      </div>
      <p className="mt-4 text-sm text-slatey-600 dark:text-slatey-300">{review.text}</p>
      {review.aiResponse ? (
        <div className="mt-4 rounded-xl border border-slatey-200 bg-slatey-50 px-4 py-3 text-xs text-slatey-600 dark:border-slatey-700 dark:bg-slatey-800/70 dark:text-slatey-200">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slatey-400">AI reply</p>
          <p className="mt-2">{review.aiResponse}</p>
        </div>
      ) : null}
    </div>
  )
}
