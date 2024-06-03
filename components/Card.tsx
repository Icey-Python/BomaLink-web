import Image from "next/image";
import React, { ReactNode } from "react";
interface Props {
  iconPath: string;
  title: string;
  children?: ReactNode;
}
const Card = ({ iconPath, title, children }: Props) => {
  return (
    <div className="transition-all duration-700 delay-50 cursor-pointer ease-out bg-transparent h-fit  p-5 mx-2 text-black shadow-2xl z-40 rounded-xl hover:bg-[#238636] hover:bg-opacity-70 group max-w-xl hover:flex min-w-[90%] lg:min-w-[576px] min-h-[330px]">
      <div className="group-hover:hidden">
        <Image
          className="mx-auto group-hover:scale-75  group-hover:z-0"
          src={`/icons/${iconPath}`}
          alt="Icon"
          width={120}
          height={106}
          style={{
            width: "auto", // Make the image width responsive
            height: "120px", // Maintain aspect ratio by setting height to auto
          }}
        />
      </div>
      <div className="">
        <div className="w-full h-2 flex justify-between group-hover:hidden">
          {/*horizontal lines*/}
          <div className="w-1/3 h-1 bg-black rounded-xl "></div>
          <div className="w-1/3 h-1 bg-black rounded-xl"></div>
        </div>
        <div className=" space-y-2">
          <p className="font-semibold mt-6 -[-20%] text-2xl lg:txt-4xl text-center group-hover-base lg:group-hover:text-2xl group-hover:text-left transition ease-in delay-50">
            {title}
          </p>
          <p className="text-sm lg:text-xl textfont-medium transition ease-out delay-50 hidden group-hover:block">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
