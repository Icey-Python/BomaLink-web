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
} from "@/components/ui/carousel"
interface Props{
tagId: string,
}
const images: string[] = [
    "/group-1.jpeg",
    "/group-2.jpeg",
    "/group-3.jpeg",
    "/group-4.jpeg",
    "/group-6.jpeg"

]
export function Gallery({tagId}:Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full h-fit px-5 md:px-20 lg:px-20 bg-[#D6F9C6] py-5" id={tagId}>
    <h2 className="text-3xl lg:text-6xl font-bold text-green-900 px-2 border-green-900 z-10 mt-2 text-center leading-10 pb-2">
        Gallery
      </h2>
    <Carousel
      plugins={[plugin.current]}
      className="w-full md:w-3/4 lg:w-3/4 h-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: images.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="py-10">
              <Card className="border-none">
                <CardContent className="flex items-center justify-center border-none">
                 <Image alt="image" src={images[index]} width={400} height={300} className="rounded-3xl w-full object-cover h-auto"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer"/>
    </Carousel>
    </div>
  )
}

