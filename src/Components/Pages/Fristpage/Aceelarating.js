import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

function Accelerate() {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5, background: 'linear-gradient(to right,#ffe0b2,#FFFF)' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center", // Center-align text for smaller screens

        }}
      >
        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            paddingX: { xs: 2, sm: 5 }, // Responsive padding
            marginTop: { xs: 4, sm: 8 }, // Responsive margin
          }}
        >
          Accelerate our mission by supporting us
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ paddingX: { xs: 2, sm: 5 }, marginTop: 2 }}
        >
          Become a droplet in the ocean of change
        </Typography>
      </Box>
    </Container>
  );
}

export default Accelerate;
