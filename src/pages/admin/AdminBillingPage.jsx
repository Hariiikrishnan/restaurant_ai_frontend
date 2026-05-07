import { Card } from '../../components/ui/card'
import Button from '../../components/ui/button'

export default function AdminBillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Billing</h2>
        <p className="text-sm text-slatey-500">Manage plans, invoices, and seat limits.</p>
      </div>
      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slatey-500">Current plan</p>
            <p className="text-xl font-semibold text-slatey-900">Scale — $499/mo</p>
          </div>
          <Button variant="outline">Manage billing</Button>
        </div>
      </Card>
    </div>
  )
}
