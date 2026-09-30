import { Users } from 'lucide-react'

type CarCardProps = {
  name: string
  seats: string
  price: number
  image: string
  alt: string
}

export function CarCard({ name, seats, price, image, alt }: CarCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_24px_rgba(6,52,91,0.05)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(6,52,91,0.12)]">
      <div className="flex h-40 items-end justify-center bg-gradient-to-b from-white to-sky/70 px-3 pt-3 sm:h-44">
        <img src={image} alt={alt} className="h-32 w-full object-contain sm:h-36" width={480} height={270} />
      </div>
      <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-3 text-center">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-[11px] font-medium text-white sm:text-xs">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          Seating Capacity: {seats}
        </p>
        <p className="mt-4 inline-flex min-w-[9.5rem] items-center justify-center rounded-full bg-navy px-5 py-2 text-lg font-bold text-white">
          ₹{price} / km
        </p>
      </div>
      <p className="bg-gold py-2.5 text-center text-sm font-semibold text-navy">AC | Comfortable | Safe</p>
    </article>
  )
}
