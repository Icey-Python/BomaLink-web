import Image from "next/image"
import Navlink from "@/components/Navlink"
import Header from "@/components/Header"



const HomeSection = () => {
  return (          
            <div className="w-screen h-screen backdrop-filter backdrop-blur-3xl self-center bg-no-repeat  z-40 "style={{ backgroundImage: `url(${"/newlanding2.jpg"})`, backgroundSize: 'cover' }} >
                <div className="w-full h-full bg-[#021500] glasss bg-opacity-60 space-y-10 pl-6">
                    <div className="flex justify-around p-10">
                        <div className="pt-20  space-y-6">
                            <p className="text-[190px] font-mogra text-white drop-shadow-md leading-none">Agrimeet</p>
                            <div className="space-y-8">
                                <p className="text-4xl text-[#D6F9C6] font-monteserrat drop-shadow-md leading-none font-extralight">Maamuzi sahihi, ushirikiano wa kudumu</p>
                                <p className="text-white text-2xl font-poppins">A mobile app aimed at fostering peaceful coexistence <br/> between Kenyan pastoralists and agriculturalists <br/> by creating a digital platform that addresses resource conflict.</p>
                                <button  className="text-white text-xl font-poppins  bg-[#021500] bg-opacity-60 p-4 ml-0 m-4 border-2 border-[#224103] rounded-full w-[200px] h-[65px] hover:text-[#47F969] hover:border-[#47F969]">Get App</button>
                                <button  className="text-white text-xl font-poppins  bg-transparent p-4 ml-0 m-4 border-2 border-[#224103] rounded-full w-[200px] h-[65px] hover:text-[#47F969] hover:border-[#47F969]">Learn More</button>
                            </div>
                        </div>
                        <div className="mt-20" >
                            <Image src="/Phone.png" alt="phone" width={350} height={100} ></Image>
                        </div>
                    </div>
                </div>
            </div>
  
  )
}

export default HomeSection