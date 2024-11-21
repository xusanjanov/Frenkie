import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 2,
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2">
        © 2024 Namoz Vaqtlari. Barcha huquqlar himoyalangan.
      </Typography>
    </Box>
  );
};

export default Footer;
