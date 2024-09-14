import React, { useState } from "react";
import { CircularProgress, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Logo from "../../Images/3333.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Fristpage = () => {
  // Static array of image URLs
  const staticImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  const [images, setImages] = useState(staticImages);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselSettings = {
    autoPlay: true,
    autoPlaySpeed: 2000,
    infinite: true,
    transitionDuration: 500,
    removeArrowOnDeviceType: ["tablet", "mobile"],
  };

  return (
    <Box sx={{ height: isMobileView ? 500 : 700, border: '#ffff00' }} >
      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ marginTop: isMobileView ? 5 : 8 }}>
          <Carousel
            {...carouselSettings}
            animation="slide"
            indicators={false}
            responsive={responsive}
          >
            {images.map((imageUrl, index) => (
              <Box
                key={index}
                sx={{
                  height: isMobileView ? 500 : 700,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imageUrl}
                  alt={`Slide ${index}`}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "100%",
                    height: "auto",

                    marginTop: 6,
                  }}
                />
              </Box>
            ))}
          </Carousel>
          <Box
            sx={{
              position: "absolute",
              top: isMobileView ? "16%" : "25%",
              left: isMobileView ? "14%" : "7%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              maxWidth: "600px",
            }}
          ></Box>
        </Box>
      )}
    </Box>
  );
};

export default Fristpage;
