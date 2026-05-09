'use client'

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Logo from "@/app/components/logo"

const settings = {
  links: [
    { title: 'Services', href: '#services' },
    { title: 'Case Studies', href: '#results' },
    { title: 'Process', href: '#process' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Contact', href: '#cta' },
  ],
  socialMedia: [
    { title: 'Facebook', icon: Facebook, href: '/' },
    { title: 'Instagram', icon: Instagram, href: '/' },
    { title: 'LinkedIn', icon: Linkedin, href: '/' },
    { title: 'Twitter', icon: Twitter, href: '/' },
  ],
  copyright: '© 2025 Nexora Marketing. All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Logo */}
      <Logo />

      {/* Nav Links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href}>{link.title}</Link>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap md:flex-row items-center justify-center gap-7 md:gap-10">
        {settings.socialMedia.map((social, index) => (
          <Link title={social.title} key={index} href={social.href}><social.icon /></Link>
        ))}
      </div>

      {/* copyright */}
      <p className="text-center">{settings.copyright}</p>
    </footer>
  )
}