'use client'

import Badge from "@/app/components/badge"
import Card from "@/app/components/card"
import SlideEffect from "@/app/components/slide-effect"
import { TrendingUp, ArrowDownRight, ShoppingBag, Cpu, MapPin } from "lucide-react"

const settings = {
  badge: {
    number: 3,
    text: 'CASE STUDIES',
  },
  title: 'Real Results for Real Businesses',
  description: 'We don\'t just talk strategy — we deliver results. Here\'s how we\'ve helped businesses like yours achieve measurable growth.',
  cases: [
    {
      icon: ShoppingBag,
      brand: 'UrbanKicks',
      type: 'E-commerce Brand',
      metrics: [
        { icon: TrendingUp, value: '4.1x', label: 'ROAS in 60 days' },
        { icon: ArrowDownRight, value: '-38%', label: 'Reduced CAC' },
      ],
      description: 'Optimized Meta ad funnels and creative strategy to drive explosive revenue growth.'
    },
    {
      icon: Cpu,
      brand: 'TaskFlow AI',
      type: 'SaaS Startup',
      metrics: [
        { icon: TrendingUp, value: '+220%', label: 'More Signups' },
        { icon: TrendingUp, value: '6.8%', label: 'Conversion Rate (from 2.3%)' },
      ],
      description: 'Full funnel redesign and landing page optimization to supercharge signup rates.'
    },
    {
      icon: MapPin,
      brand: 'Glow Dental Clinic',
      type: 'Local Business',
      metrics: [
        { icon: TrendingUp, value: '3x', label: 'More Bookings' },
        { icon: TrendingUp, value: '#1', label: 'Local SEO Rankings' },
      ],
      description: 'Google Ads optimization and local SEO domination for consistent patient flow.'
    },
  ]
}

export default function Features3() {
  return (
    <div id='results' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
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

      {/* Case Studies Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {settings.cases.map((caseStudy, index) => (
          <SlideEffect key={index} direction="top" delay={index * 0.15} className="col-span-1 h-full" isSpring={false}>
            <Card>
              {/* Brand header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <caseStudy.icon className="text-primary" size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg text-black font-semibold font-[var(--font-heading)]">{caseStudy.brand}</h3>
                  <span className="text-xs font-[var(--font-accent)]">{caseStudy.type}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex gap-4 w-full">
                {caseStudy.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="flex-1 p-3 rounded-lg bg-muted text-center">
                    <div className="text-xl font-bold text-primary font-[var(--font-heading)]">{metric.value}</div>
                    <div className="text-[11px] mt-1 font-[var(--font-accent)]">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm">{caseStudy.description}</p>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}