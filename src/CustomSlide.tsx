import { Box, styled, Typography } from "@mui/material";
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
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const VideoBox = styled(Box)({
    width: "18.75rem",
    height: "33.25rem",
    borderRadius: "1rem",
    backgroundColor: "lightblue",
    border: isFocus ? `solid blue` : 0,
  });

  // console.log(videoRef);

  const toggleMute = (): void => {
    setMuted((muted) => !muted);
  };

  // useEffect(() => {
  //   if (isFocus && videoRef.current) {
  //     console.log("test");
  //     videoRef.current.play();
  //     setPaused(false);
  //   } else if (videoRef.current) {
  //     console.log("test2");
  //     videoRef.current.pause();
  //     setPaused(true);
  //   }
  // }, [isFocus]);

  // const togglePause = (): void => {
  //   setPaused((paused) => !paused);
  //   if (videoRef.current) {
  //     if (paused) {
  //       console.log("play");
  //       videoRef.current.play();
  //     } else {
  //       console.log("pause");
  //       videoRef.current.pause();
  //     }
  //     setPaused(!paused);
  //   }
  // };

  const memoizedVideo = useMemo(() => {
    return (
      <VideoBox position={"relative"}>
        <video
          ref={videoRef}
          width="100%"
          height={"100%"}
          style={{ borderRadius: "1rem" }}
          muted
          controls={isFocus}
          autoPlay={isFocus}
        >
          <source src={videoSrc} type="video/mp4"></source>
        </video>
        {/* <Box
          sx={{
            width: "15px",
            height: "15px",
            position: "absolute",
            bottom: "40px",
            right: "25px",
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
            // onClick={togglePause}
          >
            {paused ? <PlaySVG /> : <PauseSVG />}
          </button>
        </Box> */}
      </VideoBox>
    );
  }, [videoSrc, isFocus]);

  return (
    <Box>
      {memoizedVideo}
      <Typography
        sx={{
          color: "#4F6076",
          fontSize: "0.875rem",
          weight: 400,
          marginLeft: "0.5rem",
        }}
      >
        Lorum Ipsum
      </Typography>
    </Box>
  );
};

export default CustomSlide;
