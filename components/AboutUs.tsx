"use client"
import Card from "@/components/Card"
import AppView from "./appView/appview"
import { useState } from "react"
import { Download } from "lucide-react"
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
    <section className='pt-5 font-poppins bg-[#D6F9C6] h-screen w-screen glasss ' id={tagId}>
      <h2 className='text-6xl font-bold text-green-900 px-2 border-green-900 z-10 mt-2 text-center leading-10'>Services</h2>
      <p className="text-xl py-6 font-poppins font-medium text-center" >Are you a pastoralist or a farmer? Then you are in the right place. <br/> We aim to bring you a digital platform that promotes the peaceful coexistence between <br/>pastoralists and farmers by nullify resource conflict through the following features:</p>
      <div className="mx-auto pt-3 grid grid-cols-2 gap-6 mx-auto w-fit" >
            <Card cardId="pasture" onClick={onClick}  iconPath={"real-time-pasture-updates-icon.svg"} title="Real Time Pasture Updates">The app provides real-time updates on pasture availability by integrating data from satellite imagery and users can view interactive maps showing current pasture conditions. These Real-time updates enable users to make informed decisions regarding livestock grazing locations, rotational grazing practices, and sustainable land management, promoting optimal resource use and environmental conservation.</Card> 
          
            <Card cardId="weather" onClick={onClick} iconPath={"weather-forecast-icon.svg"} title="Weather Forecasts">
            Weather forecasting functionality in our app will provide users with accurate and up-to-date weather information for their specific geographical locations.
            Users can access hourly, daily, and weekly weather forecasts, including temperature, humidity, precipitation chances, wind speed, and UV index, among other relevant data points. </Card>
        
            <Card cardId="gps" onClick={onClick} iconPath={"track-animal-location-icon.svg"} title="Track Animal Location">
              GPS tracking functionality enables users to monitor and track the movement of their animals in real-time using GPS-enabled devices such as smartphones or dedicated GPS trackers attached to animals so as to  improve grazing efficiency, preventing livestock loss or theft, and optimizing resource utilization based on animal movements and behavior. </Card> 
        
            <Card cardId="market" onClick={onClick} iconPath={"marketing-platform.svg"} title="Market Platform">Our app includes a user-friendly marketplace where farmers can list sell their farm produce, while pastoralists can sell livestock such as cattle, sheep, goats, and more. </Card>     
      </div>
     
    </section>
  )
}

export default AboutUs