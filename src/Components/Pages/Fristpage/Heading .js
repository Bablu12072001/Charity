import { Grid, Paper, Typography, Button, Container } from "@mui/material";
import React from "react";
import image1 from "../../Image/img2.jpg";

function Heading() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }} >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" }, background: 'linear-gradient(to right,#ffe0b2,#FFFF)' }} // Responsive layout
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
          <Typography variant="body1" color="text.black" paragraph>
            Education is everyone’s right and it is one of the most crucial areas of empowerment for women. Educated woman contribute greatly to society’s development and they can share the responsibility of men in every walk of life. Education not only awakens people’s mind, but it also makes them self-dependent. Girl education in India is still a less preferred option in rural areas. Time has changed now and girls who are trusted by their parents and the society are doing wonders in every field. Indira Gandhi, Kiran Bedi, Lata Mangeshkar, etc are some of the great examples. Girl education is even helpful in preventing various crimes against women. Thus, it is important that girl education is promoted in rural areas and villages too so that every girl becomes independent and assertive.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#ffd54f",
              color: "white",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#ffd54f",
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
