import React from 'react'
import Container from './Container';
import Image from 'next/image';
import ImageWithHotspots from './HoveredImage';

const hotspots = [
  { top: '20%', left: '30%', width: '50px', height: '50px', link: '/page1' },
  { top: '50%', left: '60%', width: '100px', height: '100px', link: '/page2' },
];

const Hero = () => {
  return <section
  id="Home"
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