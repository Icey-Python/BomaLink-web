import React from 'react'
import Image from 'next/image'
import Navlink from './Navlink'



const Header = () => {
  return (
    <div className="flex justify-between items-center backdrop-blur-2xl w-screen h-20 fixed top-0 left-0 z-40 bg-[#021500] bg-opacity-10">
        <Image src="/Logo.png" alt="logo" width={100} height={100} className="p-2" ></Image>
        <div className="space-x-2 pr-10 text-white font-bold will-change-scroll">
            <Navlink label="HOME" path="#Home" ></Navlink>
            <Navlink label="OUR STORY" path="#story"></Navlink>
            <Navlink label="SERVICES" path="#service"></Navlink>
            <Navlink label="THE TEAM" path="#team"></Navlink>
            <Navlink label="CONTACT" path="#contact"></Navlink>
        </div>
    </div> 
  )
}

export default Header