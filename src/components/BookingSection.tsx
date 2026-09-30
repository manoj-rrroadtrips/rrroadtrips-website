import { Phone } from 'lucide-react'
import { BookingForm } from './BookingForm'

export function BookingSection() {
  return (
    <section id="contact" className="relative scroll-mt-24" aria-labelledby="booking-heading">
      <img
        src="/images/booking-road.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-dark/35" />
      <div className="relative mx-auto max-w-[1200px] px-4 py-10 sm:py-14">
        <div className="grid overflow-hidden bg-white shadow-2xl lg:grid-cols-[320px_1fr]">
          <div className="bg-navy px-7 py-10 text-white sm:px-9">
            <h2 id="booking-heading" className="text-3xl font-extrabold tracking-tight">
              Book Your Ride
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
              Fill in the details and we will get back to you shortly.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="text-base font-semibold leading-snug">
                Quick Booking
                <br />
                &amp; Instant Confirmation
              </p>
            </div>
          </div>
          <div className="bg-white px-5 py-7 sm:px-8 sm:py-8">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
