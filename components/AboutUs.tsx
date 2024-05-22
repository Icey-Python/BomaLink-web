"use client"
import Card from "@/components/Card"
import AppView from "./appView/appview"
import { useState } from "react"
 
interface Props{
  tagId : string
}

const AboutUs = ({tagId}:Props) => {
  const[selectedCardId, selectedCard] = useState<string | null>(null);

  const onClick = (cardID: string) => {
    selectedCard(cardID)
    console.log(cardID);
  }

  return (
    <section className='p-10 font-poppins bg-[#D6F9C6] h-screen w-screen glasss' id={tagId}>
      <div className="bg-[#021500] p-20 absolute left-[-50px] top-[-50px] rounded-full blur-2xl z-0"></div>
      <h2 className='text-3xl font-bold text-green-900 px-2 border-l-8 border-green-900 z-10 mt-2 text-center'>Services</h2>
      <p className="text-xl py-3 font-poppins font-medium text-center" >We aim at bringing out peaceful coexistence <br/> between pastoralists and agriculturalists, enabling <br/> them to make better decisions for the future. <br/> <strong className='font-bold text-green-900'>”Maamuzi sahihi, ushirikiano wa kudumu”</strong></p>
      <div className="card-section pl-80 ml-20 pt-3 flex-col space-y-5 align-self-center pr-0 mr-0">
        <div className="flex space-x-5">
          <div className="transition-all ease-in-out duration-300 bg-white/50 text-black shadow-2xl z-40 hover:bg-[#238636] hover:bg-opacity-70 hover:text-white">
            <Card cardId="pasture" onClick={onClick}  iconPath={"real-time-pasture-updates-icon.svg"} title="Real Time Pasture Updates">We provide real time pasture updates for pastoralists </Card> 
          </div>
          <div className="transition-all ease-in-out duration-300 bg-[#238636] bg-opacity-70 text-white shadow-2xl hover:bg-white/50 hover:text-black">
            <Card cardId="weather" onClick={onClick} iconPath={"weather-forecast-icon.svg"} title="Weather Forecasts">We provide real time pasture updates for pastoralists </Card>
          </div>
        </div>
        <div className="space-x-5 flex">
          <div className="transition-all ease-in-out duration-300 bg-[#238636] bg-opacity-70 text-white shadow-2xl hover:bg-white/50 hover:text-black">
            <Card cardId="gps" onClick={onClick} iconPath={"track-animal-location-icon.svg"} title="Track Animal Location">We provide real time pasture updates for pastoralists </Card> 
          </div>
          <div className="transition-all ease-in-out duration-300 bg-white/50 text-black shadow-2xl z-40 hover:bg-[#238636] hover:bg-opacity-70 hover:text-white">
            <Card cardId="market" onClick={onClick} iconPath={"marketing-platform.svg"} title="Market Platform">We provide real time pasture updates for pastoralists </Card> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs