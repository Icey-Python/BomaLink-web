import Image from "next/image";
import React from "react";
import { LinkIcon, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

declare namespace JSX {
  interface Props {
    path: string;
    position: string;
    linkedIn: string;
    name: string;
  }
}

const ProfileCard = ({ path, position, linkedIn, name }: JSX.Props) => {
  return (
    <Card className="bg-[#021500]/50 border border-[#224103] hover:border-[#47f969] transition-all duration-300 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#47f969]/5 to-[#D6F9C6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#47f969] to-[#D6F9C6] rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative rounded-full overflow-hidden border-2 border-[#224103] group-hover:border-[#47f969] transition-colors duration-300">
              <Image
                src={path}
                alt={`${name} Profile Photo`}
                width={120}
                height={120}
                className="rounded-full aspect-square object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-[#47f969]">{position}</p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <GraduationCap className="h-4 w-4 text-gray-400" />
              <p className="text-xs text-gray-400">Jomo Kenyatta University of Agriculture and Technology</p>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-[#224103] p-4 flex justify-center md:justify-start">
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#47f969] hover:text-[#D6F9C6] transition-colors duration-300 group"
        >
          <span>Connect on LinkedIn</span>
          <LinkIcon size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
