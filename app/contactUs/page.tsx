import React from 'react';
import Footer from "../components/Footer";
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-green-300 min-h-screen m-0 p-0">
      <h1 className='bg-green-300 text-green-900 text-left p-4 text-3xl font-poppins font-bold'>Our Team</h1>
      <div className="flex flex-wrap justify-around p-5">
        <div className="bg-white relative m-2.5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-1.25 w-2/5">
          <Image
            src="/profile/FM-profile.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full mt-2.5 float-left h-full w-auto object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Faith Mosonik</h2>
          <div className="flex space-x-2 mb-2">
            <span className="bg-green-300 p-2 rounded-md text-sm">React</span>
            <span className="bg-green-300 p-2 rounded-md text-sm">Web Development</span>
          </div>
          <div className="flex flex-col mb-2">
            <span>Project Lead</span>
            <span>
              <a href="https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-500">
                 LinkedIn
              </a>
            </span>
          </div>
          <p className="text-sm text-right p-2.5 m-1.25">Jommo Kenyatta University of Agriculture and Technology</p>
        </div>
        
        <div className="bg-white m-2.5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-1.25 w-2/5">
          <Image
            src="/profile/SK-profile.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full mt-2.5 float-left h-full w-auto object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Sam Kelly</h2>
          <div className="flex space-x-2 mb-2">
            <span className="bg-green-300 p-2 rounded-md text-sm">React</span>
            <span className="bg-green-300 p-2 rounded-md text-sm">Web Development</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <span>Backend Lead</span>
            <span>
              <a href="https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-500">
                LinkedIn
              </a>
            </span>
          </div>
          <p className="text-sm text-center">Jommo Kenyatta University of Agriculture and Technology</p>
        </div>
        <div className="bg-white m-2.5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-1.25 w-2/5">
          <Image
            src="/profile/JK-profile.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full mt-2.5 float-left h-full w-auto object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Joan Kinoti</h2>
          <div className="flex space-x-2 mb-2">
            <span className="bg-green-300 p-2 rounded-md text-sm">React</span>
            <span className="bg-green-300 p-2 rounded-md text-sm">Web Development</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <span>Scrum Master</span>
            <span>
              <a href="https://www.linkedin.com/in/joan-kinoti-9b26311b1" className="text-blue-500">
                LinkedIn
              </a>
            </span>
          </div>
          <p className="text-sm text-center">Jommo Kenyatta University of Agriculture and Technology</p>
        </div>
        <div className="bg-white m-2.5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-1.25 w-2/5">
          <Image
            src="/profile/MM-profile.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full mt-2.5 float-left h-full w-auto object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Melanie Minayo</h2>
          <div className="flex space-x-2 mb-2">
            <span className="bg-green-300 p-2 rounded-md text-sm">UI/UX</span>
            <span className="bg-green-300 p-2 rounded-md text-sm">Web Development</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <span>Designer</span>
            <span>
              <a href="https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-500">
                LinkedIn
              </a>
            </span>
          </div>
          <p className="text-sm text-center">Jommo Kenyatta University of Agriculture and Technology</p>
        </div>
        <div className="bg-white m-2.5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-1.25 w-2/5">
          <Image
            src="/profile/MO-profile.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full mt-2.5 float-left h-full w-auto object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Moses Odeny</h2>
          <div className="flex space-x-2 mb-2">
            <span className="bg-green-300 p-2 rounded-md text-sm">React</span>
            <span className="bg-green-300 p-2 rounded-md text-sm">Database Modelling</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <span>Project Lead</span>
            <span>
              <a href="https://www.linkedin.com/in/moses-odeny-19bb56292" className="text-blue-500">
                LinkedIn
              </a>
            </span>
          </div>
          <p className="text-sm text-center">Jommo Kenyatta University of Agriculture and Technology</p>
        </div>
        <div className="bg-white m-2.5 p-5 rounded-3xl shadow-lg overflow-hidden flex flex-col items-center gap-1.25 w-2/5">
          <Image
            src="/profile/LN-profile.png"
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full mt-2.5 float-left h-full w-auto object-cover"
          />
          <h2 className="text-xl font-bold mb-1">Lynn Nyanduko</h2>
          <div className="flex space-x-2 mb-2">
            <span className="bg-green-300 p-2 rounded-md text-sm">UI/UX</span>
            <span className="bg-green-300 p-2 rounded-md text-sm">Web Development</span>
          </div>
          <div className="flex flex-col items-center mb-2">
            <span>Designer</span>
            <span>
              <a href="https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-500">
                LinkedIn
              </a>
            </span>
          </div>
          <p className="text-sm text-center">Jommo Kenyatta University of Agriculture and Technology</p>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default page;

// import React from 'react';
// import Footer from "../components/Footer";
// import Image from 'next/image';


// //  export default function ContactUs() {
// const page = () => {
//   return (
//     <div>   
//       <h1 className='header'>Our Team</h1>
//       <div className="container">
//         <div className="profile-box">
//           <Image
//             src="/profile/FM-profile.png"
//             alt="Profile Photo"
//             width={300}
//             height={300}
//             className="profile-box img"
//           />
//           <h2>Faith Mosonik</h2>
//           <div>
//             <span className="tech-skill">React</span>
//             <span className="tech-skill">Web Development</span>
//           </div>
//           <div>
//             <span>project lead</span>
//             <span>
//               <a href="https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                 LinkedIn
//               </a>
//             </span>
//           </div>
//           <p>Jommo Kenyatta University of Agriculture and Technology</p>
//         </div>

//         <div className="profile-box">
//           <Image
//             src="/profile/SK-profile.png"
//             alt="Profile Photo"
//             width={300}
//             height={300}
//             className="profile-box img"
//           />
//           <h2>Sam Kelly</h2>
//           <div>
//             <span className="tech-skill">React</span>
//             <span className="tech-skill"> Web Development</span>
//           </div>
//           <div>
//             <span>Backend lead</span>
//             <span>
//               <a href="https://www.linkedin.com/in/sammy-kelly-777079292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                 LinkedIn
//               </a>
//             </span>{" "}
//             ``
//           </div>
//           <p> Jommo Kenyatta University of Agriculture and Technology</p>
//         </div>

//         <div className="profile-box">
//           <Image
//             src="/profile/JK-profile.png"
//             width={300}
//             height={300}
//             alt="Profile Photo"
//             className="profile-box img"
//           />
//           <h2>Joan Kinoti</h2>
//           <div>
//             <span className="tech-skill">React</span>
//             <span className="tech-skill">Web Development</span>
//           </div>
//           <div>
//             <span>Scram Master </span>
//             <span>
//               <a href="https://www.linkedin.com/in/joan-kinoti-9b26311b1">
//                 LinkedIn
//               </a>
//             </span>
//           </div>
//           <p>Jommo Kenyatta University of Agriculture and Technology</p>
//         </div>

//         <div className="profile-box">
//           <Image
//             src="/profile/MM-profile.png"
//             width={300}
//             height={300}
//             alt="Profile Photo"
//             className="profile-box img"
//           />
//           <h2>Melanie Minayo</h2>
//           <div>
//             <span className="tech-skill">UI/UX</span>
//             <span className="tech-skill"> Development</span>
//           </div>
//           <div>
//             <span>Designer</span>
//             <span>
//               <a href="https://www.linkedin.com/in/faith-mosonik-b07460238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                 LinkedIn
//               </a>
//             </span>
//           </div>
//           <p>Jommo Kenyatta University of Agriculture and Technology</p>
//         </div>

//         <div className="profile-box">
//           <Image
//             src="/profile/MO-profile.png"
//             width={300}
//             height={300}
//             alt="Profile Photo"
//             className="profile-box img"
//           />
//           <h2>Moses Odeny</h2>
//           <div>
//             <span className="tech-skill">React</span>
//             <span className="tech-skill">Web Development</span>
//           </div>
//           <div>
//             <span>project lead</span>
//             <span>
//               <a href="https://www.linkedin.com/in/moses-odeny-19bb56292">
//                 LinkedIn
//               </a>
//             </span>
//           </div>

//           <p>Jommo Kenyatta University of Agriculture and Technology</p>
//         </div>

//         <div className="profile-box">
//           <Image
//             src="/profile/LN-profile.png"
//             width={300}
//             height={300}
//             alt="Profile Photo"
//             className="profile-box img"
//           />
//           <h2>Lynn Nyanduko</h2>
//           <div>
//             <span className="tech-skill">UI/UX</span>
//             <span className="tech-skill">Web Development</span>
//           </div>
//           <div>
//             <span>Designer </span>
//             <span>
//               <a href="https://www.linkedin.com/in/lynn-omae-0160b1252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                 LinkedIn
//               </a>
//             </span>
//           </div>
//           <p>Jommo Kenyatta University of Agriculture and Technology</p>
//         </div>
//       </div>

//       <Footer/>
//     </div>

//   );
// }

// export default page
