import Badge from '../ui/badge'

const map = {
  pending: { variant: 'warning', label: 'Pending' },
  responded: { variant: 'success', label: 'Responded' },
  escalated: { variant: 'danger', label: 'Escalated' },
  failed: { variant: 'danger', label: 'Failed' },
  active: { variant: 'success', label: 'Active' },
  inactive: { variant: 'neutral', label: 'Inactive' }
}

export default function StatusBadge({ status }) {
  const entry = map[status] || { variant: 'neutral', label: status }
  return <Badge variant={entry.variant}>{entry.label}</Badge>
}
