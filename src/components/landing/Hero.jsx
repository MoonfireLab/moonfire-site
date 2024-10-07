import React from 'react'
import Container from "@/components/containers/Container";
import ImageWithHotspots from "@/components/hoveredImages/HoveredImage";
import { hotspots } from '@/constants/mappedImagePoints';

const Hero = () => {
  return <section
  className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3"
  >
    <Container>
      <ImageWithHotspots
          defaultImage="/images/moonfire-logo.png"
          hoverImage="/images/moonfire-all-new.png"
          hotspots={hotspots}
      />
    </Container>
  </section>
};

export default Hero;