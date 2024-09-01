import { Grid, Paper, Typography, Button, Container } from "@mui/material";
import React from "react";
import image1 from "../../Image/img2.jpg";

function Heading() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }} // Responsive layout
      >
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              maxWidth: "100%",
              margin: "auto",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <img
              src={image1}
              alt="sample"
              style={{ width: "100%", height: 400 }}
            />
          </Paper>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="div" gutterBottom>
            Girls Who Learn Today, Lead Tomorrow
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Join us and Ignite Change Through Education
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#6EC1E4",
              color: "white",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#5A9FC9",
              },
            }}
          >
            Support Us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Heading;
