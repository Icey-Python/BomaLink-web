import Image from "next/image";
import React from "react";
import { LinkIcon } from "lucide-react";
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
    <div className="bg-white relative m-2 p-3 rounded-3xl shadow-lg overflow-hidden flex flex-col   max-w-fit hover:bg-[#238636]/70">
      <div className="flex ">
        <div>
          <Image
            src={path}
            alt="Profile Photo"
            width={200}
            height={200}
            className="rounded-full  ml-0  h-fit  object-cover mr-1 aspect-[1/1]"
          />
        </div>
        <div className="ml-5 flex flex-col justify-center">
          <h2 className="text-base lg:text-xl font-bold mb-1">{name}</h2> 
          <div className="flex flex-col space-y-2 tems-start mb-2 ">
            <span className="text-xs lg:text-base">{position}</span>
            <span className="flex space-x-1 group underline-offset-4 decoration-2 hover:underline">
              <a
                href={linkedIn}
                className="text-blue-500 text-xs font-bold lg:text-base cursor-pointer"
              >
                LinkedIn
              </a>
              <LinkIcon size={15} className="text-xs invisible group-hover:visible"/>
            </span>
          </div>
          <div className="flex space-x-2">
            <Image
              src="/icons/school-icon.svg"
              alt="school"
              width={20}
              height={20}
            />
            <p className="text-xs lg:text-xs  ml-0">
              Jomo Kenyatta University of Agriculture and Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
