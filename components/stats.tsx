import { TrendingUp, Users, Award, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Served",
    color: "text-blue-600",
  },
  {
    icon: TrendingUp,
    value: "2M+",
    label: "Followers Grown",
    color: "text-purple-600",
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
    color: "text-orange-500",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    color: "text-blue-600",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
