"use client";
import HomeSection from "@/components/Home";
import OurServices from "@/components/OurServices";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";
import Header from "@/components/Header";
import { Gallery } from "@/components/Gallery";
export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <Header/>
      <HomeSection tagId="Home" />
      <OurStory tagId="story" />
      <OurServices tagId="service" />
      <Gallery tagId="Gallery"/>
      <Team tagId="team" footerId="contact" />
    </main>
  );
}
