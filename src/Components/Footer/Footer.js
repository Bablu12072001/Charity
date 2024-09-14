import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link,
  Container,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../Image/Sacanner.png"; // Add your logo path here

// Custom Box for Footer Section
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  color: theme.palette.common.white,
  padding: "40px 0",
  position: "relative",
  overflow: "hidden",
  animation: "fadeIn 1s ease-in-out",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Organization Info */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: 150,
                marginBottom: 2,
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: "bounceIn 1.5s ease-out",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Shree Ram Charit Manas Seva Sansthan
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Dedicated to promoting spiritual and cultural values. Join us in
              our mission to serve humanity and spread the teachings of Shree
              Ram Charit Manas.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" color="inherit" underline="none" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                underline="none"
                sx={{ mb: 1 }}
              >
                About Us
              </Link>
              <Link
                href="/news"
                color="inherit"
                underline="none"
                sx={{ mb: 1 }}
              >
                News & Events
              </Link>
              <Link
                href="/team"
                color="inherit"
                underline="none"
                sx={{ mb: 1 }}
              >
                Our Team
              </Link>
              <Link href="/contact" color="inherit" underline="none">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Contact and Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Address: 123 Temple Street, City, State, Zip
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +123-456-7890
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Email: info@ramcharitmanas.org
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: (theme) => theme.palette.common.white, mr: 1 }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: (theme) => theme.palette.common.white, mr: 1 }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: (theme) => theme.palette.common.white, mr: 1 }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: (theme) => theme.palette.common.white }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Developed By Section */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          pt: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="body2" sx={{ mb: 1 }}>
          © 2024 Shree Ram Charit Manas Seva Sansthan. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Developed by P5 Digital Solutions
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
