import React from 'react'
import Image from "next/image"

interface Props{
  path : string,
}

const ScrollCard = ({path}:Props) => {
  return (
    <Image src={path} height={353} width={488} alt='Marquee Image'className='mx-2' style={{height:"180px",width:"auto"}}/>
  )
}

export default ScrollCard
