import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  styled,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header";
import Footer from "../Footer/Footer";
import Donation from "../Image/OurTeam.jpg";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    message: "Dedicated to providing the best service.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s", // Replace with actual image path
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Passionate about community service.",
    image:
      "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid", // Replace with actual image path
  },
  {
    id: 3,
    name: "Alice Johnson",
    message: "Focused on continuous improvement.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr74Pjdj__bQPnZK-BFujbwgnP1t5PIqkig&s", // Replace with actual image path
  },
  // Add more team members as needed
];

// Custom styles for team card
const TeamCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
  borderRadius: "20px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  overflow: "hidden",
  margin: "0 10px", // Add margin for spacing between cards
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
  },
}));

const HeaderImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: 400,
  objectFit: "cover",
  transition: "transform 0.5s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const TransparentText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "20%",
  left: "10%",
  transform: "translateY(-50%)",
  color: "#fff", // White color
  fontWeight: "bold", // Bold text
  background: "none", // No background
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const OurTeam = () => {
  const theme = useTheme();

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true, // Centers the active slide
    centerPadding: "0px", // Removes extra padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <Box sx={{ position: "relative", marginTop: 8 }}>
        <HeaderImage src={Donation} alt="Donation Header" />
        <TransparentText variant="h4">Our Team</TransparentText>
      </Box>
      <Box sx={{ mt: 5, mb: 5, textAlign: "center" }}>
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <Box key={member.id} sx={{ p: 2 }}>
              {" "}
              {/* Box for spacing around each card */}
              <TeamCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.message}
                  </Typography>
                </CardContent>
              </TeamCard>
            </Box>
          ))}
        </Slider>
      </Box>
      <Footer />
    </>
  );
};

export default OurTeam;
