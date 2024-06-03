import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex flex-col bg-[#D6F9C6] py-10">
      <h3 className="text-6xl text-green-900 font-poppins font-bold mx-auto">
        Partners
      </h3>
      <div className="flex justify-around align center px-20 py-20">
        <Image
          src={"/JKUAT.png"}
          alt="Partners"
          height={50}
          width={50}
          style={{ width: "150px", height: "auto" }}
        />
        <Image
          src={"/JHUB Africa.png"}
          alt="Partners"
          height={50}
          width={50}
          style={{ width: "150px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Partners;
