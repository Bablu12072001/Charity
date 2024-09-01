import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "2rem",
  color: theme.palette.primary.main,
}));

const StyledList = styled(List)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
  listStyleType: "none",
  margin: 0,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),

  "&::before": {
    content: '""',
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    display: "inline-block",
    marginRight: theme.spacing(1),
  },
}));

const campaigns = [
  "Free SSC Campaign",
  "FREE ENT Surgeries",
  "Free Graduation Campaign",
  "SANKALP - Free Law Education",
  "Prof. Saroj Sood Scholarships",
  "GHAR BHEJO",
  "SAKSHAM - CA Education",
  "COVREG O2 Plants",
  "Oxygen Concentrators",
  "SAMBHAVAM - IAS Scholarships",
  "Professor Saroj Sood Scholarship (UG & PG Scholarships)",
  "PRAVASI ROJGAR",
  "ILAAJ INDIA",
  "RUK JAANA NAHI",
  "SONU FOR YOU (India’s Largest Blood Bank)",
];

const AbutUs = () => {
  return (
    <>
      <Container mt={10}>
        <Title>Our Campaigns and Initiatives</Title>
        <StyledList>
          {campaigns.map((campaign, index) => (
            <StyledListItem key={index}>
              <ListItemText primary={campaign} />
            </StyledListItem>
          ))}
        </StyledList>
      </Container>
    </>
  );
};

export default AbutUs;
