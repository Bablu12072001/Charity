import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import image from "./Image/logo.jpg";

// Custom Button with underline hover effect
const CustomLinkButton = styled(Button)(({ theme }) => ({
  color: "black",
  textDecoration: "none",
  position: "relative",
  padding: "10px 0",
  margin: "0 8px",
  fontWeight: "bold",
  textTransform: "none",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: theme.palette.primary.main,
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
    transformOrigin: "bottom right",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderRadius: "20px",
  padding: "8px 16px",
  margin: "0 8px",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "scale(1.05)",
  },
  // Adjust button size based on screen size
  [theme.breakpoints.down("sm")]: {
    padding: "6px 12px", // Smaller padding for small screens
    fontSize: "0.75rem", // Smaller font size for small screens
  },
  [theme.breakpoints.up("md")]: {
    padding: "8px 16px", // Original padding for medium and up screens
    fontSize: "0.875rem", // Original font size for medium and up screens
  },
}));

const AnimatedBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  position: "relative",
  padding: "8px",
  background: theme.palette.background.paper,
  borderRadius: "8px",
  //   boxShadow: `0 4px 8px ${theme.palette.grey[300]}`,
  overflow: "hidden",
  animation: "fadeIn 1s ease-in-out",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: theme.palette.primary.main,
    opacity: 0.1,
    transition: "opacity 0.3s ease",
  },
  "&:hover::before": {
    opacity: 0.3,
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color: theme.palette.text.primary,
  fontWeight: "bold",
  fontSize: "1.2rem",
  textAlign: "center",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  // Adjust font size based on screen size
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // Smaller font size for small screens
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem", // Larger font size for medium and up screens
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <AnimatedBox>
          {/* <img src={image} alt="logo" height={80} width={130} /> */}
          <StyledTypography variant="h6" sx={{ font: "bold" }}>
            Shree Ram Charit Manas Seva Sansthan
          </StyledTypography>
        </AnimatedBox>

        {!isMobile ? (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <CustomLinkButton component={Link} to="/">
              Home
            </CustomLinkButton>
            <CustomLinkButton component={Link} to="/about">
              About Us
            </CustomLinkButton>
            <CustomLinkButton component={Link} to="/news">
              News & Events
            </CustomLinkButton>
            <CustomLinkButton component={Link} to="/team">
              Our Team
            </CustomLinkButton>
            <CustomLinkButton component={Link} to="/contact">
              Contact Us
            </CustomLinkButton>
          </Box>
        ) : (
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About Us
            </MenuItem>
            <MenuItem component={Link} to="/news" onClick={handleMenuClose}>
              News & Events
            </MenuItem>
            <MenuItem component={Link} to="/team" onClick={handleMenuClose}>
              Our Team
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
              Contact Us
            </MenuItem>
          </Menu>
        )}

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomButton
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
          >
            Sign In
          </CustomButton>
          <CustomButton
            variant="contained"
            color="secondary"
            component={Link}
            to="/donation"
          >
            Donate
          </CustomButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
