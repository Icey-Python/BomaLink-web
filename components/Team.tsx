import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

interface Props{
    tagId: string
    footerId: string
}

const Team = ({tagId,footerId}:Props) => {
  return (
    <div
      className="bg-gradient-to-r from-[#D6F9C6] to-[#D6F9C6] font-poppins w-screen overflow-x-hidden "
      id={tagId}
    >
      <h1 className="text-green-900 mb-5 pb-5 text-3xl font-poppins font-bold text-center pt-16 lg:text-7xl ">
        Team
      </h1>
      <div className="flex place-content-center items-center mb-5">
        <Image src="/icons/brain-icon.svg" alt="brain" width={30} height={30} />
        <p className="text-sm lg:text-xl italic  p-2.5 ml-0">
          The brains behind the product
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-fit mx-auto mb-4">
        <ProfileCard
          path={"/profile/Faith.jpeg"}
          position={"Project Manager"}
          linkedIn={
            "https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          skills={["React", "Frontend Developer"]}
          name={"Faith Mosonik"}
        />
        <ProfileCard
          path={"/profile/Sam.jpeg"}
          position={"Backend Lead"}
          linkedIn={
            "https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          skills={["React", "Backend Developer"]}
          name={"Sam Kelly"}
        />
        <ProfileCard
          path={"/profile/Joan.jpeg"}
          position={"Scrum Master"}
          linkedIn={"https://www.linkedin.com/in/joan-kinoti-9b26311b1"}
          skills={["React", "Backend Developer"]}
          name={"Joan Kinoti"}
        />
        <ProfileCard
          path={"/profile/MM-profile.png"}
          position={"UI/UX Designer"}
          linkedIn={"https://www.linkedin.com/in/melanie-minayo-6ab167298/"}
          skills={["UI/UX", "Web Development"]}
          name={"Melanie Minayo"}
        />
        <ProfileCard
          path={"/profile/Moses.jpeg"}
          position={"Database Manager"}
          linkedIn={"https://www.linkedin.com/in/moses-odeny-19bb56292"}
          skills={["React", "Database modelling"]}
          name={"Moses Odeny"}
        />
        <ProfileCard
          path={"/profile/LN-profile.png"}
          position={"UI/UX Designer"}
          linkedIn={
            "https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          skills={["React", "Frontend Developer"]}
          name={"Lynn Nyanduko"}
        />
      </div>

      <Footer tagId={footerId} />
    </div>
  );
};

export default Team;