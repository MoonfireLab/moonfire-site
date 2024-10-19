import React from 'react'
import ImageWithHotspots from "@/components/hoveredImages/HoveredImage";
import { hotspots } from '@/constants/mappedImagePoints';

const Hero = () => {
  return <section className="relative flex justify-center items-center w-screen h-screen overflow-hidden">
      <ImageWithHotspots
          defaultMedia="/animation/Logo-Moonfire-Lab_webm.webm"
          hoveredMedia="/images/Moonfire-All-V3.png"
          hotspots={hotspots}
      />
  </section>
};

export default Hero;