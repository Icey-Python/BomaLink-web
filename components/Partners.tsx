import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex flex-col bg-[#D6F9C6] py-10">
      <h3 className="text-6xl text-green-900 font-poppins font-bold mx-auto">
        Partners
      </h3>
      <div className="flex justify-around items-center space-x-4 lg-px-20 lg-py-20 ">
        <Image
          src={"/JKUAT.png"}
          alt="Partners"
          height={50}
          width={50}
          style={{ width: "100px", height: "100px" }}
        />
        <Image
          src={"/JHUB Africa.png"}
          alt="Partners"
          height={50}
          width={50}
          style={{ width: "auto", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default Partners;
