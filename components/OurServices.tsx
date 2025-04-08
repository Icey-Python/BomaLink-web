"use client";
import React, { useEffect, useState } from "react";
import { JackInTheBox, Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  tagId: string;
}

const OurServices = ({ tagId }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: "real-time-pasture-updates-icon.svg",
      title: "Real Time Pasture Updates",
      description: "The app provides real-time updates on pasture availability by integrating data from satellite imagery and users can view interactive maps showing current pasture conditions, enabling informed decisions regarding livestock grazing locations."
    },
    {
      icon: "weather-forecast-icon.svg",
      title: "Weather Forecasts",
      description: "Weather forecasting provides users with accurate and up-to-date weather information for their specific geographical locations, including temperature, humidity, precipitation chances, and wind speed."
    },
    {
      icon: "track-animal-location-icon.svg",
      title: "Track Animal Location",
      description: "GPS tracking enables users to monitor and track the movement of their animals in real-time using GPS-enabled devices, improving grazing efficiency, preventing livestock loss or theft, and optimizing resource utilization."
    },
    {
      icon: "geoFencing.png",
      title: "Geofencing",
      description: "Our app empowers both farmers and pastoralists with virtual fences to receive alerts if cattle enter their land, ensuring crop protection and promoting responsible land use."
    }
  ];

  return (
    <section
      className="w-screen min-h-[100vh] bg-gradient-to-b from-[#021500] to-[#224103] text-white py-16"
      id={tagId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Fade triggerOnce={true}>
          <div className="text-center mb-16">
            <h2 className="text-[#47f969] text-lg font-medium mb-3">OUR SERVICES</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Offer</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Are you a pastoralist or a farmer? Then you are in the right place.
              We aim to bring you a digital platform that promotes the peaceful
              coexistence between pastoralists and farmers by nullifying resource conflict.
            </p>
          </div>
        </Fade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Slide 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"} 
              triggerOnce={true}
              delay={index * 100}
            >
              <Card className="bg-[#021500]/50 border border-[#224103] hover:border-[#47f969] transition-all duration-300 overflow-hidden group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#47f969]/5 to-[#D6F9C6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-[#224103]/50 p-3 rounded-lg group-hover:bg-[#47f969]/20 transition-colors duration-300">
                    <Image
                      src={`/icons/${service.icon}`}
                      alt={service.title}
                      width={50}
                      height={50}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {mounted && (
                    <JackInTheBox cascade damping={0.1}>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </JackInTheBox>
                  )}
                </CardContent>
                
                <CardFooter>
                  <Button variant="link" className="text-[#47f969] p-0 hover:text-[#D6F9C6]">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Slide>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Fade triggerOnce={true}>
            <div className="bg-[#021500]/70 border border-[#224103] rounded-xl p-8 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">Ready to experience our services?</h4>
              <p className="text-gray-300 mb-6">
                Join GeoPasture today and be part of the solution for peaceful coexistence between farmers and pastoralists.
              </p>
              <Button className="bg-[#47f969] text-[#021500] hover:bg-[#3ad959] font-semibold px-8 py-6 text-lg">
                Get Started
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
