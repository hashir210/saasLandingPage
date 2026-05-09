'use client'

import Badge from "@/app/components/badge"
import Card from "@/app/components/card"
import SlideEffect from "@/app/components/slide-effect"
import TextRevealEffect from "@/app/components/text-reveal-effect"
import { Search, Lightbulb, Zap, RotateCcw } from "lucide-react"

const settings = {
  badge: {
    number: 4,
    text: 'OUR PROCESS',
  },
  title: 'How We Work',
  description: 'A proven, systematic approach to scaling your marketing and maximizing every dollar you invest.',
  steps: [
    {
      number: '01',
      icon: Search,
      title: 'Audit & Analysis',
      content: 'We analyze your current marketing performance, identify gaps and opportunities, and benchmark against competitors to build a clear picture of where you stand.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy Build',
      content: 'We design a custom growth strategy tailored to your business goals, target audience, and budget — no cookie-cutter playbooks.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Execution',
      content: 'We run campaigns, optimize funnels, deploy marketing systems, and build the infrastructure needed for sustainable growth.',
    },
    {
      number: '04',
      icon: RotateCcw,
      title: 'Optimization',
      content: 'Continuous testing, iteration, and scaling for maximum ROI. We never set and forget — every campaign gets better over time.',
    },
  ]
}

export default function Features4() {
  return (
    <div id='process' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal font-[var(--font-heading)]">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settings.steps.map((step, index) => (
          <SlideEffect key={index} direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1} className="col-span-1 h-full" isSpring={false}>
            <Card className="relative overflow-hidden">
              {/* Step number watermark */}
              <div className="absolute top-4 right-6 text-6xl font-bold text-black/5 font-[var(--font-heading)] select-none">{step.number}</div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <step.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-title text-black font-medium font-[var(--font-heading)]">{step.title}</h3>
              <p className="relative z-10">{step.content}</p>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}