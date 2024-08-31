// src/Components/Pages/FormBox.js
import React from "react";
import { Box } from "@mui/material";

const FormBox = ({ children, height, ...props }) => (
  <Box {...props} sx={{ padding: 3, borderRadius: 2, boxShadow: 1, height }}>
    {children}
  </Box>
);

export default FormBox;
