'use client'

import Badge from "@/app/components/badge"
import Card from "@/app/components/card"
import SlideEffect from "@/app/components/slide-effect"
import { Rocket, TrendingUp, Target, Megaphone, BarChart3 } from "lucide-react"

const settings = {
  badge: {
    number: 1,
    text: 'OUR EXPERTISE',
  },
  title: 'What We Do',
  description: 'We combine performance marketing, analytics, and conversion science to deliver measurable growth for modern brands.',
  services: [
    {
      icon: Rocket,
      title: 'Performance Marketing',
      content: 'We run high-ROI ad campaigns on Google, Meta, and TikTok optimized for conversions and maximum return on ad spend.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Growth Systems',
      content: 'Rank higher, get organic traffic, and dominate search results with technical + content SEO strategies built for long-term growth.',
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      content: 'Turn more visitors into customers through landing page optimization, A/B testing, and data-backed UX improvements.',
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      content: 'Position your business for long-term growth with clear messaging, market positioning, and a brand identity that resonates.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      content: 'Full funnel tracking, attribution setup, and performance dashboards so you always know exactly what\'s working.',
    },
  ]
}

export default function Features1() {
  return (
    <div id='services' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-[var(--font-heading)]">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Services Grid - top row 3 cols, bottom row 2 cols */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {settings.services.slice(0, 3).map((service, index) => (
          <SlideEffect key={index} direction="top" delay={index * 0.1} className="col-span-1 h-full" isSpring={false}>
            <Card>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-title text-black font-medium font-[var(--font-heading)]">{service.title}</h3>
              <p>{service.content}</p>
            </Card>
          </SlideEffect>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settings.services.slice(3).map((service, index) => (
          <SlideEffect key={index + 3} direction="top" delay={(index + 3) * 0.1} className="col-span-1 h-full" isSpring={false}>
            <Card>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-title text-black font-medium font-[var(--font-heading)]">{service.title}</h3>
              <p>{service.content}</p>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}