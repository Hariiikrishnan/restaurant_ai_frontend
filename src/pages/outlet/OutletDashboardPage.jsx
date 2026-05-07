import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { MessageCircle, Sparkles, Star, TriangleAlert } from 'lucide-react'
import StatCard from '../../components/analytics/StatCard'
import ChartCard from '../../components/analytics/ChartCard'

const trend = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 24 },
  { name: 'Fri', value: 31 }
]

const sentiment = [
  { name: 'Positive', value: 78 },
  { name: 'Neutral', value: 14 },
  { name: 'Negative', value: 8 }
]

export default function OutletDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Avg rating" value="4.4" icon={<Star className="h-5 w-5" />} />
        <StatCard title="Reviews today" value="32" icon={<MessageCircle className="h-5 w-5" />} />
        <StatCard title="AI responses" value="146" icon={<Sparkles className="h-5 w-5" />} />
        <StatCard title="Pending escalations" value="3" icon={<TriangleAlert className="h-5 w-5" />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Weekly review trend">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Sentiment mix">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentiment} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 6, 6]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}
