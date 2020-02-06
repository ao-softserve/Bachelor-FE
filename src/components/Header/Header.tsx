import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export const Header: React.FC = () => {
  const menuButton = (
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  );

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {menuButton}
        <Typography variant="h6">Symulacja Frontend</Typography>
      </Toolbar>
    </AppBar>
  );
};
