'use client'

import Navbar from "@/app/components/navbar";
import SlideEffect from "@/app/components/slide-effect";
import TextBlurEffect from "@/app/components/text-blur-effect";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

import Link from "next/link";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";

const settings = {
  headline: 'Scale Your Business with Data-Driven Marketing',
  subheadline: 'Nexora Marketing is a performance-focused digital agency helping startups and businesses grow through paid ads, SEO, conversion optimization, and data-driven strategies.',
  mainCTA: {
    content: 'get free audit',
    href: '#cta'
  },
  secondaryCTA: {
    content: 'book a strategy call',
    href: '#cta'
  },
  reviews: [
    {
      name: "Sarah M.",
      designation: "E-commerce Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "James K.",
      designation: "SaaS CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Ayesha R.",
      designation: "Startup Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Alex T.",
      designation: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Lisa W.",
      designation: "Brand Manager",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    }
  ],
  stats: [
    { value: '120+', label: 'Clients Scaled' },
    { value: '$8M+', label: 'Ad Spend Managed' },
    { value: '3.2x', label: 'Avg ROAS Increase' },
    { value: '95%', label: 'Client Retention' },
  ]
}

export default function Hero() {
  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-28 z-50 relative">
      <Navbar />

      <section className="flex flex-col gap-8 lg:gap-11 items-center text-center">
        {/* Headline */}
        <h1 className="text-black text-4xl md:text-6xl lg:text-hero font-medium tracking-tight leading-none xl:max-w-3/4 font-[var(--font-heading)]">
          <TextBlurEffect className='text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60'>{settings.headline}</TextBlurEffect>
        </h1>

        {/* Sub-headline */}
        <SlideEffect
          delay={0}
          className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto"
        >
          {settings.subheadline}
        </SlideEffect>

        {/* CTA */}
        <SlideEffect
          className="flex flex-col gap-8 md:gap-5 items-center justify-center w-full md:w-fit"
        >
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">
            <Link href={settings.mainCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>
            </Link>

            <Link href={settings.secondaryCTA.href} className="w-full">
              <Button size='lg' className="capitalize w-full hidden lg:flex" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>

              <Button size='default' className="capitalize w-full flex lg:hidden" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>
            </Link>
          </div>

          {/* Reviews */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
            <AnimatedTooltip items={settings.reviews} />

            <div className="flex flex-col justify-center items-center md:items-start gap-1 md:gap-2">
              <div className="flex gap-px">
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
                <Star size={16} fill='oklch(0.795 0.184 86.047)' className="text-yellow-500" />
              </div>

              <span className="text-xs">Trusted by 120+ Growing Businesses</span>
            </div>
          </div>
        </SlideEffect>

        {/* Social Proof Stats Strip */}
        <SlideEffect className="w-full" isSpring={false} duration={1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl mx-auto">
            {settings.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-1 p-4 rounded-xl bg-secondary">
                <span className="text-2xl md:text-3xl font-bold text-primary font-[var(--font-heading)]">{stat.value}</span>
                <span className="text-xs md:text-sm font-[var(--font-accent)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </SlideEffect>


      </section>
    </div>
  )
}