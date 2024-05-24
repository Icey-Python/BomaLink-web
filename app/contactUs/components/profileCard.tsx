import Image from "next/image"
declare namespace JSX{
interface Props{
    path: string,
    position:string,
    linkedIn: string,
    name:string,
    skills:Array<string>
}
}
const profileCard = ({path,position,linkedIn,name,skills}:JSX.Props) => {
  return (
    <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 w-7/13">
          <div className="flex space-x">
            <div>
              <Image
                src={path}
                alt="Profile Photo"
                width={300}
                height={300}
                className="rounded-full  ml-0  h-full  object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">{name}</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                 {skills[0]}
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
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
                width={50}
                height={50}
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

export default profileCard