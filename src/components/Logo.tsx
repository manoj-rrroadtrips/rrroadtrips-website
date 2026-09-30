import { site } from '../data/content'

type LogoProps = {
  variant?: 'dark' | 'light'
  compact?: boolean
  placement?: 'header' | 'footer'
}

export function Logo({ variant = 'dark', compact = false, placement = 'header' }: LogoProps) {
  const tone = variant === 'light' ? 'text-white' : 'text-navy'

  return (
    <a href="#home" className={`flex shrink-0 items-center gap-2 ${tone}`}>
      <svg
        viewBox="0 0 72 32"
        className={compact ? 'h-7 w-12 shrink-0' : 'h-8 w-14 shrink-0 sm:h-9 sm:w-[4.5rem]'}
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M6 20h7l3.2-6.2c.4-.8 1.2-1.3 2.1-1.3H36l5.2 5.2c.5.5 1.2.8 1.9.8H62"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4 20.5h58.5c1.4 0 2.5 1.1 2.5 2.5v1.2H2.8V23c0-1.4 1.1-2.5 2.5-2.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M20 12.5 23.2 8h14.2l4.6 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="18" cy="24.2" r="3.3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="52" cy="24.2" r="3.3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <span className="min-w-0">
        <span
          className={`block whitespace-nowrap font-extrabold leading-none tracking-tight ${
            compact ? 'text-[13px]' : 'text-[13px] sm:text-[17px]'
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 font-medium tracking-[0.12em] ${placement === 'header' ? 'hidden sm:block' : 'block'} ${
            variant === 'light' ? 'text-white/80' : 'text-muted'
          } ${compact ? 'text-[8px]' : 'text-[9px] sm:text-[10px]'}`}
        >
          {site.tagline}
        </span>
      </span>
    </a>
  )
}
