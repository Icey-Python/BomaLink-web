import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import Partners from "./Partners";
import { Fade, Slide } from "react-awesome-reveal";
import { Users } from "lucide-react";

interface Props {
  tagId: string;
  footerId: string;
}

const Team = ({ tagId, footerId }: Props) => {
  const teamMembers = [
    {
      path: "/profile/Lawrence Nderu.jpeg",
      position: "Project PI",
      linkedIn: "https://www.linkedin.com/in/dr-lawrence-nderu/",
      name: "Dr. Lawrence Nderu PHD",
      isLead: true
    },
    {
      path: "/profile/Faith.jpeg",
      position: "Android Developer",
      linkedIn: "https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "Faith Mosonik",
      isLead: false
    },
    {
      path: "/profile/Joan.jpeg",
      position: "Frontend Developer",
      linkedIn: "https://www.linkedin.com/in/joan-kinoti-9b26311b1",
      name: "Joan Kinoti",
      isLead: false
    },
    {
      path: "/profile/Sam.jpeg",
      position: "Backend Developer",
      linkedIn: "https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "Sam Kelly",
      isLead: false
    },
    {
      path: "/profile/Moses.jpeg",
      position: "Android Developer",
      linkedIn: "https://www.linkedin.com/in/moses-odeny-19bb56292",
      name: "Moses Odeny",
      isLead: false
    },
    {
      path: "/profile/MM-profile.jpeg",
      position: "UI/UX Designer",
      linkedIn: "https://www.linkedin.com/in/melanie-minayo-6ab167298/",
      name: "Melanie Minayo",
      isLead: false
    },
    {
      path: "/profile/LN-profile.png",
      position: "UI/UX Designer",
      linkedIn: "https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      name: "Lynn Nyanduko",
      isLead: false
    }
  ];

  return (
    <div
      className="w-screen bg-gradient-to-b from-[#021500] to-[#224103] text-white py-16 overflow-x-hidden"
      id={tagId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Fade triggerOnce={true}>
          <div className="text-center mb-16">
            <h2 className="text-[#47f969] text-lg font-medium mb-3">OUR TEAM</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Experts</h3>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-5 w-5 text-[#47f969]" />
              <p className="text-gray-300 italic">The brains behind the product</p>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our talented team of developers, designers, and experts are dedicated to creating 
              innovative solutions for pastoralists and farmers.
            </p>
          </div>
        </Fade>

        {/* Team Lead */}
        <div className="mb-16">
          <Fade triggerOnce={true}>
            <div className="max-w-2xl mx-auto">
              {teamMembers
                .filter(member => member.isLead)
                .map((member, index) => (
                  <ProfileCard
                    key={index}
                    path={member.path}
                    position={member.position}
                    linkedIn={member.linkedIn}
                    name={member.name}
                  />
                ))}
            </div>
          </Fade>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers
            .filter(member => !member.isLead)
            .map((member, index) => (
              <Slide 
                key={index} 
                direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} 
                triggerOnce={true}
                delay={index * 100}
              >
                <ProfileCard
                  path={member.path}
                  position={member.position}
                  linkedIn={member.linkedIn}
                  name={member.name}
                />
              </Slide>
            ))}
        </div>

        {/* Partners Section */}
        <div className="mt-24">
          <Partners />
        </div>
      </div>
      
      <Footer tagId={footerId} />
    </div>
  );
};

export default Team;
