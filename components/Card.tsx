import Image from "next/image"
import React, { ReactNode } from 'react';
interface Props{
  iconPath: string,
  title: string,
  onClick: (id: string) => void,
  children?: ReactNode,
  cardId : string
}
const Card = ({onClick,cardId, iconPath,title,children}:Props) => {
  return (
    <div className="transition-all duration-500 ease-in-out   bg-transparent  p-5 mx-2  " onClick={() => onClick(cardId)} id={cardId}>
        <Image className="mx-auto" src={`/icons/${iconPath}`} alt='Icon' width={120} height={106} style={{
          width: 'auto', // Make the image width responsive
          height: '120px', // Maintain aspect ratio by setting height to auto
        }}/>
        <div className="w-full h-2 flex justify-between">
          <div className="w-1/3 h-1 bg-black rounded-xl"></div>
          <div className="w-1/3 h-1 bg-black rounded-xl"></div>
        </div>
        <div className="h-32 space-y-2">
          <p className="font-semibold mt-2  text-xl">{title}</p>
          <p className='font-medium '>
          {children}
          </p>
        </div>
      </div> 

  )
}

export default Card
