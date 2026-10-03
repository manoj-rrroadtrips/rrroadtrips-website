import { Mail, MapPin, Phone } from 'lucide-react'
import { site, socialLinks } from '../data/content'
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YouTubeIcon } from './Icons'
import { Logo } from './Logo'

const socialIcons = {
  WhatsApp: WhatsAppIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
} as const

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1.15fr_0.9fr] lg:gap-8">
        <Logo variant="light" placement="footer" />

        <address className="not-italic">
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            {Object.entries(site.phoneContacts).map(([kind, contact]) => (
              <li key={contact.phoneHref} className="flex items-center gap-3">
                <a href={contact.phoneHref} className="inline-flex items-center gap-3 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {kind === 'alternative' ? contact.phoneDisplay : contact.phoneDisplay}
                </a>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${contact.phoneDisplay}`}
                  className="text-white/90 hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </li>
            ))}
            <li>
              <a href={site.emailHref} className="inline-flex items-center gap-3 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </address>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-end">
          <div className="lg:text-right">
            <p className="text-sm font-semibold">Follow Us</p>
            <ul className="mt-3 flex gap-2.5 lg:justify-end">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label]
                const isWhatsApp = link.label === 'WhatsApp'
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        isWhatsApp ? 'bg-whatsapp text-white' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <p className="font-script text-4xl leading-none text-white/95 sm:text-right">
            Travel More
            <br />
            Worry Less
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        <p className="flex flex-wrap items-center justify-center gap-2">
          <span>© 2025 RR ROAD TRIPS. All Rights Reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Developed and maintained by{' '}
            <a
              href="https://lakkydev.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition hover:text-white"
            >
              lakkydev.in
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
