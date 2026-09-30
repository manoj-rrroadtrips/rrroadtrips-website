import { Phone } from 'lucide-react'
import { site } from '../data/content'
import { Button } from './Button'
import { WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-[#f8fbfc] md:bg-[#d7ebf7]">
      <img
        src="/images/hero_banner.jpeg"
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-white/90 via-white/65 to-transparent md:block" />

      <div className="relative mx-auto max-w-[1200px] px-4 pb-5 pt-10 md:grid md:min-h-[480px] md:grid-cols-2 md:items-center md:py-8">
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
            <Button href={site.phoneHref} className="min-h-11 px-6">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
            <Button href={site.whatsappHref} variant="whatsapp" className="min-h-11 px-6">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
      <img src="/images/hero_banner.jpeg" alt="" className="block h-auto w-full md:hidden" />
    </section>
  )
}
