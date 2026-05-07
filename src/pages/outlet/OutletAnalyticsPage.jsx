import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ChartCard from '../../components/analytics/ChartCard'

const weekly = [
  { name: 'Mon', value: 18 },
  { name: 'Tue', value: 24 },
  { name: 'Wed', value: 21 },
  { name: 'Thu', value: 26 },
  { name: 'Fri', value: 34 }
]

export default function OutletAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Analytics</h2>
        <p className="text-sm text-slatey-500">Track weekly review trends and rating shifts.</p>
      </div>
      <ChartCard title="Weekly review trend">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weekly}>
              <defs>
                <linearGradient id="areaOutlet" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#4f46e5" fillOpacity={1} fill="url(#areaOutlet)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  )
}
