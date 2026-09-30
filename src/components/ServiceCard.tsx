import { ArrowRight, Briefcase, MapPin, Plane, RefreshCcw, Route } from 'lucide-react'
import type { ReactNode } from 'react'
import type { ServiceIcon } from '../data/content'
import { RingsIcon } from './Icons'

const icons: Record<ServiceIcon, ReactNode> = {
  pin: <MapPin className="h-6 w-6" aria-hidden="true" />,
  route: <Route className="h-6 w-6" aria-hidden="true" />,
  plane: <Plane className="h-6 w-6" aria-hidden="true" />,
  arrow: <ArrowRight className="h-6 w-6" aria-hidden="true" />,
  round: <RefreshCcw className="h-6 w-6" aria-hidden="true" />,
  briefcase: <Briefcase className="h-6 w-6" aria-hidden="true" />,
  rings: <RingsIcon className="h-6 w-6" />,
}

type ServiceCardProps = {
  title: string
  icon: ServiceIcon
}

export function ServiceCard({ title, icon }: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col items-center px-3 py-4 text-center">
      <div className="mb-3 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white text-navy shadow-sm ring-1 ring-sky transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-navy group-hover:text-white group-hover:shadow-md">
        {icons[icon]}
      </div>
      <p className="max-w-[9.5rem] text-[13px] font-semibold leading-snug text-navy sm:text-sm">{title}</p>
    </div>
  )
}
