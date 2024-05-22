import Image from "next/image";
import Landing from "@/components/Landing";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
      <main>
        <Landing></Landing>
        <AboutUs tagId="service"></AboutUs>
      </main>
  );
}
