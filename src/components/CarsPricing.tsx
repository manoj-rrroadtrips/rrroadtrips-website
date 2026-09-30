import { Luggage, Snowflake, Users } from 'lucide-react'
import { vehicles } from '../data/content'
import { CarCard } from './CarCard'
import { SectionHeading } from './SectionHeading'

const highlights = [
  { label: 'AC', icon: Snowflake },
  { label: 'Comfortable Seating', icon: Users },
  { label: 'Ample Luggage Space', icon: Luggage },
]

export function CarsPricing() {
  return (
    <section id="cars" className="scroll-mt-24 bg-white" aria-labelledby="cars-heading">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <SectionHeading id="cars-heading" title="Our Cars & Pricing" />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
              Well-maintained vehicles with professional drivers
              <br className="hidden sm:block" /> for a safe and comfortable journey.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-navy">
            {highlights.map((item) => (
              <li key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((vehicle) => (
            <CarCard
              key={vehicle.id}
              name={vehicle.name}
              seats={vehicle.seats}
              price={vehicle.price}
              image={vehicle.image}
              alt={vehicle.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
