'use client'

import Badge from "@/app/components/badge"
import SlideEffect from "@/app/components/slide-effect"
import { CheckCircle } from "lucide-react"

const settings = {
  badge: {
    number: 2,
    text: 'ABOUT US',
  },
  title: 'Built for Growth-Focused Businesses',
  description: 'Nexora Marketing was founded with one goal — to help modern businesses scale using data, not guesswork. We combine performance marketing, analytics, and conversion science to deliver measurable growth.',
  highlights: [
    'Data-driven decision making, not assumptions',
    'Transparent reporting with real-time dashboards',
    'Dedicated growth strategist for every client',
    'Proven frameworks tested across 120+ businesses',
    'Full-funnel approach from awareness to conversion',
    'Continuous optimization for maximum ROI',
  ]
}

export default function Features2() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal font-[var(--font-heading)]">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Highlights Grid */}
      <SlideEffect className="w-full" isSpring={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {settings.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
              <CheckCircle className="text-primary shrink-0" size={20} />
              <span className="text-black text-sm md:text-base font-[var(--font-accent)]">{highlight}</span>
            </div>
          ))}
        </div>
      </SlideEffect>
    </div>
  )
}