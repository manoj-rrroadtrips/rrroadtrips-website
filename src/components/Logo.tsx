import { site } from '../data/content'

type LogoProps = {
  variant?: 'dark' | 'light'
  compact?: boolean
  placement?: 'header' | 'footer'
}

export function Logo({ variant = 'dark', compact = false, placement = 'header' }: LogoProps) {
  const imageWidth = placement === 'footer' ? 'w-56 sm:w-64' : compact ? 'w-36' : 'w-40 sm:w-44'

  return (
    <a href="#home" className="flex shrink-0 items-center">
      <img
        src={variant === 'light' ? '/images/logo_white.png' : '/images/logo.png'}
        alt={`${site.name} logo`}
        className={`${imageWidth} h-auto shrink-0 object-contain`}
      />
    </a>
  )
}
