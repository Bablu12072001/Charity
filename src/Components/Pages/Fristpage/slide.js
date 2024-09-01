import React from "react";
import { Box, Typography, Container } from "@mui/material";
import image1 from "../../Image/img2.jpg";

function SlidingTextOverlay() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: 3,
          "&:hover .overlay": {
            transform: "translateY(0)", // Slide up effect on hover
            opacity: 1,
          },
        }}
      >
        {/* Image Section */}
        <img
          src={image1}
          alt="sample"
          style={{ width: "100%", display: "block" }}
        />

        {/* Overlay Text Section */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark transparent background
            color: "white",
            padding: 2,
            textAlign: "center",
            transform: "translateY(100%)", // Start hidden (below the image)
            transition: "transform 0.5s ease, opacity 0.5s ease",
            opacity: 0,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Girls Who Learn Today, Lead Tomorrow
          </Typography>
          <Typography variant="body2">
            Join us and Ignite Change Through Education.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default SlidingTextOverlay;
