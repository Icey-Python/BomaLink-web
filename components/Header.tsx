import React from 'react'
import Image from 'next/image'
import Navlink from './Navlink'
import { ArrowDownToLine } from 'lucide-react'


const Header = () => {

  return (
    <div className="flex justify-between items-center backdrop-blur-2xl w-screen h-16 fixed top-0 left-0 z-40 bg-[#021500] bg-opacity-20 drop-shadow-2xl shadow shadow-[#021500]-500/40">
        <Image src="/Logo.png" alt="logo" width={80} height={80} ></Image>
        <div className=" pr-10 text-white font-bold will-change-scroll my-auto w-fit ">
            <Navlink label="HOME" path="#Home" ></Navlink>
            <Navlink label="OUR STORY" path="#story"></Navlink>
            <Navlink label="SERVICES" path="#service"></Navlink>
            <Navlink label="THE TEAM" path="#team"></Navlink>
            <button className="font-poppins transition duration-500 bg-transparent p-2 border-2 border-[#224103] h-fit rounded-full text-white hover:text-[#021500] hover:bg-[#47f969]"><ArrowDownToLine/></button>
        </div>
    </div> 
  )
}

export default Header
