import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import image1 from "../../Image/img17.avif";
import image2 from "../../Image/img18.jpg";
import image3 from "../../Image/img2.jpg";
import image4 from "../../Image/img17.avif";
import image5 from "../../Image/img18.jpg";
import image6 from "../../Image/img2.jpg";
import image7 from "../../Image/img17.avif";
import image8 from "../../Image/img18.jpg";
import image9 from "../../Image/img2.jpg";
import image10 from "../../Image/img17.avif";
import image11 from "../../Image/img18.jpg";
import image12 from "../../Image/img2.jpg";
import image13 from "../../Image/img17.avif";
import image14 from "../../Image/img18.jpg";
import image15 from "../../Image/img2.jpg";

// Card data
const CardData = [
  {
    id: 1,
    title: "Serving the Masses",
    detail:
      "Providing access to state-of-the-art healthcare, education, employment, and technological advancements to people across the country.",
    img: image1,
  },
  {
    id: 2,
    title: "Raise Awareness",
    detail:
      "We are constantly taking measures to raise awareness and provide care for those in need.",
    img: image2,
  },
  {
    id: 3,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image3,
  },
  {
    id: 4,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image4,
  },
  {
    id: 5,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image5,
  },
  {
    id: 6,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image6,
  },
  {
    id: 7,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image7,
  },
  {
    id: 8,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image8,
  },
  {
    id: 9,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image9,
  },
  {
    id: 10,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image10,
  },
  {
    id: 11,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image11,
  },
  {
    id: 12,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image12,
  },
  {
    id: 13,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image13,
  },
  {
    id: 14,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image14,
  },
  {
    id: 15,
    title: "Work During the Pandemic",
    detail:
      "Our founder, Sonu Sood, became a support system to countless families during the pandemic.",
    img: image15,
  },
];

function CardComponent() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Key Initiatives
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We are committed to serving the community in various ways, from
          raising awareness to providing essential services during critical
          times.
        </Typography>
      </Box>

      {/* Card Grid Section */}
      <Grid container spacing={4} justifyContent="center">
        {CardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              sx={{
                maxWidth: 430,
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                alt={card.title}
                height="240"
                image={card.img}
                title={card.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.detail}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardComponent;
