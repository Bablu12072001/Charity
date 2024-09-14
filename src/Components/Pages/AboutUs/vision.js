import {
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import image1 from "../../Image/img16.webp";
import image2 from "../../Image/img17.avif";
import image3 from "../../Image/img18.jpg";

function Vision() {
  return (
    <Box sx={{ padding: 2, background: 'linear-gradient(to right,#fff8e1,#FFFF)' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: 2 }}>
          <Typography variant="body1" component="div">
            Sood Charity Foundation is an NGO founded by actor and
            philanthropist, Sonu Sood (born 30 July 1976). He has a vision to
            serve people across the country, which has encouraged him to
            undertake various initiatives to help people of all stature,
            including providing them with state-of-the-art resources. Sood
            Charity Foundation has helped thousands across the world and is
            making constant efforts to raise awareness, provide care for those
            in need, and encourage many more to join us in serving humanity.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#ffd54f",
              color: "black",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#ffe082",
              },
            }}
          >
            Read More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} sx={{ padding: 1 }}>
            <img
              src={image1}
              alt="Vision 1"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: 2 }}>
          <Typography variant="body1" component="div">
            Sood Charity Foundation is an NGO founded by actor and
            philanthropist, Sonu Sood (born 30 July 1976). He has a vision to
            serve people across the country, which has encouraged him to
            undertake various initiatives to help people of all stature,
            including providing them with state-of-the-art resources. Sood
            Charity Foundation has helped thousands across the world and is
            making constant efforts to raise awareness, provide care for those
            in need, and encourage many more to join us in serving humanity.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#ffd54f",
              color: "black",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#ffe082",
              },
            }}
          >
            Read More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} sx={{ padding: 1 }}>
            <img
              src={image2}
              alt="Vision 2"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: 2 }}>
          <Typography variant="body1" component="div">
            Sood Charity Foundation is an NGO founded by actor and
            philanthropist, Sonu Sood (born 30 July 1976). He has a vision to
            serve people across the country, which has encouraged him to
            undertake various initiatives to help people of all stature,
            including providing them with state-of-the-art resources. Sood
            Charity Foundation has helped thousands across the world and is
            making constant efforts to raise awareness, provide care for those
            in need, and encourage many more to join us in serving humanity.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 4,
              borderRadius: "20px",
              backgroundColor: "#ffd54f",
              color: "black",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#ffe082",

              },
            }}
          >
            Read More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} sx={{ padding: 1 }}>
            <img
              src={image3}
              alt="Vision 3"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Paper>
        </Grid>

        <Box sx={{ width: "100%", textAlign: "center", mt: 4 }}>
          <List>{/* Add List items here if needed */}</List>
        </Box>
      </Grid>
    </Box>
  );
}

export default Vision;
