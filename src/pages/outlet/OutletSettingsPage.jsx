import Button from '../../components/ui/button'
import Input from '../../components/ui/input'
import { Card } from '../../components/ui/card'

export default function OutletSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Settings</h2>
        <p className="text-sm text-slatey-500">Manage business information and notifications.</p>
      </div>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Business name" defaultValue="Urban Bite" />
          <Input placeholder="Business type" defaultValue="Restaurant" />
          <Input placeholder="WhatsApp number" defaultValue="+1 202 555 0118" />
          <Input placeholder="Notification email" defaultValue="manager@urbanbite.com" />
        </div>
        <Button className="mt-4">Save changes</Button>
      </Card>
    </div>
  )
}
