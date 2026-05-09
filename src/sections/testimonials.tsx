'use client'

import Badge from "@/app/components/badge"
import SlideEffect from "@/app/components/slide-effect"
import TextRevealEffect from "@/app/components/text-reveal-effect"
import { AnimatedTestimonials } from "@/app/components/ui/animated-testimonials"

const settings = {
  badge: {
    number: 5,
    text: 'CLIENT STORIES',
  },
  title: 'What Our Clients Say',
  description: 'Don\'t just take our word for it — hear from the businesses we\'ve helped scale.',
  testimonials: [
    {
      quote:
        "We doubled our revenue in under 3 months. Their ad strategy completely changed our business. The ROI has been incredible and the communication is always clear.",
      name: "Sarah M.",
      designation: "E-commerce Founder at UrbanKicks",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Clean execution, clear communication, and real results. Nexora helped us increase signups by 220% with their funnel optimization. Highly recommended.",
      name: "James K.",
      designation: "CEO at TaskFlow AI",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Finally an agency that focuses on data, not promises. They tripled our appointment bookings and helped us dominate local search. A game changer for our practice.",
      name: "Ayesha R.",
      designation: "Founder at Glow Dental Clinic",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The team at Nexora doesn't just run ads — they build growth systems. Our CAC dropped by 38% while our revenue grew 4x. They truly understand performance marketing.",
      name: "Marcus L.",
      designation: "CMO at ScaleUp Commerce",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Working with Nexora was the best decision we made this year. Our organic traffic grew 5x in 6 months and our conversion rate went from 1.2% to 4.8%. Absolutely world-class.",
      name: "Elena V.",
      designation: "VP Marketing at NovaBrand",
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal font-[var(--font-heading)]">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base">{settings.description}</SlideEffect>

      {/* Testimonials */}
      <SlideEffect>
        <AnimatedTestimonials autoplay testimonials={settings.testimonials} />
      </SlideEffect>
    </div>
  )
}