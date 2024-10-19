"use client";
import React from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({src, className}) => {
  return (
    <div className={`relative ${className}`}>
      <ReactPlayer
        url={src}
        controls={false}
        width={"100%"}
        height={"100%"}
        light={false}
        pip={true}
        playing={true}
        loop={true}
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;