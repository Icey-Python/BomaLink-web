import Image from "next/image"
import React from "react"
declare namespace JSX{
interface Props{
    path: string,
    position:string,
    linkedIn: string,
    name:string,
    skills:Array<string>
}
}
const ProfileCard = ({path,position,linkedIn,name,skills}:JSX.Props) => {
  return (
    <div className="bg-white relative  p-3 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center  max-w-fit">
          <div className="flex ">
            <div>
              <Image
                src={path}
                alt="Profile Photo"
                width={150}
                height={150}
                className="rounded-full  ml-0  h-full  object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">{name}</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-full text-sm">
                 {skills[0]}
                </span>
                <span className="bg-green-300 p-2 rounded-full text-sm">
                  {skills[1]}
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>{position}</span>
                <span>
                  <a
                    href={linkedIn}
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={30}
                height={30}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ProfileCard