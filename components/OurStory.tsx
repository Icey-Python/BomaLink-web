import Marquee from "react-fast-marquee";
import ScrollCard from "@/components/ScrollCard";
import { Film, ArrowRight } from "lucide-react";
import { Slide, Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";

interface Props {
  tagId: string;
}
const OurStory = ({ tagId }: Props) => {
  const name = "GeoPASTURE";
  return (
    <section
      className="w-screen min-h-[100vh] bg-gradient-to-b from-[#224103] to-[#021500] text-white font-poppins relative py-16"
      id={tagId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Fade triggerOnce={true}>
          <div className="text-center mb-16">
            <h2 className="text-[#47f969] text-lg font-medium mb-3">OUR STORY</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Coexistence between farmers and pastoralists</h3>
          </div>
        </Fade>

        {/* Image Carousel */}
        <div className="relative mb-16 overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#021500] via-transparent to-[#021500] z-10 pointer-events-none"></div>
          <Marquee
            pauseOnHover={true}
            speed={15}
            className="py-4"
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
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <Slide direction="left" triggerOnce={true}>
            <div className="bg-[#021500]/50 border border-[#224103] rounded-xl p-8 relative overflow-hidden group hover:border-[#47f969] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#47f969]/5 to-[#D6F9C6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Film className="text-[#47f969]/20 absolute -right-6 -top-6" size={100} />
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Our Mission</h4>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                GeoPasture resolves resource conflicts between pastoralists and crop farmers with real-time pasture updates, weather forecasts, and GPS animal tracking. It fosters dialogue and collaboration for sustainable resource management.
              </p>
              <Button variant="link" className="text-[#47f969] p-0 hover:text-[#D6F9C6] relative z-10">
                Learn more about our mission <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Slide>

          {/* Right Column - Vision */}
          <Slide direction="right" triggerOnce={true}>
            <div className="bg-[#021500]/50 border border-[#224103] rounded-xl p-8 relative overflow-hidden group hover:border-[#47f969] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#47f969]/5 to-[#D6F9C6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Film className="text-[#47f969]/20 absolute -right-6 -top-6" size={100} />
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Our Vision</h4>
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                We envision a future where pastoralists and farmers work together harmoniously, sharing resources sustainably through technology-enabled solutions that benefit both communities and preserve traditional livelihoods.
              </p>
              <Button variant="link" className="text-[#47f969] p-0 hover:text-[#D6F9C6] relative z-10">
                Discover our vision <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Slide>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "500+", label: "Pastoralists", description: "Using our platform" },
            { number: "300+", label: "Farmers", description: "Registered users" },
            { number: "85%", label: "Conflict Reduction", description: "In pilot areas" }
          ].map((stat, index) => (
            <Fade key={index} delay={index * 100} triggerOnce={true}>
              <div className="text-center p-6">
                <h3 className="text-4xl md:text-5xl font-bold text-[#47f969] mb-2">{stat.number}</h3>
                <p className="text-xl font-medium text-white mb-1">{stat.label}</p>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
