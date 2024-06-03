"use client";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="overflow-hidden relative cursor-pointer ">
      <Header />
      <HomeSection tagId="Home" />
      <OurStory tagId="story" />
      <OurServices tagId="service" />
      <Team tagId="team" footerId="contact" />
    </main>
  );
}
