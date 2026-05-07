import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartCard from '../../components/analytics/ChartCard'

const analyticsData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1400 },
  { name: 'Mar', value: 1600 },
  { name: 'Apr', value: 1800 },
  { name: 'May', value: 2100 }
]

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Analytics</h2>
        <p className="text-sm text-slatey-500">Cross-outlet performance benchmarks.</p>
      </div>
      <ChartCard title="Review volume growth">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="colorBrand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#6366f1" fillOpacity={1} fill="url(#colorBrand)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  )
}
