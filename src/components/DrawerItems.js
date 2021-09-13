import React from "react";
import {
  Toolbar,
  Divider,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ListIcon from "@material-ui/icons/List";
import FastForwardIcon from "@material-ui/icons/FastForward";
import CreateIcon from "@material-ui/icons/Create";
import PlaceIcon from "@material-ui/icons/Place";
import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import StarIcon from "@material-ui/icons/Star";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function DrawerItems(props) {
  let menuColor = "rgb(178, 0, 54)";
  const [mainMenu, setMainMenu] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/mainMenu.json")
      .then((response) => response.json())
      .then((data) => {
        setMainMenu(data);
      });
  }, []);

  const handleRoute = (ev) => {
    mainMenu.map((menu) => {
      if (menu.name === ev.target.innerHTML) {
        history.push(menu.path);
      }
    });
  };

  return (
    <div>
      <Toolbar>
        <IconButton onClick={props.menuToggle} edge="start" color="inherit">
          <ArrowBackIosIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <FastForwardIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Quick Items" />
        </ListItem>
        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <CreateIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Order Items" />
        </ListItem>
        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <ListIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Full Menu" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <HourglassFullIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Breakfast / Launch" />
        </ListItem>
        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <StarIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Snacks Only" />
        </ListItem>

        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <PlaceIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Continental Menu" />
        </ListItem>
        <ListItem button onClick={handleRoute}>
          <ListItemIcon>
            <LocalBarIcon style={{ color: menuColor }} />
          </ListItemIcon>
          <ListItemText primary="Desert and Beverages" />
        </ListItem>
      </List>
    </div>
  );
}

export default DrawerItems;
