import Marquee from "react-fast-marquee";
import ScrollCard from "@/components/ScrollCard";
import { Film } from "lucide-react";

interface Props {
  tagId: string;
}
const OurStory = ({ tagId }: Props) => {
  const name = "GeoPASTURE";
  return (
    <section
      className="w-screen h-[100vh] bg-[#D6F9C6] text-white font-poppins flex-col relative"
      id={tagId}
    >
      <span className="absolute text-2xl md:text-4xl lg:text-6xl font-bold text-white/5 z-0  ">
        {name}
      </span>
      <Marquee
        className="invisible lg:visible"
        pauseOnHover={true}
        style={{
          position: "absolute",
          top: "50%",
          overflowY: "hidden",
          transform: "translateY(-50%)",
          width: "100%",
          height: "fit-content",
          zIndex: "10",
          cursor: "pointer",
        }}
        speed={15}
        autoFill={true}
      >
        <ScrollCard path={"/cows-4.jpeg"} />
        <ScrollCard path={"/cows-2.jpeg"} />
        <ScrollCard path={"/cows.png"} />
        <ScrollCard path={"/cows-3.jpeg"} />
        <ScrollCard path={"/cows-6.jpeg"} /> 
        <ScrollCard path={"/cows-8.jpg"} />
        <ScrollCard path={"/cows-9.jpg"} />
        <ScrollCard path={"/cows-10.jpg"} />
        <ScrollCard path={"/cows-11.jpg"} />
        <ScrollCard path={"/cows-12.jpg"} />
        <ScrollCard path={"/pastoralist.jpeg"} />
      </Marquee>
      <div className="flex justify-items-center items-top font-bold text-6xl h-1/2 px-20 py-8 z-0 bg-[#021500] relative">
        <p className="text-center mx-auto my-auto lg:my-0 w-fit text-4xl md:text-5xl lg:text-7xl">
          Coexistence between <br /> farmers and pastoralists
        </p>
        <span className="absolute top-1/3 left-1/4 text-4xl md:text-7xl lg:text-9xl font-bold text-white/5 z-0">
          {name}
        </span>
        <span className="absolute top-3/4 right-1 text-2xl md:text-4xl lg:text-6xl font-bold text-white/5 z-0">
          {name}
        </span>
      </div>

      <div className="h-1/2 w-full bg-[#D6F9C6] text-[#021500] py-20 px-5 lg:px-20 relative">
        <div className="lg:mt-5"></div>
        <Film
          className="text-[#224103] invisible lg:visible absolute right-10 top-[35%]"
          size={50}
        />
        <Film
          className="text-[#224103]/10 absolute top-1/2 left-1/2 z-0"
          size={100}
        />
        <Film
          className="text-[#224103]/5  absolute bottom-10 left-20 z-0"
          size={65}
        />
        {/* <span className="bg-[#224103] text-sm lg:text-2xl text-white font-bold p-2 rounded-3xl mt-8">Our story</span> */}
        <p className="text-sm h-fit  mt-2 px-5 md:px-20 lg:px-20 lg:mt-20 lg:text-xl z-20">
         GeoPasture resolves resource conflicts between pastoralists and crop farmers with real-time pasture updates, weather forecasts, and GPS animal tracking. It fosters dialogue and collaboration for sustainable resource management.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
