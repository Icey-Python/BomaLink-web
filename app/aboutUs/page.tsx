import Card from "@/components/Card"
const aboutus = () => {
  return (
    <section className='p-10 font-poppins bg-[#D6F9C6] h-screen w-screen'>
    <div className="bg-[#021500] p-20 absolute left-[-50px] top-[-50px] rounded-full blur-2xl z-0"></div>
    <h2 className='text-4xl font-bold text-green-900 px-2 border-l-8 border-green-900 z-10 mt-2'>Services</h2>
    <p className="text-2xl py-3 font-poppins font-medium">Welcome to <strong className="font-bold text-green-900">Bomalink!</strong><br/>Where we aim at bringing out peaceful coexistence <br/> between pastoralists and agriculturalists, enabling <br/> them to make better decisions for the future. <br/> <strong className='font-bold text-green-900'>”Maamuzi sahihi, ushirikiano wa kudumu”</strong></p>
    <div className="card-section pt-3 flex justify-between">
    <Card iconPath={"real-time-pasture-updates-icon.svg"} title="Real Time Pasture Updates">We provide real time pasture updates for pastoralists </Card> 
    <Card iconPath={"weather-forecast-icon.svg"} title="Weather Forecasts">We provide real time pasture updates for pastoralists </Card>
    <Card iconPath={"track-animal-location-icon.svg"} title="Track Animal Location">We provide real time pasture updates for pastoralists </Card> 
    <Card iconPath={"marketing-platform.svg"} title="Market Platform">We provide real time pasture updates for pastoralists </Card> 
    </div>
    </section>
  )
}

export default aboutus
