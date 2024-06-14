import React from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import Partners from "./Partners";
import { Fade } from "react-awesome-reveal";
interface Props {
  tagId: string;
  footerId: string;
}

const Team = ({ tagId, footerId }: Props) => {
  return (
    <div
      className="bg-gradient-to-r from-[#D6F9C6] to-[#D6F9C6] font-poppins w-screen overflow-x-hidden "
      id={tagId}
    >
      <h1 className="text-green-900 mb-5 pb-5 text-3xl font-poppins font-bold text-center pt-16 lg:text-7xl ">
        Team
      </h1>
      <div className="flex place-content-center items-center mb-5 pb-5">
        <Image src="/icons/brain-icon.svg" alt="brain" width={30} height={30} />
        <p className="text-sm lg:text-2xl italic   p-2.5  ml-0">
          The brains behind the product
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-row-2 gap-6 w-fit mx-auto mb-4">
        <div className="mx-auto">
          <Fade>
            <ProfileCard
              path={"/profile/Lawrence Nderu.jpeg"}
              position={"Project PI"}
              linkedIn={"https://www.linkedin.com/in/dr-lawrence-nderu/"}
              name={"Dr. Lawrence Nderu PHD"}
            />
          </Fade>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-fit mx-auto mb-4">
          <Fade>
            <ProfileCard
              path={"/profile/Faith.jpeg"}
              position={"Android Developer"}
              linkedIn={
                "https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              name={"Faith Mosonik"}
            />
          </Fade>
          <Fade>
            <ProfileCard
              path={"/profile/Joan.jpeg"}
              position={"Frontend Developer"}
              linkedIn={"https://www.linkedin.com/in/joan-kinoti-9b26311b1"}
              name={"Joan Kinoti"}
            />
          </Fade>
          <Fade>
            <ProfileCard
              path={"/profile/Sam.jpeg"}
              position={"Backend Developer"}
              linkedIn={
                "https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              name={"Sam Kelly"}
            />
          </Fade>
          <Fade>
            <ProfileCard
              path={"/profile/Moses.jpeg"}
              position={"Android Developer"}
              linkedIn={"https://www.linkedin.com/in/moses-odeny-19bb56292"}
              name={"Moses Odeny"}
            />
          </Fade>
          <Fade>
            <ProfileCard
              path={"/profile/MM-profile.jpeg"}
              position={"UI/UX Designer"}
              linkedIn={"https://www.linkedin.com/in/melanie-minayo-6ab167298/"}
              name={"Melanie Minayo"}
            />
          </Fade>
          <Fade>
            <ProfileCard
              path={"/profile/LN-profile.png"}
              position={"UI/UX Designer"}
              linkedIn={
                "https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              name={"Lynn Nyanduko"}
            />
          </Fade>
        </div>
      </div>
      <Partners />
      <Footer tagId={footerId} />
    </div>
  );
};

export default Team;
