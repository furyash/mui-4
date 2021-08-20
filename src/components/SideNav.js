import { Drawer, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import NavBar from "./NavBar";

function SideNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    if (open === true) setOpen(false);
    else setOpen(true);
  };

  return (
    <div>
      <NavBar onTap={toggleDrawer} open={open} setColor="secondary" />

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{ width: "100%", maxWidth: "200px" }}
      >
        <IconButton onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
        hello
      </Drawer>
    </div>
  );
}

export default SideNav;
