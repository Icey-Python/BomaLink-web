import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Props{
  tagId: string,
}

const images: string[] = [
    "/group-1.jpeg",
    "/group-2.jpeg",
    "/group-3.jpeg",
    "/group-6.jpeg",
    "/group-9.jpeg"
]

export function Gallery({tagId}:Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    
    // Get initial index
    setActiveIndex(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full px-5 md:px-20 lg:px-20 py-16 bg-gradient-to-b from-[#D6F9C6]/80 to-[#D6F9C6]/40" id={tagId}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 h-60 w-60 rounded-full bg-[#47f969]/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-[#47f969]/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-green-900 relative inline-block">
            Gallery
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#47f969] to-[#3ad959] transform origin-left animate-in slide-in-from-left duration-1000"></span>
          </h2>
          <p className="text-sm lg:text-lg mt-4 max-w-3xl mx-auto text-green-800 font-medium">
            Browse through our collection of photographs capturing our group in lively discussions, asking questions, and learning from the invaluable knowledge and experiences shared by the pastoralists. These images highlight the collaborative spirit and the exchange of insights that are at the heart of Geopasture&apos;s mission.
          </p>
        </div>
        
        {/* Main carousel */}
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full md:w-3/4 lg:w-3/4 mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
              align: "center",
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-3/4 lg:basis-2/3">
                  <div className="p-1">
                    <Card className="border-none overflow-hidden bg-transparent shadow-none">
                      <CardContent className="p-0 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#47f969]/20 to-[#3ad959]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-green-900/10 border-2 border-white/20 transform transition-transform duration-500 group-hover:scale-[0.98]">
                          <div className="aspect-[4/3] relative">
                            <Image 
                              alt={`Gallery image ${index + 1}`} 
                              src={image} 
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-bold">GeoPasture Field Visit {index + 1}</h3>
                            <p className="text-white/80 text-sm">Connecting farmers and pastoralists for sustainable agriculture</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-[#47f969] w-8" 
                      : "bg-green-900/30 hover:bg-green-900/50"
                  }`}
                  onClick={() => {
                    if (api) {
                      api.scrollTo(index);
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <CarouselPrevious className="cursor-pointer -left-4 md:-left-12 bg-white/80 text-green-900 hover:bg-white hover:text-[#47f969] border-none shadow-lg" />
            <CarouselNext className="cursor-pointer -right-4 md:-right-12 bg-white/80 text-green-900 hover:bg-white hover:text-[#47f969] border-none shadow-lg" />
          </Carousel>
        </div>
        
        {/* Thumbnail preview */}
        <div className="hidden md:flex justify-center gap-4 mt-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                activeIndex === index 
                  ? "ring-4 ring-[#47f969] scale-110" 
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => {
                if (api) {
                  api.scrollTo(index);
                }
              }}
            >
              <Image 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
