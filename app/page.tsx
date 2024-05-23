import Image from "next/image";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
      <main>
        <HomeSection />
        <OurStory tagId="story"/>
        <OurServices tagId="service"/>
      </main>
  );
}
