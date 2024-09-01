import React from "react";
import image from "../../Image/img2.jpg";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography
          align="center"
          color="white"
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            fontWeight: "bold",
            fontFamily: "Poppins",
            fontSize: { xs: "24px", sm: "35px", md: "45px" },
            padding: 2,
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <img
          src={image}
          alt="About Us"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
}

export default About;
