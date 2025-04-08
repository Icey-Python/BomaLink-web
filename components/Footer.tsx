import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, ArrowUp, Heart } from 'lucide-react'

interface Props {
  tagId: string
}

function Footer({ tagId }: Props) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative w-full overflow-hidden bg-[#021500] text-white pt-24 pb-10 mt-0"
      id={tagId}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#47f969]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-[#D6F9C6]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-8 sm:px-10 lg:px-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center">
              <div className="relative h-14 w-14 mr-5 overflow-hidden rounded-xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#47f969] to-[#D6F9C6] rounded-xl blur-sm opacity-70"></div>
                <div className="relative bg-[#021500] rounded-xl p-2">
                  <Image
                    src="/Footerlogo.png"
                    alt="GeoPasture Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GeoPasture</h3>
                <p className="text-sm text-[#47f969]">Maamuzi sahihi, ushirikiano wa kudumu</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-base leading-relaxed">
              GeoPasture is a digital platform promoting peaceful coexistence between pastoralists and farmers through innovative technology solutions.
            </p>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center space-x-3 text-sm text-[#47f969] hover:text-white transition-colors duration-300 hover:scale-105 active:scale-95 transition-transform"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 transform transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-white after:content-[''] after:block after:w-16 after:h-1 after:bg-[#47f969] after:mt-3">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Team', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#47f969] transition-colors duration-300 flex items-center group text-base"
                  >
                    <span className="w-0 h-px bg-[#47f969] transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-white after:content-[''] after:block after:w-16 after:h-1 after:bg-[#47f969] after:mt-3">
              Get in Touch
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-[#47f969]/10 p-2.5 rounded-lg">
                  <Mail className="h-5 w-5 text-[#47f969]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:info.jhub@jkuat.ac.ke" className="text-white hover:text-[#47f969] transition-colors duration-300">
                    info.jhub@jkuat.ac.ke
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1 bg-[#47f969]/10 p-2.5 rounded-lg">
                  <Phone className="h-5 w-5 text-[#47f969]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a href="tel:+254707340122" className="text-white hover:text-[#47f969] transition-colors duration-300">
                    +254 707 340 122
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700" style={{ animationDelay: '300ms' }}>
            <h2 className="mb-6 text-xl font-semibold text-white">Stay Connected</h2>
            
            <div className="mb-8 rounded-xl border border-[#47f969]/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="mb-3 text-lg font-medium text-white">Newsletter</h3>
              <p className="mb-5 text-gray-300">
                Subscribe to our newsletter for the latest updates on sustainable farming practices.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0">
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-lg border border-[#47f969]/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 shadow-sm focus:border-[#47f969] focus:outline-none focus:ring-1 focus:ring-[#47f969] sm:rounded-r-none"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center rounded-lg border border-transparent bg-[#47f969] px-5 py-3 font-medium text-[#021500] shadow-sm hover:bg-[#3ad959] focus:outline-none focus:ring-2 focus:ring-[#47f969] focus:ring-offset-2 sm:rounded-l-none"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="newsletter-privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 bg-white/5 border border-[#47f969]/20 focus:ring-[#47f969]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter-privacy" className="text-gray-300">
                      I agree to receive updates about GeoPasture's services
                    </label>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="flex space-x-5">
              {[
                { icon: <Facebook className="h-4 w-4" />, href: "#" },
                { icon: <Twitter className="h-4 w-4" />, href: "#" },
                { icon: <Instagram className="h-4 w-4" />, href: "#" },
                { icon: <Linkedin className="h-4 w-4" />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#47f969]/10 bg-white/5 text-gray-400 transition-colors hover:bg-[#47f969]/10 hover:text-[#47f969]"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-[#47f969]/10 pt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} GeoPasture. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-start gap-6 md:justify-end">
              {["Privacy Policy", "Terms of Service", "Cookie Settings", "Contact Us"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-[#47f969]"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
