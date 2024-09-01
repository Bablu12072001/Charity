import { Typography } from "@mui/material";
import React from "react";

function Heading() {
  return (
    <Typography
      color="gray"
      sx={{
        padding: { xs: 1, sm: 2, md: 3 }, // Responsive padding
        marginLeft: { xs: 2, sm: 4, md: 6 }, // Responsive margin-left
        marginRight: { xs: 2, sm: 4, md: 6 }, // Responsive margin-right
        fontFamily: "Poppins, sans-serif",
        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // Responsive font size
        lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 }, // Responsive line-height
        textAlign: { xs: "center", sm: "left" }, // Responsive text alignment
        maxWidth: { xs: "100%", sm: "80%", md: "70%" }, // Responsive max-width
        boxSizing: "border-box", // Ensure padding and margin are included in width
      }}
    >
      In 2020, amidst the COVID-19 lockdown, Sonu Sood with Neeti Goel had
      personally funded the beginning of the programme to send migrant workers
      back home. They managed to send back 20,000 people to their homes by June
      2020. Moreover, they had established the ‘Ghar Bhejo’ initiative, which
      with crowdsourcing had garnered over 52 lakh rupees in the same period.
      Heading
    </Typography>
  );
}

export default Heading;
