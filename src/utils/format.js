export function formatRating(value) {
  return Number(value).toFixed(1)
}

export function formatTimestamp(value) {
  if (!value) return '—'
  const date = typeof value === 'string' ? new Date(value) : value.toDate?.() || new Date(value)
  return date.toLocaleString()
}
