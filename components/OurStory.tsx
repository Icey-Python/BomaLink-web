import Marquee from "react-fast-marquee";
import ScrollCard from "@/components/ScrollCard";
import { Film, Tractor } from 'lucide-react';

import Image from "next/image"
interface Props{
tagId : string
}
const OurStory = ({tagId}:Props) => {
  const name = "AGRIMEET"
  return (
    <section className="w-screen h-screen bg-[#021500] text-white font-poppins flex-col relative" id={tagId}>
    <span className="absolute text-8xl font-bold text-white/5 z-0">{name}</span>
    <Marquee  pauseOnHover={true} style={{position:"absolute",top:"50%",overflowY:"hidden",transform:"translateY(-50%)",width:"100%",height:"fit-content",zIndex:"10"}} speed={15} autoFill={true}>
    <ScrollCard path={"/farmer-with-goat.png"}/>
    <ScrollCard path={"/farmer-with-goats.png"}/>
    <ScrollCard path={"/cows.png"}/>
    <ScrollCard path={"/farm.png"}/>
   </Marquee>
    <div className="font-bold text-6xl h-1/2 px-20 py-8 z-10 relative">
    <p className="text-center mx-auto w-fit text-7xl">Coexistence between  <br/> farmers and pastoralists</p>
    <Tractor className="text-white/50 absolute top-1/3 right-20" size={80}/>
    <span className="absolute top-1/3 left-1/4 text-9xl font-bold text-white/5 z-0">{name}</span>
    <span className="absolute top-3/4 right-1 text-8xl font-bold text-white/5 z-0">{name}</span>
   </div> 
  
    <div className="h-1/2 w-full bg-[#D6F9C6] text-[#021500] py-20 px-20 relative">
    <div className="mt-10"></div>
    <Film className="text-[#224103] absolute right-10 top-[35%]" size={50}/>
    <Film className="text-[#224103]/10 absolute top-1/2 left-1/2 z-0" size={100}/>
    <Film className="text-[#224103]/5  absolute bottom-10 left-20 z-0" size={65}/>
    <span className="bg-[#224103] text-white font-bold p-2 rounded-3xl mt-10">Our story</span>
    <p className="mt-5 text-xl z-20">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum quisquam ipsum maiores voluptatem veritatis obcaecati cumque deleniti quam aliquid doloremque cupiditate amet fugiat sit beatae, ipsa distinctio commodi dolore illum minus. Tempore maxime ad quaerat, illum ipsam, iusto quia placeat voluptatem eveniet vero amet dignissimos, error velit veniam? Unde.
    </p>

    </div>
    </section>
  )
}

export default OurStory
