import React from 'react'
import Image from "next/image"

interface Props{
  path : string,
}

const ScrollCard = ({path}:Props) => {
  return (
    <Image className="mx-5 rounded-2xl hover:scale-110 hover:mx-5 transition ease-in-out duration-700" src={path} height={353} width={488} alt='Marquee Image' style={{height:"180px",width:"auto"}}/>
  )
}

export default ScrollCard

