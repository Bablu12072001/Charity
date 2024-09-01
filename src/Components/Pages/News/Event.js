import React from "react";
import image from "../../Image/DonateImage.jpg";
import { Box, Typography } from "@mui/material";

function NewsAndEvent() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        margin: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: { xs: 2, sm: 5, md: 10 }, // Responsive margin-top
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={image}
        alt="sample"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensure the image covers the container while maintaining its aspect ratio
          zIndex: 0, // Make sure the image is behind the text
        }}
      />

      {/* Text overlay container */}
      <Box
        sx={{
          position: "relative", // Relative to the image container
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", sm: "flex-start" }, // Responsive alignment
          paddingLeft: { xs: 2, sm: "50px", md: "100px" }, // Responsive padding
          textAlign: { xs: "center", sm: "left" }, // Responsive text alignment
          zIndex: 1, // Make sure the text is above the image
        }}
      >
        <Typography
          color="white"
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "24px", sm: "35px", md: "45px" }, // Responsive font size
            mb: { xs: 1, sm: 2 }, // Responsive margin-bottom for spacing
          }}
        >
          News & Events
        </Typography>
      </Box>
    </Box>
  );
}

export default NewsAndEvent;
