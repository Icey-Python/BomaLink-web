"use client";
import React from 'react'
import Image from 'next/image'
import Navlink from './Navlink'
import { ArrowDownToLine } from 'lucide-react'
import { Menu } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between items-center text-white backdrop-blur-2xl w-screen h-16 fixed top-0 left-0 z-40 bg-[#021500] bg-opacity-20 drop-shadow-2xl shadow shadow-[#021500]-500/40">
      <Image src="/Logo.png" alt="logo" width={80} height={80} ></Image>

      <div className="hidden lg:flex visible bg-transparent pr-10 text-white font-bold my-auto w-fit ">
        <Navlink label="HOME" path="#Home" ></Navlink>
        <Navlink label="OUR STORY" path="#story"></Navlink>
        <Navlink label="SERVICES" path="#service"></Navlink>
        <Navlink label="THE TEAM" path="#team"></Navlink>
        <Dialog>
          <DialogTrigger asChild>
            <button className="font-poppins transition duration-500 bg-transparent p-2 border-2 border-[#224103] h-fit rounded-full text-white hover:text-[#021500] hover:bg-[#47f969]"><ArrowDownToLine /></button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md text-white">
            <DialogHeader>
              <DialogTitle className="font-bold hover:text-[#47f969] text-2xl">Get App</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-2xl hover:text-[#47f969]">GeoPasture App Coming Soon!</DialogDescription>
            <DialogFooter className="sm:justify-center">
              <DialogClose asChild>
                <Button type="button" className="bg-white hover:bg-[#47f969] text-black" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className='lg:hidden pr-4' onClick={openDropDown}><Menu /></div>
      {isOpen && (
        <div className="absolute top-[70px] backdrop-blur-2xl bg-black/50 right-0 bg-transparent  shadow shadow-[#021500]-500/40 w-40 font-bold border-2 border-r-0 border-t-0">
          <ul>
            <li><Navlink label="HOME" path="#Home" ></Navlink></li>
            <li><Navlink label="OUR STORY" path="#story"></Navlink></li>
            <li><Navlink label="SERVICES" path="#service"></Navlink></li>
            <li><Navlink label="THE TEAM" path="#team"></Navlink></li>
            <li><button className="font-poppins transition duration-500 bg-transparent p-1 m-2 border-2 border-[#224103] h-fit rounded-full text-white hover:text-[#021500] hover:bg-[#47f969]">Get App</button></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
