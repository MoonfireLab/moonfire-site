import React from 'react'
import Container from './Container';
import Image from 'next/image';

const Hero = () => {
  return <section
  id="Home"
  className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3"
  >
    <Container>
        <Image 
        src="/images/moonfire-logo.png"
        width={500}
        height={500}
        alt=""
        style={{objectFit: 'cover', objectPosition: 'center'}}
        />
    </Container>
  </section>
};

export default Hero;