'use client'

import SlideEffect from "@/app/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"

const settings = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients start seeing measurable improvements within the first 30 days. Significant ROI typically materializes within 60-90 days as campaigns are optimized and scaled. SEO results take 3-6 months for substantial organic growth.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across e-commerce, SaaS, local businesses, and B2B companies. Our data-driven approach adapts to any industry — we\'ve scaled businesses in healthcare, finance, retail, tech, and professional services.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No, we don\'t lock you into long-term contracts. We operate on month-to-month agreements because we believe our results should earn your business, not a contract. Most clients stay 12+ months because of the results we deliver.',
    },
    {
      question: 'How is Nexora different from other agencies?',
      answer: 'We\'re obsessed with data and ROI, not vanity metrics. Every strategy is backed by analytics, every campaign is continuously optimized, and every client gets a dedicated growth strategist. We treat your budget like our own money.',
    },
    {
      question: 'What does the free audit include?',
      answer: 'Our free audit includes a comprehensive analysis of your current marketing performance, competitor benchmarking, conversion funnel review, SEO health check, and a custom growth roadmap with actionable recommendations.',
    },
    {
      question: 'Can I switch plans as my business grows?',
      answer: 'Absolutely! You can upgrade or adjust your plan anytime. As your business scales, we scale with you — adding channels, increasing budgets, and expanding strategies to match your growth trajectory.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header capitalize text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60 font-medium leading-normal font-[var(--font-heading)]">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-black">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger className="font-[var(--font-heading)]">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}