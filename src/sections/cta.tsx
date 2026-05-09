'use client'

import SlideEffect from "@/app/components/slide-effect"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const settings = {
  title: 'Ready to Grow Your Business?',
  description: 'Let\'s build a marketing system that brings consistent, scalable revenue. Get started with a free consultation and see what data-driven growth looks like.',
  CTA_1: {
    content: 'Get Free Consultation',
    href: '#'
  },
  CTA_2: {
    content: 'Start Your Growth Plan',
    href: '#'
  }
}

export default function CTA() {
  return (
    <SlideEffect id='cta' isSpring={false} className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center rounded-2xl bg-secondary">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl lg:text-header capitalize font-medium leading-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-[var(--font-heading)]">{settings.title}</h2>

      {/* Description */}
      <p className="px-0 sm:px-10 md:px-0 w-full max-w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</p>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link href={settings.CTA_1.href}>
          <Button size='lg'>
            {settings.CTA_1.content}
            <ArrowRight />
          </Button>
        </Link>
        <Link href={settings.CTA_2.href}>
          <Button size='lg' variant='secondary'>{settings.CTA_2.content}</Button>
        </Link>
      </div>
    </SlideEffect>
  )
}