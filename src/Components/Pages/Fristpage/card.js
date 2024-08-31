import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

// Sample data for cards
const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is a description for card 1.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is a description for card 2.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is a description for card 3.",
    image: "https://via.placeholder.com/300",
  },
];

function ResponsiveCards() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      p={2}
      gap={2}
    >
      {cardData.map((card) => (
        <Card key={card.id} sx={{ width: 300 }}>
          <CardMedia
            component="img"
            alt={card.title}
            height="140"
            image={card.image}
            title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "20px" }}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ResponsiveCards;
