import { AboutUs } from './components/AboutUs'
import { BookingSection } from './components/BookingSection'
import { CarsPricing } from './components/CarsPricing'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PopularRoutes } from './components/PopularRoutes'
import { Services } from './components/Services'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <CarsPricing />
        <section className="bg-white" aria-label="Routes and company">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16">
            <PopularRoutes />
            <AboutUs />
          </div>
        </section>
        <BookingSection />
      </main>
      <Footer />
    </>
  )
}
