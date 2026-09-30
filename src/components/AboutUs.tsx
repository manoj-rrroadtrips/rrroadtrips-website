import { Headset, ShieldCheck, Users } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const points = [
  { label: 'Safe & Reliable', icon: ShieldCheck },
  { label: 'Experienced Drivers', icon: Users },
  { label: '24/7 Support', icon: Headset },
]

export function AboutUs() {
  return (
    <div id="about" className="scroll-mt-24">
      <SectionHeading title="About Us" />
      <p className="mt-5 text-[15px] leading-7 text-ink/90">
        RR ROAD TRIPS is a trusted car rental and travel service provider in Hyderabad. We are committed to offering
        safe, comfortable and affordable travel solutions for individuals, families and corporate clients. With
        well-maintained vehicles, experienced drivers and 24/7 customer support, we ensure your journey is smooth and
        hassle-free.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {points.map((point) => (
          <li key={point.label} className="flex items-center gap-2.5 text-sm font-semibold text-navy">
            <point.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            {point.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
