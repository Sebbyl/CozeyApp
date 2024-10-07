import { Box, Typography, Grid2, Button, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "./videos/1.mp4";
import video2 from "./videos/2.mp4";
import video3 from "./videos/3.mp4";
import video4 from "./videos/4.mp4";
import video5 from "./videos/5.mp4";
import video6 from "./videos/6.mp4";
import video7 from "./videos/7.mp4";
import video8 from "./videos/8.mp4";
import video9 from "./videos/9.mp4";
import video10 from "./videos/10.mp4";
import video11 from "./videos/11.mp4";
import video12 from "./videos/12.mp4";
import video13 from "./videos/13.mp4";
import video14 from "./videos/14.mp4";
import video15 from "./videos/15.mp4";
import { useRef, useState } from "react";
import { ReactComponent as PauseSVG } from "./videos/pause.svg";
import { ReactComponent as PlaySVG } from "./videos/play.svg";
import { ReactComponent as SoundOnSVG } from "./videos/sound on.svg";
import { ReactComponent as SoundOffSVG } from "./videos/sound off.svg";
import CustomSlide from "./CustomSlide";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ChevronButton = styled(Button)({
  position: "relative",
  width: "1.5rem",
  height: "3.5rem",
  borderRadius: "50%",
  backgroundColor: "#F7F8F6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
});

export default function CozeyCarousel() {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15,
  ];

  const LeftChevronSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 320 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    );
  };

  const RightChevronSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    );
  };

  interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
  }

  //Custom next/previous buttons for the library used
  const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({
    next,
    previous,
  }) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "row", gap: "1.875rem" }}>
        <ChevronButton onClick={previous}>
          <LeftChevronSvg />
        </ChevronButton>
        <ChevronButton onClick={next}>
          <RightChevronSvg />
        </ChevronButton>
      </Box>
    );
  };

  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  //Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    afterChange: (current: number) => setFocusedIndex(current),
    useTransform: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ECEBE7",
        height: "45.75rem",
        paddingTop: "2.5rem",
        paddingBottom: "5rem",
        paddingLeft: isSmallScreen ? "1rem" : "5rem",
        paddingRight: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: "1.75rem", color: "#4F6076" }}
        >
          A day in the life
        </Typography>
        {isLargeScreen && <CustomButtonGroup next={next} previous={prev} />}
      </Box>

      <Box sx={{ height: "100%" }}>
        <Slider ref={sliderRef} {...settings}>
          {videos.map((video, index) => (
            <CustomSlide videoSrc={video} isFocus={index === focusedIndex} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
