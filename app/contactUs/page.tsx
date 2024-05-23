import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import profileCard from "./components/profileCard";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#D6F9C6] to-[#D6F9C6] font-poppins w-screen overflow-x-hidden">
      <h1 className="border-l-8 border-green-900 text-green-900 text-left  my-5mx-10 px-5 w-fit text-5xl font-poppins font-bold">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-around w-full p-5">
        <div className="flex">
        <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 h-[200px] w-fit
        ">
          <div className="flex space-x">
            <div>
              <Image
                src="/profile/FM-profile.png"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full  ml-0  h-full  object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">Faith Mosonik</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  React
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  Web Development
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>Project Lead</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={50}
                height={50}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 h-[200px] w-fit
        ">
          <div className="flex space-x">
            <div>
              <Image
                src="/profile/SK-profile.png"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full  ml-0  h-full  object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">Sam Kelly</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  React
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  Web Development
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>Backend Lead</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={50}
                height={50}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="flex">
        <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 h-[200px] w-fit
        ">
          <div className="flex space-x">
            <div>
              <Image
                src="/profile/JK-profile.png"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full  ml-0  h-full object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">Joan Kinoti</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  React
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  Web Development
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>Scrum Master</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/joan-kinoti-9b26311b1"
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={50}
                height={50}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 h-[200px] w-fit
        ">
          <div className="flex space-x">
            <div>
              <Image
                src="/profile/MM-profile.png"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full  ml-0  h-full object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">Melanie Minayo</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  UI/UX
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  Web Development
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>Designer</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/melanie-minayo-6ab167298/"
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={50}
                height={50}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="flex">
        <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 h-[200px] w-fit
        ">
          <div className="flex space-x">
            <div>
              <Image
                src="/profile/MO-profile.png"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full  ml-0  h-full object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">Moses Odeny</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  React
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  Database Modelling
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>Project Lead</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/moses-odeny-19bb56292"
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={50}
                height={50}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white relative m-5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-0.5 h-[200px] w-fit
        ">
          <div className="flex space-x">
            <div>
              <Image
                src="/profile/LN-profile.png"
                alt="Profile Photo"
                width={200}
                height={200}
                className="rounded-full  ml-0  h-full object-cover mr-1"
              />
            </div>
            <div className="ml-5">
              <h2 className="text-xl font-bold mb-1">Lynn Nyanduko</h2>
              <div className="flex space-x-2 mb-2">
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  UI/UX
                </span>
                <span className="bg-green-300 p-2 rounded-md text-sm">
                  Web Development
                </span>
              </div>
              <div className="flex flex-row mb-2">
                <span>Designer</span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-blue-500 ml-1 font-bold"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="flex">
                <Image
                src="/icons/school-icon.svg"
                alt="school"
                width={50}
                height={50}
                />
              <p className="text-sm  p-2.5 ml-0">
                Jomo Kenyatta University of Agriculture and Technology
              </p>
              </div>
            </div>
          </div>
        </div>

        </div>

      </div>
      <div className="flex place-content-center">
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