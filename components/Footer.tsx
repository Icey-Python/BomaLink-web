import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

interface Props {
  tagId: string;
}

function Footer({ tagId }: Props) {
  return (
    <footer
      className="bg-green-950 text-green-200 w-screen h-fit py-5 lg:py-5"
      id={tagId}
    >
      <div className="flex flex-col mx-auto md:mx-0 lg:mx-0 md:flex-row justify-evenly items-start md:items-center w-full h-fit">
        <div className="flex items-center md:mb-0">
          <Link href="#Home">
          <div className="absolute left-[2%] bottom-[1%] w-32 h-32 mr-3 bg-white rounded-full border-[#D6F9C6] border-8 invisible md:invisible lg:visible">
            <Image
              src="/Footerlogo.png"
              alt="Logo"
              //   layout="fill"
              width={300}
              height={300}
              className="invisible md:invisible lg:visible rounded-full self-center pt-2 pl-2 object-contain"
            />
          </div>
          </Link>
          <div className="ml-20 mb-4 md:mb-0 lg:mb-0">
            <h3 className="text-xl font-bold text-white">GeoPasture</h3>
            <p className="text-sm">Maamuzi sahihi, ushirikiano wa kudumu</p>
          </div>
        </div>
        <div className="ml-20 md:ml-0 lg:ml-0 mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Social Media</h3>
          <div className="flex space-x-4">
            <Link href={"https://www.linkedin.com/company/jhubafrica/"}>
              <Linkedin />
            </Link>
            <Link href={"https://x.com/JHUBAfrica"}>
              <X />
            </Link>
            <Link href={"https://www.facebook.com/JHUBAfrica/"}>
              <Facebook />
            </Link>
            <Link href={"https://www.instagram.com/jhubafrica/"}>
              <Instagram />
            </Link>
          </div>
        </div>
        <div className="ml-20 md:ml-0 lg:ml-0 mb-4 md:mb-0 ">
          <h3 className="text-lg font-bold text-white">Get in touch</h3>
          <p className="text-sm">info.jhub@jkuat.ac.ke</p>
          {/*hotline*/}
          <p className="text-sm">067-5352711</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
