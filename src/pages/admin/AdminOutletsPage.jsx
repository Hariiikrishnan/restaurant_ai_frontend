import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { Filter, Plus, Search } from 'lucide-react'
import Button from '../../components/ui/button'
import Input from '../../components/ui/input'
import DataTable from '../../components/table/DataTable'
import StatusBadge from '../../components/feedback/StatusBadge'
import { fetchAdminOutlets } from '../../services/outletService'
import { DialogContent, DialogDescription, DialogRoot, DialogTitle } from '../../components/ui/dialog'
import Skeleton from '../../components/feedback/Skeleton'

const outletRows = [
  {
    id: 'outlet-1',
    name: 'Golden Lotus Hotel',
    businessType: 'Hospitality',
    avgRating: 4.6,
    plan: 'Growth',
    status: 'active',
    lastSync: '2 minutes ago'
  },
  {
    id: 'outlet-2',
    name: 'Pulse Fitness Downtown',
    businessType: 'Gym',
    avgRating: 4.2,
    plan: 'Scale',
    status: 'active',
    lastSync: '12 minutes ago'
  },
  {
    id: 'outlet-3',
    name: 'Urban Bite',
    businessType: 'Restaurant',
    avgRating: 3.8,
    plan: 'Starter',
    status: 'inactive',
    lastSync: '2 days ago'
  }
]

export default function AdminOutletsPage() {
  const [query, setQuery] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedOutlet, setSelectedOutlet] = useState(null)

  const { data, isLoading } = useQuery({
    queryKey: ['admin-outlets'],
    queryFn: fetchAdminOutlets,
    staleTime: 60 * 1000
  })

  const columns = [
    {
      key: 'name',
      label: 'Outlet',
      render: (row) => (
        <div>
          <p className="font-semibold text-slatey-800">{row.name}</p>
          <p className="text-xs text-slatey-400">{row.businessType}</p>
        </div>
      )
    },
    { key: 'avgRating', label: 'Avg rating' },
    { key: 'plan', label: 'Plan' },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <StatusBadge status={row.status} />
    },
    { key: 'lastSync', label: 'Last sync' },
    {
      key: 'actions',
      label: 'Actions',
      render: (row) => (
        <div className="flex items-center gap-2">
          <Link to={`/admin-dashboard/outlets/${row.id}`} className="text-sm text-brand-600">
            View
          </Link>
          <button className="text-sm text-slatey-500">Edit</button>
          <button
            className="text-sm text-rose-500"
            onClick={() => {
              setSelectedOutlet(row)
              setDialogOpen(true)
            }}
          >
            Suspend
          </button>
        </div>
      )
    }
  ]

  const rows = data?.outlets?.length ? data.outlets : outletRows
  const filtered = rows.filter((row) => row.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Outlets</h2>
          <p className="text-sm text-slatey-500">Manage outlet profiles, plans, and status.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button>
            <Plus className="h-4 w-4" />
            Add outlet
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-slatey-200 bg-white px-3">
          <Search className="h-4 w-4 text-slatey-400" />
          <input
            className="w-full py-2 text-sm text-slatey-700 focus:outline-none"
            placeholder="Search outlets"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      {isLoading && !data ? (
        <div className="grid gap-3">
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
        </div>
      ) : (
        <DataTable columns={columns} data={filtered} />
      )}

      <DialogRoot open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogTitle>Deactivate outlet</DialogTitle>
          <DialogDescription>
            This will pause review automation for {selectedOutlet?.name}. You can reactivate later.
          </DialogDescription>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
          </div>
        </DialogContent>
      </DialogRoot>
    </div>
  )
}
