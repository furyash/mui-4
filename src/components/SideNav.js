import {
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  //  Box,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import NavBar from "./NavBar";
import DrawerItems from "./DrawerItems";

const useStyles = makeStyles((themes) => ({
  msr: {
    width: 240,
    backgroundColor: "rgb(25, 32, 43)",
    color: "rgb(255, 220, 231)",
  },
}));

function SideNav() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawer = (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{ paper: classes.msr }}
    >
      <Toolbar>
        <IconButton onClick={toggleDrawer} edge="start" color="inherit">
          <ArrowBackIosIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <DrawerItems />
    </Drawer>
  );

  return (
    <div>
      <NavBar onTap={toggleDrawer} open={open} setColor="secondary" />

      {drawer}
    </div>
  );
}

export default SideNav;
