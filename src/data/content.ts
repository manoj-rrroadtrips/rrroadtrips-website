export const site = {
  name: 'RR ROAD TRIPS',
  tagline: 'SAFE • COMFORTABLE • ON TIME',
  phoneDisplay: '7997209002',
  phoneHref: 'tel:7997209002',
  whatsappHref: 'https://wa.me/917997209002',
  email: 'rrroadtrips@gmail.com',
  emailHref: 'mailto:rrroadtrips@gmail.com',
  address: 'Bachupally, Hyderabad – 500090',
  location: 'Hyderabad, Telangana',
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Cars & Pricing', href: '#cars' },
  { label: 'Popular Routes', href: '#routes' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const services = [
  { title: 'Local Hyderabad Trips', icon: 'pin' },
  { title: 'Outstation Trips', icon: 'route' },
  { title: 'Airport Pickup & Drop', icon: 'plane' },
  { title: 'One Way Trips', icon: 'arrow' },
  { title: 'Round Trips', icon: 'round' },
  { title: 'Corporate Travel', icon: 'briefcase' },
  { title: 'Wedding & Event Transportation', icon: 'rings' },
] as const

export type ServiceIcon = (typeof services)[number]['icon']

export const vehicles = [
  {
    id: 'dzire',
    name: 'Dzire',
    seats: '4 + 1',
    price: 14,
    image: '/images/car-dzire.png',
    alt: 'White Dzire sedan available for hire',
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    seats: '6 + 1',
    price: 16,
    image: '/images/car-ertiga.png',
    alt: 'Silver Ertiga MPV available for hire',
  },
  {
    id: 'innova',
    name: 'Innova (New)',
    seats: '7 + 1',
    price: 22,
    image: '/images/car-innova.png',
    alt: 'White Innova MPV available for hire',
  },
] as const

export const routes = [
  'Hyderabad → Vijayawada',
  'Hyderabad → Srisailam',
  'Hyderabad → Tirupati',
  'Hyderabad → Airport',
] as const

export const socialLinks = [
  { label: 'WhatsApp', href: site.whatsappHref },
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/rrroadtrips' },
  { label: 'YouTube', href: 'https://youtube.com/' },
] as const
