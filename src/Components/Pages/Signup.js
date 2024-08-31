import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  styled,
  keyframes,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SignInContainer = styled(Container)(({ theme }) => ({
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
  maxWidth: "400px",
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

const SignInButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: "#fff",
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
  transition: "background 0.3s ease-in-out",
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(1),
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  fontSize: "1.5rem", // Larger icon size
}));

const SignInPage = () => {
  return (
    <SignInContainer>
      <FormBox>
        <Title variant="h5">Shree Ram Charit Manas Seva Sansthan</Title>
        <Typography variant="h6" align="center" gutterBottom>
          Sign In
        </Typography>
        <TextField
          fullWidth
          label="Email"
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
        <SignInButton fullWidth variant="contained" size="large" sx={{ mt: 2 }}>
          Sign In
        </SignInButton>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2">or sign in with</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <SocialButton>
              <GoogleIcon />
            </SocialButton>
            <SocialButton>
              <FacebookIcon />
            </SocialButton>
            <SocialButton>
              <TwitterIcon />
            </SocialButton>
            <SocialButton>
              <InstagramIcon />
            </SocialButton>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }}>Don't have an account?</Divider>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          size="large"
          component={Link}
          to="/signuppage" // Link to Sign Up page
        >
          Sign Up
        </Button>
      </FormBox>
    </SignInContainer>
  );
};

export default SignInPage;
