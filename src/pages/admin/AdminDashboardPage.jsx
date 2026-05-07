import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Clock, MessageCircle, Store, ThumbsUp, TriangleAlert, Wand2 } from 'lucide-react'
import StatCard from '../../components/analytics/StatCard'
import ChartCard from '../../components/analytics/ChartCard'

const trendData = [
  { name: 'Mon', reviews: 120, escalations: 8 },
  { name: 'Tue', reviews: 140, escalations: 10 },
  { name: 'Wed', reviews: 180, escalations: 7 },
  { name: 'Thu', reviews: 210, escalations: 14 },
  { name: 'Fri', reviews: 260, escalations: 11 },
  { name: 'Sat', reviews: 310, escalations: 12 },
  { name: 'Sun', reviews: 280, escalations: 9 }
]

const ratingData = [
  { name: '1', value: 6 },
  { name: '2', value: 12 },
  { name: '3', value: 24 },
  { name: '4', value: 38 },
  { name: '5', value: 72 }
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total outlets" value="126" delta="+8 new this month" icon={<Store className="h-5 w-5" />} />
        <StatCard title="Total reviews" value="18,482" delta="+12% week over week" icon={<MessageCircle className="h-5 w-5" />} />
        <StatCard title="Positive rating" value="94%" delta="+2.4%" icon={<ThumbsUp className="h-5 w-5" />} />
        <StatCard title="Escalation rate" value="4.6%" delta="-0.8%" icon={<TriangleAlert className="h-5 w-5" />} />
        <StatCard title="AI responses" value="12,114" delta="+920" icon={<Wand2 className="h-5 w-5" />} />
        <StatCard title="Avg response time" value="1m 48s" delta="-12s" icon={<Clock className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Review trends">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="reviews" stroke="#6366f1" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="escalations" stroke="#f59e0b" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Rating distribution">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}
