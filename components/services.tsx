import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Users, Sparkles } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Marketing & Social Media Management",
    description:
      "Comprehensive social media strategy, content creation, and community management to build your brand presence across all platforms.",
    image: "/social-media-dashboard.png",
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Target,
    title: "Paid Advertising & SEO",
    description:
      "Data-driven paid advertising campaigns on Facebook, Instagram, Google, and more. Plus expert SEO optimization to increase organic visibility.",
    image: "/digital-advertising-campaign-performance-metrics.jpg",
    color: "from-purple-600 to-purple-500",
  },
  {
    icon: Users,
    title: "Talent Management & Representation",
    description:
      "Professional representation for creators and influencers. We handle negotiations, partnerships, and career development.",
    image: "/influencer-content-creator-professional-photoshoot.jpg",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: Sparkles,
    title: "Dedicated Growth Team",
    description:
      "A committed team working exclusively on growing your social media presence with proven strategies and consistent engagement.",
    image: "/collaborative-team-working-on-digital-strategy.jpg",
    color: "from-blue-600 to-purple-600",
  },
]

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
