import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1e1e1e",
        color: "white",
        textAlign: "center",
        padding: "10px",
        bottom: 0,
        left: 0,
        width: "100%",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} PDF Compare App | Built with Django + React
      </Typography>
    </Box>
  );
}
