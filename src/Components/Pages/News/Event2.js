import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import image1 from "../../Image/img20.jpg";
import image2 from "../../Image/img16.webp";
import image3 from "../../Image/img14.jpg";
import image4 from "../../Image/img20.jpg";

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
];

function Cards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {CardData.map((card) => (
          <Card
            key={card.id}
            sx={{
              maxWidth: 300,
              width: "100%",
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt={card.title}
              height="180"
              image={card.img}
              title={card.title}
              sx={{
                objectFit: "cover",
                borderBottom: "1px solid #e0e0e0",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.detail}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: 4,
        }}
      >
        <Button
          sx={{
            borderRadius: "30px",
            padding: "10px 20px",
            backgroundColor: "#ffd54f",
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ffe082",
            },
          }}
          variant="contained"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default Cards;
