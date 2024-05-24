import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
import profileCard from "../../components/ProfileCard";
import ProfileCard from "../../components/ProfileCard";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#D6F9C6] to-[#D6F9C6] font-poppins w-screen overflow-x-hidden">
      <h1 className="border-l-8 border-green-900 text-green-900 text-left  my-5 mx-20 px-5 w-fit text-5xl font-poppins font-bold">
        Our Team
      </h1>
        <div className="grid grid-cols-2 gap-6 w-fit mx-auto mb-4">
          <ProfileCard path={"/profile/FM-profile.png"} position={"Project Lead"} linkedIn={"https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} skills={["React", "FrontendDev"]} name={"Faith Mosonik"}/>
          <ProfileCard path={"/profile/SK-profile.png"} position={"Backend Lead"} linkedIn={"https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} skills={["React", "Backend Dev"]} name={"Sam Kelly"}/>
          <ProfileCard path={"/profile/JK-profile.png"} position={"Scrum Master"} linkedIn={"https://www.linkedin.com/in/joan-kinoti-9b26311b1"} skills={["React", "Backend Dev"]} name={"Joan Kinoti"}/>
          <ProfileCard path={"/profile/MM-profile.png"} position={"Designer"} linkedIn={"https://www.linkedin.com/in/melanie-minayo-6ab167298/"} skills={["UI/UX", "Web Development"]} name={"Melanie Minayo"}/>
          <ProfileCard path={"/profile/MO-profile.png"} position={"Database Management"} linkedIn={"https://www.linkedin.com/in/moses-odeny-19bb56292"} skills={["React", "Database modelling"]} name={"Moses Odeny"}/>
          <ProfileCard path={"/profile/LN-profile.png"} position={"Designer"} linkedIn={"https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} skills={["React", "Backend Dev"]} name={"Lynn Nyanduko"}/>
        </div> 
   

      <div className="flex place-content-center mb-5">
                <Image
                src="/icons/brain-icon.svg"
                alt="brain"
                width={50}
                height={50}
                />
              <p className="text-xl italic  p-2.5 ml-0">
                The brains behind the product
              </p>
      </div>

      <Footer />
    </div>
  );
};

export default page;