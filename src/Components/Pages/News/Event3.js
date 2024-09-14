import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import image1 from "../../Image/b.jpg";
import image2 from "../../Image/img3.jpg";
import image3 from "../../Image/img16.webp";
import image4 from "../../Image/img16.webp";
import image5 from "../../Image/img3.jpg";
import image6 from "../../Image/img16.webp";
import image7 from "../../Image/img16.webp";
import image8 from "../../Image/img16.webp";

const CardData = [
  {
    id: 1,
    title: "Sonu Sood Launches ‘SAMBHAVAM’",
    detail: "",
    img: image1,
  },
  {
    id: 2,
    title:
      "Sonu Sood inspiring Indian youth with his heartfelt speech at IAA Leadership Awards 2022",
    detail:
      "Sonu Sood delivered a compelling speech at the IAA Leadership Awards 2022, inspiring the Indian youth.",
    img: image2,
  },
  {
    id: 3,
    title:
      "Flood Relief in Andhra Pradesh by Sood Charity Foundation | Nellore – Tirupati",
    detail:
      "The Sood Charity Foundation provided crucial flood relief in Andhra Pradesh, focusing on Nellore and Tirupati.",
    img: image3,
  },
  {
    id: 4,
    title:
      "Free Food Distribution By Sood Charity Foundation & Bluechip Group | Dubai for Iftar",
    detail:
      "Sood Charity Foundation, in collaboration with Bluechip Group, distributed free food in Dubai during Iftar.",
    img: image4,
  },
  {
    id: 5,
    title: "Sonu Sood receives Golden Visa from the Dubai Government",
    detail:
      "Sonu Sood was honored with a Golden Visa by the Dubai Government for his humanitarian efforts.",
    img: image5,
  },
  {
    id: 6,
    title: "Sonu Sood Helping Migrants",
    detail:
      "Sonu Sood has been actively helping migrants with various support initiatives.",
    img: image6,
  },
  {
    id: 7,
    title: "E – Rickshaw Service",
    detail:
      "The E-Rickshaw Service is aimed at providing eco-friendly transport solutions.",
    img: image7,
  },
  {
    id: 8,
    title: "Collaboration with Rotary Club of Mumbai Elegant",
    detail:
      "A collaboration with the Rotary Club of Mumbai Elegant for various charitable activities.",
    img: image8,
  },
];

function Carding() {
  const getWordCount = (text) => {
    return text.split(/\s+/).filter(Boolean).length;
  };

  return (
    <Box sx={{ p: 2, background: 'linear-gradient(to right,#fff8e1,#FFFF)' }}>
      <Typography
        component="div"
        sx={{
          padding: { xs: 2, sm: 4 },
          margin: { xs: 1, sm: 2 },
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          lineHeight: { xs: 1.4, sm: 1.6 },
          textAlign: "center",
          fontWeight: 'bold'
        }}
      >
        Besides the numerous projects Sood Charity Foundation has started, our
        team has been working throughout the pandemic to help those in need. We
        are currently undertaking initiatives in fields such as medicine,
        education, and employment. During the severe second wave of the
        pandemic, Sonu Sood had made significant efforts to arrange for oxygen
        cylinders and hospital beds for many.
      </Typography>
      <Typography
        component="div"
        sx={{
          padding: { xs: 1, sm: 2 },
          margin: { xs: 1, sm: 2 },
          fontSize: { xs: "16px", sm: "18px" },
          textAlign: "center",
        }}
      >
        Twitter feed is not available at the moment
      </Typography>
      <Typography
        sx={{
          padding: { xs: 1, sm: 2 },
          margin: { xs: 1, sm: 2 },
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          lineHeight: { xs: 1.4, sm: 1.6 },
          textAlign: "center",
          fontWeight: 'bold'
        }}
      >
        Recently, Sonu Sood initiated ‘Sanjeevani’ – A Shot of Life. The
        movement aims to encourage individuals to get the COVID -19 vaccine and
        raise awareness about the nationwide vaccination drive. In June 2021,
        our founder announced our newest initiative, ‘Sambhavam’. This
        initiative aims to provide free IAS coaching scholarships and other
        resources to aspiring students.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
          p: 2,
        }}
      >
        {CardData.map((card) => (
          <Card
            key={card.id}
            sx={{
              maxWidth: { xs: 300, sm: 330 },
              height: { xs: 350, sm: 370 },
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              alt={card.title}
              height="200"
              image={card.img}
              title={card.title}
              sx={{
                objectFit: "cover",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "18px" },
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: { xs: "12px", sm: "14px" } }}
              >
                {card.detail}
              </Typography>
            </CardContent>
            {getWordCount(card.detail) > 6 && (
              <CardContent>
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
              </CardContent>
            )}
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Carding;
