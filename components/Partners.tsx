import React from "react";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  return (
    <div className="flex flex-col bg-[#D6F9C6] py-10">
      <h3 className="text-6xl text-green-900 font-poppins font-bold mx-auto">
        Partners
      </h3>
      <div className="flex flex-col lg:flex-row  lg:justify-around items-center space-x-4 lg-px-20 lg-py-20  mt-5">
        <Link href={"https://www.jkuat.ac.ke"}>
          <Image
            src={"/JKUAT.png"}
            alt="Partners"
            height={0}
            width={150}
            // style={{ width: "100px", height: "100px" }}
          />
        </Link>

        <Link href={"https://jhubafrica.com/"}>
          <Image
            src={"/JHUB Africa.png"}
            alt="Partners"
            height={0}
            width={200}
            // style={{ width: "auto", height: "150px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Partners;
