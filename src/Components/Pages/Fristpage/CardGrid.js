import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Grid,
  Container,
} from "@mui/material";
import image1 from "../../Image/img2.jpg";
import image2 from "../../Image/img2.jpg";
import image3 from "../../Image/img2.jpg";

const CardData = [
  {
    id: 1,
    title: "Mission Green Bharat",
    detail:
      "SCF is excited to announce its upcoming nationwide tree plantation drive Mission Green Bharat. With an ambitious goal of planting 10,000 trees across the country, we are committed to making a tangible impact on environmental sustainability and combating climate change.",
    img: image1,
  },
  {
    id: 2,
    title: "SAMBHAVAM 2024-25",
    detail:
      "We’re excited to announce the launch of SAMBHAVAM 2024-25, a collaborative effort between the Sood Charity Foundation (SCF) and the esteemed Divine India Youth Association (DIYA).",
    img: image2,
  },
  {
    id: 3,
    title: "Meal @51",
    detail:
      "Sood Charity Foundation (SCF) is embarking on a transformative journey this summer with Meal@51, a nationwide initiative to combat hunger and ensure that no one goes to bed hungry.",
    img: image3,
  },
];

function Cardgrid() {
  return (
    <Container maxWidth="lg" sx={{ py: 4, background: '#fff8e1' }}>
      {/* Grid container to manage responsiveness */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {CardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              {/* Card Media for image */}
              <CardMedia
                component="img"
                alt={card.title}
                height="200"
                image={card.img}
                title={card.title}
              />
              {/* Card Content for text */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.detail}
                </Typography>
                <Box sx={{ marginTop: 2, textAlign: "center" }}>
                  <Button
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#ffd54f",
                      color: "white",
                      padding: "8px 16px",
                      "&:hover": {
                        backgroundColor: "#ffd54f",
                      },
                    }}
                    variant="contained"
                  >
                    Support us
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cardgrid;
