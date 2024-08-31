import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  styled,
  Paper,
  useTheme,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import contactImage from "../Image/conatctUs.jpg"; // Ensure this path is correct
import Header from "../Header";
import Footer from "../Footer/Footer";

// Fix marker icon issue in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Custom styling for the contact form
const ContactFormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  padding: "24px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  animation: "fadeInUp 0.8s ease-out",
  "@keyframes fadeInUp": {
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

const ContactUs = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box Box sx={{ mt: 4, mb: 4 }}>
        {/* Contact Us Image */}
        <Box
          component="img"
          src={contactImage}
          alt="Contact Us"
          sx={{
            width: "100%",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            marginBottom: "24px",
            animation: "fadeInDown 1s ease-out",
            height: 400,
          }}
        />

        {/* Contact Us Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: theme.palette.primary.main,
            animation: "fadeIn 1s ease-out",
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <ContactFormContainer>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    type="tel"
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: "16px",
                      textTransform: "none",
                      transition:
                        "background-color 0.3s ease, transform 0.3s ease",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </ContactFormContainer>
          </Grid>

          {/* Map and Location Notes */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
                borderRadius: "8px",
                animation: "fadeInRight 1s ease-out",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Our Location
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Visit us at our office for any inquiries or to learn more about
                our work. We are located at:
                <br />
                <strong>123 Temple Street, City, State, Zip</strong>
              </Typography>
              <Box
                sx={{
                  height: 200,
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>Shree Ram Charit Manas Seva Sansthan Office</Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
