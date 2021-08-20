import {
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Box,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import NavBar from "./NavBar";

const useStyles = makeStyles((themes) => ({
  msr: {
    width: 240,
  },
}));

function SideNav() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <NavBar onTap={toggleDrawer} open={open} setColor="secondary" />

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.msr }}
      >
        <Box
          sx={{
            backgroundColor: "rgb(150,0,0)",
            height: "100%",
            width: "100%",
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleDrawer} edge="start">
              <CloseIcon />
            </IconButton>
          </Toolbar>
          hello
        </Box>
      </Drawer>
    </div>
  );
}

export default SideNav;
