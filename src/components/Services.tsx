import { services } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-sky" aria-labelledby="services-heading">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:py-16">
        <SectionHeading id="services-heading" title="Our Services" align="center" accent />
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:mt-10 xl:flex xl:divide-x xl:divide-slate-300/70">
          {services.map((service) => (
            <li key={service.title} className="xl:flex-1">
              <ServiceCard title={service.title} icon={service.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
