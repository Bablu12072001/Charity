import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  styled,
  keyframes,
} from "@mui/material";
import { Link } from "react-router-dom";

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SignUpContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  animation: `${fadeIn} 1s ease-in-out`,
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  boxShadow: theme.shadows[5],
  border: `1px solid ${theme.palette.divider}`,
  animation: `${fadeIn} 1s ease-in-out`,
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: "#fff",
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
  transition: "background 0.3s ease-in-out",
}));

const SignInButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
  },
  transition: "color 0.3s ease-in-out, border-color 0.3s ease-in-out",
}));

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <FormBox>
        <Title variant="h5">Shree Ram Charit Manas Seva Sansthan</Title>
        <Typography variant="h6" align="center" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Phone Number"
          type="tel"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          margin="normal"
          multiline
          rows={3}
          required
        />

        <SignUpButton fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
          Sign Up
        </SignUpButton>
        <Divider sx={{ my: 2 }}>Already have an account?</Divider>
        <SignInButton
          fullWidth
          variant="outlined"
          size="large"
          component={Link}
          to="/signup"
        >
          Sign In
        </SignInButton>
      </FormBox>
    </SignUpContainer>
  );
};

export default SignUpPage;
