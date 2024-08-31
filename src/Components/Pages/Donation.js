import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Scanner from "../Image/Sacanner.png";
import Donation from "../Image/DonateImage.jpg";
import Header from "../Header";
import Footer from "../Footer/Footer";

// Styled components for various elements
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

const WebcamContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(2),
  border: `2px solid ${theme.palette?.primary?.main || "#1976d2"}`, // Fallback color
  padding: theme.spacing(2),
  borderRadius: theme.shape?.borderRadius || 4, // Fallback radius
  boxShadow: theme.shadows
    ? theme.shadows[5]
    : "0px 4px 6px rgba(0, 0, 0, 0.1)", // Fallback shadow
}));

const CaptureButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette?.primary?.main || "#1976d2", // Fallback color
  color: theme.palette?.common?.white || "#fff", // Fallback color
  "&:hover": {
    backgroundColor: theme.palette?.primary?.dark || "#1565c0", // Fallback color
  },
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  color: theme.palette?.primary?.main || "#1976d2", // Fallback color
  textAlign: "center",
  marginTop: theme.spacing(2),
}));

// Styles for the animated and colorful card
const StyledCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${
    theme.palette?.primary?.light || "#42a5f5"
  }, ${theme.palette?.primary?.dark || "#1565c0"})`, // Fallback gradient colors
  color: "#fff",
  borderRadius: "15px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: `radial-gradient(circle, rgba(255,255,255,0.1), transparent 40%)`,
    transform: "rotate(30deg)",
    transition: "0.5s",
  },
  "&:hover::before": {
    transform: "rotate(50deg)",
  },
  transition: "0.3s ease",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  "& img": {
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  "& h5, & p": {
    color: "#fff",
  },
}));

const DonationPage = () => {
  const [showWebcam, setShowWebcam] = useState(false);
  const [liveImage, setLiveImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [file, setFile] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    setShowWebcam(true);
  };

  const handleSaveImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setLiveImage(imageSrc);
    setShowWebcam(false);
  };

  const handleCancelCapture = () => {
    setShowWebcam(false);
    setLiveImage(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));
    setUploadedImage(file);
  };

  const handleCancelUpload = () => {
    setFile(null);
    setUploadedImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, including uploaded image if necessary
  };

  return (
    <>
      <Header />
      {/* Header Section with Image */}
      <Box sx={{ marginTop: 8 }}>
        <HeaderImage src={Donation} alt="Donation Header" />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* Donation Form */}
          <Card>
            <CardContent>
              <StyledTypography variant="h4" gutterBottom>
                Donation Form
              </StyledTypography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {[
                    "Name",
                    "Age",
                    "Father's Name",
                    "Ward No/Mohalla/Panchayat",
                    "Address",
                    "Phone No",
                    "Blood Group",
                  ].map((label, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <FormControlStyled fullWidth>
                        <InputLabel>{label}</InputLabel>
                        <Input type={label === "Age" ? "number" : "text"} />
                        <FormHelperText />
                      </FormControlStyled>
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <FormControlStyled fullWidth>
                      <Typography variant="h6">
                        Upload Voter ID/Aadhaar Card
                      </Typography>
                      <Input
                        type="file"
                        onChange={handleFileChange}
                        inputProps={{ accept: "image/*" }} // Allow only images
                      />
                      {file && (
                        <>
                          <img
                            src={file}
                            alt="Uploaded Document"
                            style={{
                              width: "100%",
                              marginTop: 8,
                              borderRadius: 4,
                            }}
                          />
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={handleCancelUpload}
                            style={{ marginTop: 8 }}
                          >
                            Cancel
                          </Button>
                        </>
                      )}
                    </FormControlStyled>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlStyled fullWidth>
                      <Typography variant="h6">Capture Live Image</Typography>
                      {showWebcam ? (
                        <WebcamContainer>
                          <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width="100%"
                            height="400px"
                          />
                          <CaptureButton
                            variant="contained"
                            color="primary"
                            onClick={handleSaveImage}
                          >
                            Save Image
                          </CaptureButton>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={handleCancelCapture}
                            style={{ marginTop: 8 }}
                          >
                            Cancel
                          </Button>
                        </WebcamContainer>
                      ) : (
                        <StyledButton
                          variant="contained"
                          onClick={handleCapture}
                        >
                          Open Camera
                        </StyledButton>
                      )}
                      {liveImage && (
                        <img
                          src={liveImage}
                          alt="Live Capture"
                          style={{
                            width: "100%",
                            marginTop: 8,
                            borderRadius: 4,
                          }}
                        />
                      )}
                    </FormControlStyled>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlStyled fullWidth>
                      <InputLabel>Reference No/Transaction No</InputLabel>
                      <Input type="text" />
                    </FormControlStyled>
                  </Grid>
                  <Grid item xs={12}>
                    <StyledButton type="submit" variant="contained" fullWidth>
                      Submit
                    </StyledButton>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Stylish Bank Account Details Card */}
          <StyledCard>
            <StyledCardContent>
              <img
                src={Scanner}
                alt="Scanner"
                style={{ width: "100%", marginTop: 16, borderRadius: 4 }}
              />
              <Typography variant="h5" gutterBottom>
                Bank Account Details
              </Typography>
              <Typography variant="body1">
                <strong>Bank Name:</strong> Indian Bank
              </Typography>
              <Typography variant="body1">
                <strong>Branch:</strong> Ayodhya
              </Typography>
              <Typography variant="body1">
                <strong>Account Name:</strong> XXXXXXXX
              </Typography>
              <Typography variant="body1">
                <strong>Account No:</strong> 1234567890
              </Typography>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default DonationPage;
