import { Drawer, Hidden, makeStyles } from "@material-ui/core";
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

function SideNav(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpen(!open);
    props.transition();
  };

  return (
    <div>
      <NavBar onTap={toggleDrawer} open={open} setColor="secondary" />
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
          classes={{ paper: classes.msr }}
        >
          <DrawerItems menuToggle={toggleDrawer} />
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="persistent"
          open={open}
          classes={{ paper: classes.msr }}
        >
          <DrawerItems menuToggle={toggleDrawer} />
        </Drawer>
      </Hidden>
    </div>
  );
}

export default SideNav;
