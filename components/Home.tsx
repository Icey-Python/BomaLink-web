import Image from "next/image"
import ParticlesComponent from "./ParticlesComponent"
import {ArrowDownToLine,Info} from "lucide-react"
interface Props{
    tagId : string
    
}

const HomeSection = ({tagId}:Props) => {
  return (          
            <div className="w-screen h-screen backdrop-filter backdrop-blur-3xl self-center bg-no-repeat cursor-pointer" style={{ backgroundImage: `url(${"/newlanding2.jpg"})`, backgroundSize: 'cover' }} id={tagId}>
        <ParticlesComponent className={"w-1/2"} id={"particles"}/>     
                <div className="w-full h-full bg-[#021500] glasss bg-opacity-60 space-y-10 pl-6" style={{backdropFilter:"blur(2px)"}}>
                    <div className="flex justify-between p-10 pt-20">
                        <div className="pt-20  space-y-6">
                            <p className="text-[190px] font-mogra text-white drop-shadow-md leading-none">Agrimeet</p>
                            <div className="space-y-8">
                                <p className="text-4xl text-[#D6F9C6] font-monteserrat drop-shadow-md leading-none font-extralight">Maamuzi sahihi, ushirikiano wa kudumu</p>
                                <p className="text-white text-2xl font-poppins">A mobile app aimed at fostering peaceful coexistence <br/> between Kenyan pastoralists and agriculturalists <br/> by creating a digital platform that addresses resource conflict.</p>
                                <div className="flex">
                                <button  className="text-white text-xl font-poppins  bg-[#021500] bg-opacity-60 p-4 ml-0 mx-4 border-2 border-[#224103] rounded-full w-[200px] h-[65px] transition duration-500 hover:text-[#47F969] flex justify-around hover:border-[#47F969]">Get App <ArrowDownToLine className="transition ease-in delay-250 " /></button>
                                <button  className="text-white text-xl font-poppins transition duration-500 bg-transparent p-4 ml-0 mx-4 border-2 border-[#224103] rounded-full w-[200px] h-[65px] flex justify-around hover:text-[#47F969] hover:border-[#47F969]">Learn More <Info className="transition ease-in delay-250 " /> </button>
                                </div>
                            </div>
                        </div>
                        <div className="flext justify-items-center items-center z-20" >
                            <Image src="/Phone.png" alt="phone" width={350} height={100} style={{height:"75%", width:"auto",marginInline:"auto",marginTop:"2%"}} ></Image>
                        </div>
                    </div>
                </div>
            </div>
  
  )
}

export default HomeSection
