'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '../videoplayer/VideoPlayer';

const HoveredImage = ({ defaultMedia, hoveredMedia, hotspots }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-auto h-auto bg-black"></div>
    );
  }

  return (
      <div
        className="relative flex justify-center items-center w-auto h-auto"
      >
        {/* Media A (Default media) */}
        <VideoPlayer
          src={defaultMedia}
          className={`absolute transition-opacity w-[55%] h-[55%] duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Media B (Appears on hover) */}
        <Image
          src={hoveredMedia}
          width={800}
          height={800}
          alt="Image B"
          className={`absolute transition-opacity xl:flex hidden duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
  );
};

export default HoveredImage;
