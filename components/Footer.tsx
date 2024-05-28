import React from 'react';
import Image from 'next/image';

interface Props {
  tagId: string
}

function Footer({tagId}:Props) {
  return (
    <footer className="bg-green-950 text-green-200 w-screen h-fit py-2"id={tagId}>
      <div className="flex flex-col mx-auto md:mx-0 lg:mx-0 md:flex-row justify-around items-start md:items-center w-full h-fit">
        <div className="flex items-center md:mb-0">
          <div className="absolute left-[3%] bottom-[3%] w-32 h-32 mr-3 bg-white rounded-full border-[#D6F9C6] border-8 invisible md:visible lg:visible" >
            <Image 
              src="/Footerlogo.png" 
              alt="Logo"
            //   layout="fill"
              width={300}
              height={300}
              objectFit="contain"
              className="invisible md:visible lg:visible rounded-full self-center pt-2 pl-2"
            />
          </div>
          <div className='ml-20 mb-4 md:mb-0 lg:mb-0'>
            <h3 className="text-xl font-bold text-white">BOMALINK</h3>
            <p className="text-sm">Maamuzi sahihi, ushirikiano wa kudumu</p>
          </div>
        </div>
        <div className="ml-20 md:ml-0 lg:ml-0 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Company</h3>
          <p className="text-sm">FAQs</p>
          <p className="text-sm">Team</p>
        </div>
        <div className="ml-20 md:ml-0 lg:ml-0 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Explore</h3>
          <p className="text-sm">Services</p>
          <p className="text-sm">Related Agencies</p>
        </div>
        <div className="ml-20 md:ml-0 lg:ml-0 mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Get in touch</h3>
          <p className="text-sm">email@jhubafrica.com</p>
          {/*hotline*/}
          <p className="text-sm">+1(238) 468-150-231</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


// import React from 'react';
// import Image from 'next/image';

// function Footer() {
//   return (
//     <div className="bg-green-950 flex justify-around flex-wrap">    
//       <div className="w-full  mb-4 flex justify-around flex-wrap">
//         <h3 className="text-3xl font-bold text-white ">BOMALINK</h3>
//         <p className="text-sm text-green-200 flex flex-wrap">Maamuzi sahihi, ushirikiano wa kudumu</p>
//       </div>
//       <div className="flex w-full justify-around fixed bottom-0 left-0 h-24 mb-4">
//         <Image
//           src="/logo-with-name.png"
//           width={100}
//           height={100}
//           alt="Logo"
//           className="fixed bottom-5 left-5"
//         />
//       </div>
//       <div className="w-full text-green-200 text-sm justify-around text-center">
//         <h3 className="text-xl font-bold">Company</h3>
//         <p className="text-sm">FAQs</p>
//         <p className="text-sm">Team</p>
//       </div>
//       <div className="w-full text-center mb-4">
//         <h3 className="text-xl font-bold">Explore</h3>
//         <p className="text-sm">Services</p>
//         <p className="text-sm">Related Agencies</p>
//       </div>
//       <div className="w-full text-center mb-4">
//         <h3 className="text-xl font-bold">Get in Touch</h3>
//         <p className="text-sm">email@jhubafrica.com</p>
//         <p className="text-sm">+1(238) 468-150-231</p>
//       </div>
//     </div>
//   )
// }

// export default Footer;
// import React from 'react'
// import Image from 'next/image'

// function Footer() {
//   return (
//     <div>    
//           <footer>
//             <div className="footer-content"/>
//             <div className="company-info">
//                 <h3>BomaLink</h3>
//                 <p>Maamuzi sahihi, ushirikiano wa kudumu</p>
//             </div>
//         <div className="logo">
//             <Image 
//              src="/logo-with-name.png" 
//              width={900}
//              height={900}
//              alt="Logo" 
//              className="logo"            
//              />
//         </div>
//         <div>
//             <h3>Company</h3>
//             <p>FAQs</p>
//             <p>Team</p>
//         </div>
//         <div>
//             <h3>Explore</h3>
//             <p>Services</p>
//             <p>Related Agencies</p>
//         </div>
//         <div>
//             <h3>Get in Touch</h3>
//             <p> email@jhubafrica.com</p>
//             <p> +1(238) 468-150-231</p>
//         </div>
//     </footer>

//     </div>
//   )
// }

// export default Footer

