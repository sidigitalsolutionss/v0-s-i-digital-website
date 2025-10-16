import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
