import { MapPin } from 'lucide-react'
import { routes } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function PopularRoutes() {
  return (
    <div id="routes" className="scroll-mt-24">
      <SectionHeading title="Popular Routes" />
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {routes.map((route) => (
          <li key={route}>
            <div className="flex items-center gap-3 rounded-xl bg-sky px-4 py-3.5 text-sm font-semibold text-navy transition duration-200 hover:-translate-y-0.5 hover:bg-[#dff0fa] hover:shadow-sm">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{route}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
