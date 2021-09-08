import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import Image from "../img/mainBack.jpg";
import MainContent from "./MainContent";
import SideNav from "./SideNav";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  drawerOpen: {
    [theme.breakpoints.up("sm")]: {
      //width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth - 5, //  transition glitch needs to be fixed (remove -50)
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  drawerClose: {
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
}));

function MainDisplay(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function transit() {
    setOpen(!open);
  }

  return (
    <Box
      className={clsx(classes.background, classes.drawerClose, {
        [classes.drawerOpen]: open,
      })}
    >
      <SideNav transition={transit} />
      <MainContent />
    </Box>
  );
}

export default MainDisplay;
