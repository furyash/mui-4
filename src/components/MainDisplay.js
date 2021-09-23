import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Image from "../img/mainBack.jpg";
import MenuContent from "./MenuContent";
import SideNav from "./SideNav";

import MenuContext from "../store/menuContext";
import OrderContent from "./OrderContent";

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
      marginLeft: drawerWidth - 10, //  transition glitch needs to be fixed (remove -50)
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.easeOut,
        duration: "150ms",
      }),
    },
  },
  drawerClose: {
    [theme.breakpoints.up("sm")]: {
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: "150ms",
      }),
    },
  },
}));

function MainDisplay(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [mainMenu, setMainMenu] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  let menuSet = React.useContext(MenuContext);

  React.useEffect(() => {
    if (menuSet && menuSet.menu) {
      setMainMenu(menuSet.menu);
      setIsLoading(false);
    }
  }, [menuSet]);

  if (isLoading) {
    return (
      <div style={{ color: "white" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

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
      <Switch>
        {mainMenu.map((menu) => {
          if (menu.id !== 7)
            return (
              <Route path={menu.path} exact>
                <MenuContent menuId={menu.id} />
              </Route>
            );
          else
            return (
              <Route path={menu.path} exact>
                <OrderContent />
              </Route>
            );
        })}
        {/* <Route path="/order" exact>
          <MainContent menuId={1} />
        </Route> */}
      </Switch>
    </Box>
  );
}

export default MainDisplay;
