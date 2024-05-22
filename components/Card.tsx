import Image from "next/image"
import React, { ReactNode } from 'react';
interface Props{
  iconPath: string,
  title: string,
  children?: ReactNode,
}
const Card = ({iconPath,title,children}:Props) => {
  return (
    <div className="transition-all duration-500 ease-in-out  bg-white rounded-xl p-5 mx-2 text-green-700 hover:bg-green-700 hover:text-white  ">
        <Image className="mx-auto" src={`/icons/${iconPath}`} alt='Icon' width={120} height={106} style={{
          width: 'auto', // Make the image width responsive
          height: '120px', // Maintain aspect ratio by setting height to auto
        }}/>
        <div className="w-full h-2 flex justify-between">
          <div className="w-1/3 h-1 bg-black rounded-xl"></div>
          <div className="w-1/3 h-1 bg-black rounded-xl"></div>
        </div>
        <p className="font-semibold mt-2  text-xl">{title}</p>
        <p className='font-medium text-black'>
        {children}
        </p>
      </div> 

  )
}

export default Card
