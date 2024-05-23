import Image from "next/image";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
      <main>
        <HomeSection />
        <OurServices tagId="service"/>
      </main>
  );
}
