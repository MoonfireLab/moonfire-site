import React from 'react'
import ImageWithHotspots from "@/components/hoveredImages/HoveredImage";
import { hotspots } from '@/constants/mappedImagePoints';
import HeaderLab from '../headers/HeaderLab';

const Hero = () => {
  return(
  <main>
    <HeaderLab />
    <section className="relative flex justify-center items-center w-screen h-screen overflow-hidden bottom-0 left-0 right-0 top-0 bg-gradient-to-r from-moonfireGray to-moonfireGray-light">
      <ImageWithHotspots
          defaultMedia="/animation/Logo-Moonfire-Lab_webm.webm"
          hoveredMedia="/images/Moonfire-All-V3.png"
          hotspots={hotspots}
      />
  </section>
  </main>
)};

export default Hero;