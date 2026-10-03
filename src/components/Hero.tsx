import { Phone } from 'lucide-react'
import { site } from '../data/content'
import { Button } from './Button'
import { WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[500px] scroll-mt-24 overflow-hidden bg-[#d7ebf7]">
      <img
        src="/images/hero_banner.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[10%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 to-white/10" />

      <div className="relative mx-auto flex min-h-[500px] max-w-[1200px] items-start px-4 py-8 md:grid md:min-h-[480px] md:grid-cols-2 md:items-center md:py-8">
        <div className="animate-rise max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-navy">WELCOME TO</p>
          <h1 className="mt-2 text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.35rem]">
            RR ROAD TRIPS
          </h1>
          <p className="mt-4 max-w-md text-lg font-semibold leading-snug text-navy sm:text-xl">
            Reliable Car Rental &amp; Travel Services
            <br />
            in Hyderabad
          </p>
          <p className="mt-4 text-sm font-medium text-ink/80 sm:text-base">
            Your Journey <span className="px-1.5 text-navy/40">|</span> Our Responsibility
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={site.phoneContacts.primary.phoneHref} className="min-h-11 px-6">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
            <Button href={site.phoneContacts.primary.whatsappHref} variant="whatsapp" className="min-h-11 px-6">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
