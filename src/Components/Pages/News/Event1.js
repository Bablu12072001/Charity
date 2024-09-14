import { Typography, Box } from "@mui/material";
import React from "react";

function Heading() {
  return (
    <Box sx={{
      // padding: { xs: 1, sm: 2, md: 3 }, // Responsive padding
      // marginLeft: { xs: 2, sm: 4, md: 6 }, // Responsive margin-left
      // marginRight: { xs: 2, sm: 4, md: 6 }, // Responsive margin-right
      fontFamily: "Poppins, sans-serif",
      fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" }, // Responsive font size
      // lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 }, // Responsive line-height
      textAlign: { xs: "center", sm: "left" }, // Responsive text alignment
      // maxWidth: { xs: "100%", sm: "80%", md: "70%" }, // Responsive max-width
      // boxSizing: "border-box", // Ensure padding and margin are included in width
      backgroundColor: "black",

    }}>
      <Box sx={{ padding: { xs: 1, sm: 2, md: 3 }, marginLeft: { xs: 2, sm: 4, md: 6 }, }}
      >
        <Typography
          color="gray"

        >
          In 2020, amidst the COVID-19 lockdown, Sonu Sood with Neeti Goel had
          personally funded the beginning of the programme to send migrant workers
          back home. They managed to send back 20,000 people to their homes by June
          2020. Moreover, they had established the ‘Ghar Bhejo’ initiative, which
          with crowdsourcing had garnered over 52 lakh rupees in the same period.
          Heading
        </Typography>
      </Box>
    </Box>
  );
}

export default Heading;
