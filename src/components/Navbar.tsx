import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, site } from '../data/content'
import { Logo } from './Logo'
import { WhatsAppIcon } from './Icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((node): node is HTMLElement => node instanceof HTMLElement)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-3 px-4">
        <Logo compact={false} />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setActive(item.href)}
                className={`relative whitespace-nowrap px-2.5 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive ? 'font-semibold text-navy' : 'text-ink/75 hover:text-navy'
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                ) : null}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phoneDisplay}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy min-[480px]:px-4 sm:text-sm"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden min-[480px]:inline">{site.phoneDisplay}</span>
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy xl:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-slate-100 bg-white px-4 py-3 xl:hidden" aria-label="Mobile">
          <a
            href={site.phoneHref}
            className="mb-2 flex items-center gap-2 rounded-lg bg-navy px-3 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {site.phoneDisplay}
          </a>
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive = active === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-sky text-navy' : 'text-ink hover:bg-sky'
                    }`}
                    onClick={() => {
                      setActive(item.href)
                      setOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
