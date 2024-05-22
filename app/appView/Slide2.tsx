import React from 'react';
import Image from "next/image";

const Slide2 = () => {
  return (
    <div className={'flex flex-col items-center justify-center h-screen font-poppins'}>
          
       <Image src="/app-view-images/weather-forecast.svg" alt="weather forecasting" width={300} height={180}/>
          
    </div>
  );
};

export default Slide2;