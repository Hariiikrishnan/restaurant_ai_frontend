import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils'

export default function Sidebar({ items, header, footer, className }) {
  return (
    <aside
      className={cn(
        'h-screen w-64 flex-col border-r border-slatey-200 bg-white/80 px-5 py-6 lg:flex dark:border-slatey-800 dark:bg-slatey-900/80',
        className
      )}
    >
      <div className="mb-6 flex items-center gap-2 text-lg font-semibold text-slatey-900">
        {header}
      </div>
      <nav className="flex flex-1 flex-col gap-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slatey-600 transition hover:bg-slatey-100',
                isActive && 'bg-brand-50 text-brand-700'
              )
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </aside>
  )
}
