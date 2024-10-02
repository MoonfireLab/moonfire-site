'use client'

import Image from 'next/image';
import { useState } from 'react';

const HoveredImage = ({ defaultImage, hoverImage, hotspots }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative flex justify-center items-center"
    >
      {/* Image A (Default image) */}
      <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="/images/moonfire-logo.png"
        width={500}
        height={500}
        alt="Image A"
        className={`transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Image B (Appears on hover) */}
      <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="/images/moonfire-all-new.png"
        width={500}
        height={500}
        alt="Image B"
        className={`absolute transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Render the hotspots when image is hovered */}
      {isHovered && hotspots.map((hotspot, index) => (
        <a
          key={index}
          href={hotspot.link}
          className="absolute"
          style={{
            top: hotspot.top,
            left: hotspot.left,
            width: hotspot.width,
            height: hotspot.height,
          }}
        >
          {/* Optional content like tooltip or transparent clickable area */}
          <div className="w-full h-full bg-transparent hover:bg-blue-500 opacity-50"></div>
        </a>
      ))}
    </div>
  );
};

export default HoveredImage;
