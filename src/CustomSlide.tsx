import { Box, styled } from "@mui/material";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { ReactComponent as PauseSVG } from "./videos/pause.svg";
import { ReactComponent as PlaySVG } from "./videos/play.svg";
import { ReactComponent as SoundOnSVG } from "./videos/sound on.svg";
import { ReactComponent as SoundOffSVG } from "./videos/sound off.svg";

interface SlideProp {
  videoSrc: string;
  isFocus: boolean;
}

const CustomSlide: React.FC<SlideProp> = ({ videoSrc, isFocus }) => {
  // console.log(isFocus);
  const [paused, setPaused] = useState(isFocus ? false : true);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const VideoBox = styled(Box)({
    width: "18.75rem",
    height: "33.25rem",
    borderRadius: "1rem",
    backgroundColor: "#ECEBE7",
    border: isFocus ? `solid #69A2FF` : 0,
    padding: "0.2rem",
  });

  //Toggles the video mute
  const toggleMute = (): void => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((muted) => !muted);
    }
  };

  //Autoplay on focus
  useEffect(() => {
    if (isFocus && videoRef.current) {
      videoRef.current.play();
      setPaused(false);
    } else if (videoRef.current) {
      console.log(videoRef.current);
      videoRef.current.pause();
      setPaused(true);
    }
  }, [isFocus]);

  //Toggles the pause on button click
  const togglePause = (): void => {
    videoRef.current?.pause();
    if (videoRef.current && !paused) {
      setPaused(true);
      videoRef.current.pause();
    } else if (videoRef.current && paused) {
      setPaused(false);
      videoRef.current.play();
    }
  };

  //Memoizes the videos, so they dont flicker on rerender
  const memoizedVideo = useMemo(() => {
    return (
      <VideoBox>
        <video
          ref={videoRef}
          width="100%"
          height={"100%"}
          style={{ borderRadius: "1rem" }}
        >
          <source src={videoSrc} type="video/mp4"></source>
        </video>
      </VideoBox>
    );
  }, [isFocus]);

  return (
    <Box position={"relative"} sx={{ width: "19rem", height: "35rem" }}>
      {memoizedVideo}
      <Box
        sx={{
          width: "15px",
          height: "15px",
          position: "absolute",
          bottom: "60px",
          right: "20px",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={toggleMute}
        >
          {muted ? <SoundOffSVG /> : <SoundOnSVG />}
        </button>
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={togglePause}
        >
          {paused ? <PlaySVG /> : <PauseSVG />}
        </button>
      </Box>
    </Box>
  );
};

export default CustomSlide;
