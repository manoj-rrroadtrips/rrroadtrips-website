type SectionHeadingProps = {
  title: string
  eyebrow?: string
  align?: 'left' | 'center'
  accent?: boolean
  id?: string
  className?: string
}

export function SectionHeading({
  title,
  eyebrow,
  align = 'left',
  accent = false,
  id,
  className = '',
}: SectionHeadingProps) {
  const aligned = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${aligned} ${className}`}>
      {eyebrow ? <p className="mb-1 text-sm font-semibold tracking-[0.16em] text-navy">{eyebrow}</p> : null}
      <h2 id={id} className="text-3xl font-extrabold tracking-tight text-navy sm:text-[2rem]">
        {title}
      </h2>
      {accent ? <span className="mt-3 h-1 w-12 rounded-full bg-gold" aria-hidden="true" /> : null}
    </div>
  )
}
