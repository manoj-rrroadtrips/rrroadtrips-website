import { Phone } from 'lucide-react'
import { site } from '../data/content'
import { Button } from './Button'
import { WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-[#d7ebf7]">
      <img
        src="/images/hero-charminar.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#eef6fb] via-[#eef6fb]/88 to-[#eef6fb]/15" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 to-transparent" />

      <div className="relative mx-auto grid min-h-[520px] max-w-[1200px] items-center gap-6 px-4 py-10 md:min-h-[480px] md:grid-cols-[1.05fr_0.95fr] md:py-8">
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

        <div className="animate-float relative h-48 sm:h-64 md:h-[300px] lg:h-[340px]">
          <img
            src="/images/car-ertiga.png"
            alt="Silver Ertiga ready for family and outstation trips"
            className="absolute bottom-0 right-0 w-[70%] object-contain mix-blend-multiply drop-shadow-lg"
          />
          <img
            src="/images/car-dzire.png"
            alt="White Dzire sedan ready for city travel"
            className="absolute bottom-1 left-0 w-[64%] object-contain mix-blend-multiply drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
