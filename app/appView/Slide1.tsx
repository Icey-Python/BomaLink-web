import React from 'react';
import Image from "next/image";

const Slide1 = () => {
  return (
    <div className={'flex flex-col items-center justify-center h-screen font-poppins'}>
          
       <Image src="/app-view-images/real-time-pasture-updates.svg" alt="real time pasture updates" width={300} height={180}/>
          
    </div>
  );
};

export default Slide1;