import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bounce, Fade } from "react-awesome-reveal";
import { Handshake } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "JKUAT",
      logo: "/JKUAT.png",
      url: "https://www.jkuat.ac.ke",
      height: 120
    },
    {
      name: "JHUB Africa",
      logo: "/JHUB Africa.png",
      url: "https://jhubafrica.com/",
      height: 120
    }
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <Fade triggerOnce={true}>
        <div className="text-center mb-12">
          <h2 className="text-[#47f969] text-lg font-medium mb-3">COLLABORATIONS</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partners</h3>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="h-5 w-5 text-[#47f969]" />
            <p className="text-gray-300 italic">Working together for innovation</p>
          </div>
        </div>
      </Fade>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partners.map((partner, index) => (
          <Bounce key={index} delay={index * 100} triggerOnce={true}>
            <Link 
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="bg-[#021500]/30 border border-[#224103] hover:border-[#47f969] rounded-xl p-8 transition-all duration-300 w-full h-full flex items-center justify-center group-hover:bg-[#021500]/50">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#47f969]/10 to-[#D6F9C6]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      height={0}
                      width={200}
                      style={{ 
                        width: "auto", 
                        height: `${partner.height}px`,
                        filter: "brightness(0) invert(1)",
                        opacity: 0.9,
                        transition: "all 0.3s ease"
                      }}
                      className="group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              <span className="mt-3 text-[#47f969] group-hover:text-[#D6F9C6] transition-colors duration-300 font-medium">
                {partner.name}
              </span>
            </Link>
          </Bounce>
        ))}
      </div>
    </div>
  );
};

export default Partners;
