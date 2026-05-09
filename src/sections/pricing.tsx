'use client'

import Card from "@/app/components/card"
import SlideEffect from "@/app/components/slide-effect"
import { Button } from "@/app/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Growth Plans',
  description: 'Transparent pricing with no hidden fees. Choose the plan that fits your growth stage and let us handle the rest.',
  plan_1: {
    planName: 'Starter',
    price: 1500,
    currency: '$',
    description: 'For startups and small businesses ready to start scaling.',
    cta: 'start growing today',
    features: [
      '1 Marketing Channel',
      'Monthly Performance Reports',
      'Landing Page Audit',
      'Basic SEO Setup',
      'Google Analytics Setup',
      'Email Support',
    ]
  },
  plan_2: {
    planName: 'Growth',
    price: 3500,
    currency: '$',
    description: 'For businesses ready to aggressively scale their marketing.',
    cta: 'book a strategy call',
    features: [
      'Up to 3 Marketing Channels',
      'Weekly Performance Reports',
      'A/B Testing & CRO',
      'Full SEO Strategy',
      'Funnel Design & Optimization',
      'Dedicated Growth Strategist',
      'Priority Slack Support',
    ]
  },
  plan_3: {
    planName: 'Enterprise',
    price: null,
    currency: '',
    description: 'For established brands looking for a full-service growth partner.',
    cta: 'get custom quote',
    features: [
      'Unlimited Channels',
      'Custom Dashboard & Reporting',
      'Brand Strategy & Positioning',
      'Creative Production',
      'Executive Growth Reviews',
      'Dedicated Team of Specialists',
    ]
  },
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal font-[var(--font-heading)]">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* plan 1 */}
        <SlideEffect isSpring={false} delay={0.1} className="text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black font-[var(--font-heading)] font-semibold">{settings.plan_1.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black font-[var(--font-heading)]">{settings.plan_1.currency}{settings.plan_1.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_1.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_1.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_1.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 2 */}
        <SlideEffect isSpring={false} delay={0.2} className="flex flex-col gap-6 text-base">
          <Card className="bg-secondary">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="capitalize text-start text-black font-[var(--font-heading)] font-semibold">{settings.plan_2.planName}</div>
              <div className="text-xs bg-accent px-2 py-1 rounded-full text-white capitalize font-[var(--font-accent)]">most popular</div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-black font-[var(--font-heading)]">{settings.plan_2.currency}{settings.plan_2.price}</span>
              <span className="text-sm">/month</span>
            </div>
            <Button className="w-full">{settings.plan_2.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_2.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_2.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>

        {/* plan 3 */}
        <SlideEffect isSpring={false} delay={0.3} className="flex flex-col gap-6 text-base">
          <Card className="bg-white">
            <div className="capitalize text-start text-black font-[var(--font-heading)] font-semibold">{settings.plan_3.planName}</div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium text-4xl text-primary font-[var(--font-heading)]">Custom</span>
            </div>
            <Button className="w-full" variant="secondary">{settings.plan_3.cta}</Button>
            <div className="text-start space-y-6">
              <p className="text-black text-sm">{settings.plan_3.description}</p>

              <div className="flex flex-col items-start gap-4 text-sm">
                {settings.plan_3.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck className="text-primary" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </SlideEffect>
      </div>
    </div>
  )
}