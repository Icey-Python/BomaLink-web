import Link from "next/link"
import Image from "next/image"
import Navlink from "@/components/Navlink"



const page = () => {
  return (
    <div className="h-screen flex justify-center bg-gradient-to-r from-[#D6F9C6] to-[#D6F9C6]">
        <div className="absolute left-0 top-0 h-4/6 w-3/6 rounded-r-full blur-3xl rounded-b-full border-2 border-red-500 bg-gradient-to-r from-[#238636]"></div>
        <div className=" w-full h-full glass rounded-2xl self-center flex justify-center">            
            <div className="w-[100rem] h-[800px]  self-center rounded-3xl bg-no-repeat bg-black glass" >
                <div className="w-full h-full bg-[#021500] bg-opacity-55 self-center rounded-3xl space-y-8">
                    <div className="flex justify-between items-center">
                        <Image src="/Logo.png" alt="logo" width={160} height={140} className="p-2" ></Image>
                        <div className="space-x-2 pr-10 text-white font-bold">
                            <Navlink label="HOME" path="#Home" ></Navlink>
                            <Navlink label="OUR STORY" path="#story"></Navlink>
                            <Navlink label="SERVICES" path="#service"></Navlink>
                            <Navlink label="THE TEAM" path="#team"></Navlink>
                            <Navlink label="CONTACT" path="#contact"></Navlink>
                        </div>
                    </div>
                    <div className="flex space-x-20">
                        <div className="p-6 pt-20 pr-24 space-y-10">
                            <p className="p-0 m-0 text-[190px] font-mogra text-white drop-shadow-md leading-10">BomaLink</p>
                            <div className="space-y-8">
                                <p className="text-4xl text-[#D6F9C6] font-monteserrat drop-shadow-md leading-none font-extralight">Maamuzi sahihi, ushirikiano wa kudumu</p>
                                <p className="text-white text-2xl font-poppins">A mobile app aimed at fostering peaceful coexistence <br/> between Kenyan pastoralists and agriculturalists <br/> by creating a digital platform that addresses resource conflict.</p>
                                <button  className="text-white text-xl font-poppins  bg-[#021500] bg-opacity-60 p-4 ml-0 m-4 border-2 border-[#224103] rounded-full w-[200px] h-[65px] hover:text-[#47F969] hover:border-[#47F969]">Get App</button>
                                <button  className="text-white text-xl font-poppins  bg-transparent p-4 ml-0 m-4 border-2 border-[#224103] rounded-full w-[200px] h-[65px] hover:text-[#47F969] hover:border-[#47F969]">Learn More</button>
                            </div>
                        </div>
                        <Image src="/Phone.png" alt="phone" width={350} height={100} className="pr-10"></Image>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute blur-3xl right-0 bottom-0 h-5/6 w-96 rounded-t-full rounded-l-full  bg-gradient-to-l  from-[#238636]">02</div>
    </div>
  )
}

export default page