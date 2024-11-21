import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Namoz Vaqtlari
        </Typography>
        <Button color="inherit">Bosh sahifa</Button>
        <Button color="inherit">Biz haqimizda</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
