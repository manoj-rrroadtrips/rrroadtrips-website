import { Users } from 'lucide-react'

type CarCardProps = {
  name: string
  seats: string
  localRentalRates: readonly {
    fare: number
    durationHours: number
    includedKm: number
    extraKmRate: number
  }[]
  outstationRentalRates: {
    perKmRate: number
    packageFare: number
    includedKm: number
    durationHours: number
    extraKmRate: number
  }
  image: string
  alt: string
}

export function CarCard({ name, seats, localRentalRates, outstationRentalRates, image, alt }: CarCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_24px_rgba(6,52,91,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(6,52,91,0.12)]">
      <div className="flex h-40 items-end justify-center bg-gradient-to-b from-white to-sky/70 px-3 pt-3 sm:h-44">
        <img src={image} alt={alt} className="h-32 w-full object-contain sm:h-36" width={480} height={270} />
      </div>
      <div className="flex flex-col items-center px-4 pt-3 text-center">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-[11px] font-medium text-white sm:text-xs">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          Seating Capacity: {seats}
        </p>
      </div>
      <div className="grid flex-1 gap-3 p-4 sm:grid-cols-2">
        <section className="rounded-md bg-sky/45 p-3" aria-label={`${name} local rents`}>
          <h4 className="mb-2 text-sm font-bold text-navy">Local rents</h4>
          <ul className="space-y-2">
            {localRentalRates.map((rate) => (
              <li key={rate.durationHours} className="rounded-md bg-white p-2.5">
                <p className="text-lg font-bold text-navy">₹{rate.fare.toLocaleString('en-IN')}</p>
                <p className="text-xs text-ink">{rate.durationHours} hrs · {rate.includedKm} km</p>
                <p className="mt-1 text-[11px] leading-4 text-muted">Extra: ₹{rate.extraKmRate}/km</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-md bg-gold/20 p-3" aria-label={`${name} outstation rents`}>
          <h4 className="mb-2 text-sm font-bold text-navy">Outstation rents</h4>
          <ul className="space-y-2">
            <li className="rounded-md bg-white p-2.5">
              <p className="text-lg font-bold text-navy">₹{outstationRentalRates.perKmRate}/km</p>
              <p className="text-[11px] leading-4 text-muted">Tolls &amp; fuel included</p>
            </li>
            <li className="rounded-md bg-white p-2.5">
              <p className="text-lg font-bold text-navy">₹{outstationRentalRates.packageFare.toLocaleString('en-IN')}</p>
              <p className="text-xs text-ink">
                {outstationRentalRates.includedKm} km · {outstationRentalRates.durationHours} hrs
              </p>
              <p className="mt-1 text-[11px] leading-4 text-muted">
                Tolls &amp; fuel included; above {outstationRentalRates.includedKm} km: ₹
                {outstationRentalRates.extraKmRate}/km
              </p>
            </li>
          </ul>
        </section>
      </div>
      <p className="bg-gold py-2.5 text-center text-sm font-semibold text-navy">AC | Comfortable | Safe</p>
    </article>
  )
}
