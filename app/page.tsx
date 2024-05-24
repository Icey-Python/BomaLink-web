import Image from "next/image";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";

export default function Home() {
  return (
      <main className="overflow-hidden scroll-smooth">
        <HomeSection />
        <OurStory tagId="story"/>
        <OurServices tagId="service"/>
        <Team tagId="team" footerId="contact"/>
      </main>
  );
}
