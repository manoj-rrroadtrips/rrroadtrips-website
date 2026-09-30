import type { ReactNode } from 'react'

type Variant = 'navy' | 'whatsapp'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsLink = CommonProps & {
  href: string
  external?: boolean
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonAsButton = CommonProps & {
  href?: undefined
  external?: never
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  navy: 'bg-navy text-white hover:bg-navy-dark',
  whatsapp: 'bg-whatsapp text-white hover:brightness-95',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:cursor-not-allowed disabled:opacity-70'

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const className = `${base} ${variants[props.variant ?? 'navy']} ${props.className ?? ''}`

  if (props.href) {
    const external = props.external || props.href.startsWith('http')
    return (
      <a
        href={props.href}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {props.children}
      </a>
    )
  }

  return (
    <button type={props.type ?? 'button'} className={className} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
