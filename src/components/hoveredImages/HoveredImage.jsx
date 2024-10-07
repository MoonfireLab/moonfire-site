'use client'

import Image from 'next/image';
import { useState } from 'react';
import Container from "@/components/containers/Container";
import Link from 'next/link';

const HoveredImage = ({ defaultImage, hoverImage, hotspots }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Container className="relative flex justify-center items-center">
      <div
        className="relative flex justify-center items-center w-[500px] h-[500px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image A (Default image) */}
        <Image

          src="/images/moonfire-logo.png"
          width={500}
          height={500}
          alt="Image A"
          className={`transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Image B (Appears on hover) */}
        <Image
          src="/images/moonfire-all-new.png"
          width={500}
          height={500}
          alt="Image B"
          className={`absolute transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Render the hotspots when image is hovered */}
        {isHovered && hotspots.map((hotspot, index) => (
          <Link href={hotspot.link} key={index}>
          <div
            className="absolute cursor-pointer"
            style={{
              top: hotspot.top,
              left: hotspot.left,
              width: hotspot.width,
              height: hotspot.height,
            }}
          >
            <span className="block w-full h-full bg-transparent hover:bg-blue-500 opacity-50"></span>
          </div>
        </Link>
        ))}
      </div>
    </Container>
  );
};

export default HoveredImage;
