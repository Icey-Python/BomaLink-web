import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navlink from "./Navlink";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#021500]/95 backdrop-blur-md shadow-lg" 
          : "bg-gradient-to-r from-[#021500]/80 to-[#224103]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center hover:scale-105 transition-transform duration-300">
            <div className={`relative overflow-hidden rounded-full ${scrolled ? 'p-0' : 'p-0.5'}`}>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#47f969] to-[#D6F9C6] ${scrolled ? 'opacity-0' : 'opacity-30'} blur-sm transition-opacity duration-300`}></div>
              <div className="relative">
                <Image 
                  className="cursor-pointer" 
                  src="/Logo.png" 
                  alt="GeoPasture Logo" 
                  width={scrolled ? 75 : 85} 
                  height={scrolled ? 75 : 85} 
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Navlink label="HOME" path="#Home" />
            <Navlink label="ABOUT US" path="#story" />
            <Navlink label="SERVICES" path="#service" />
            <Navlink label="GALLERY" path="#Gallery" />
            <Navlink label="TEAM" path="#team" />
            
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  className="relative px-6 py-2.5 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#47f969] to-[#3ad959] rounded-lg blur-[0.5px] opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3 bg-[#47f969] text-[#021500] font-semibold px-5 py-2.5 rounded-lg shadow-[0_4px_14px_0_rgba(71,249,105,0.25)] hover:shadow-[0_6px_20px_0_rgba(71,249,105,0.35)] transition-all duration-300">
                    <span>Get App</span>
                    <ArrowDownToLine size={18} />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#021500] border border-[#47f969]/20 text-white shadow-[0_0_30px_rgba(71,249,105,0.15)] backdrop-blur-xl rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#47f969]">
                    Get GeoPasture App
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-xl text-gray-300">
                  <div className="space-y-6 py-6">
                    <p>GeoPasture App is coming soon to revolutionize pasture management!</p>
                    <div className="bg-[#224103]/30 p-6 rounded-lg border border-[#47f969]/10">
                      <h3 className="text-lg font-medium text-white mb-4">Join the Waitlist</h3>
                      <p className="text-base text-gray-300 mb-6">Be the first to know when our app launches and receive exclusive early access.</p>
                      
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">First name</label>
                            <input 
                              type="text" 
                              id="first-name" 
                              className="w-full bg-white/5 border border-[#47f969]/20 rounded-lg px-4 py-3 text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#47f969] focus:border-[#47f969]" 
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">Last name</label>
                            <input 
                              type="text" 
                              id="last-name" 
                              className="w-full bg-white/5 border border-[#47f969]/20 rounded-lg px-4 py-3 text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#47f969] focus:border-[#47f969]" 
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email <span className="text-[#47f969]">*</span></label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full bg-white/5 border border-[#47f969]/20 rounded-lg px-4 py-3 text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#47f969] focus:border-[#47f969]" 
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="occupation" className="block text-sm font-medium text-gray-300 mb-2">Occupation</label>
                          <select
                            id="occupation"
                            className="w-full bg-white/5 border border-[#47f969]/20 rounded-lg px-4 py-3 text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-[#47f969] focus:border-[#47f969]"
                          >
                            <option value="" className="bg-[#021500]">Select your occupation</option>
                            <option value="farmer" className="bg-[#021500]">Farmer</option>
                            <option value="pastoralist" className="bg-[#021500]">Pastoralist</option>
                            <option value="agricultural-expert" className="bg-[#021500]">Agricultural Expert</option>
                            <option value="other" className="bg-[#021500]">Other</option>
                          </select>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="notifications"
                              type="checkbox"
                              className="w-4 h-4 border border-[#47f969]/20 rounded bg-white/5 focus:ring-[#47f969] focus:ring-1"
                            />
                          </div>
                          <label htmlFor="notifications" className="ml-2 text-sm text-gray-300">
                            I'd like to receive updates about new features and exclusive offers
                          </label>
                        </div>
                      </form>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Image src="/app-store.png" alt="App Store" width={120} height={40} className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                        <Image src="/play-store.png" alt="Play Store" width={120} height={40} className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-gray-400">Coming Soon</p>
                    </div>
                  </div>
                </DialogDescription>
                <DialogFooter className="sm:justify-between">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border border-[#47f969]/10">
                      Close
                    </Button>
                  </DialogClose>
                  <Button className="bg-[#47f969] hover:bg-[#3ad959] text-[#021500]">
                    Join Waitlist
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <button
              className="p-2 rounded-full bg-[#021500]/50 border border-[#47f969]/20 text-[#47f969] hover:bg-[#47f969]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-[#021500]/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="px-8 py-6 flex justify-between items-center border-b border-[#47f969]/10">
            <div className="flex items-center space-x-3">
              <Image src="/Logo.png" alt="GeoPasture Logo" width={50} height={50} />
              <h1 className="text-xl font-bold text-white">GeoPasture</h1>
            </div>
            <button
              className="p-2 rounded-full bg-[#021500]/50 border border-[#47f969]/20 text-[#47f969] hover:bg-[#47f969]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-8 py-12 flex-1">
            <nav className="flex flex-col space-y-8">
              {["HOME", "ABOUT US", "SERVICES", "GALLERY", "TEAM"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xl font-medium text-white hover:text-[#47f969] transition-colors py-2 border-b border-[#47f969]/10"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}

              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    className="relative w-full py-3.5 group mt-6"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#47f969] to-[#3ad959] rounded-lg blur-[0.5px] opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-3 bg-[#47f969] text-[#021500] font-semibold py-3 rounded-lg shadow-[0_4px_14px_0_rgba(71,249,105,0.25)] hover:shadow-[0_6px_20px_0_rgba(71,249,105,0.35)] transition-all duration-300">
                      <span>Get App</span>
                      <ArrowDownToLine size={18} />
                    </div>
                  </button>
                </DialogTrigger>
              </Dialog>
            </nav>
          </div>

          <div className="px-8 py-6 border-t border-[#47f969]/10">
            <div className="flex justify-center space-x-6">
              {["twitter", "facebook", "instagram", "linkedin"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#47f969] transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#47f969]/10 transition-all duration-300">
                    {social === "twitter" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social === "facebook" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {social === "instagram" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {social === "linkedin" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
