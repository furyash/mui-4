import React from "react";
import clsx from "clsx";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import FastForwardIcon from "@material-ui/icons/FastForward";
import ItemSelector from "./ItemSelector";

function MainContent(props) {
  const menuStyle = { color: "white" };

  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  const setMenuItems = (icon, label) => {
    return { icon: icon, label: label };
  };

  const menuItems = [
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Quick Items"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Order Items"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Full Menu"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Quantity Items"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Quality Items"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Menu by Time"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Menu by Place"),
    setMenuItems(<FastForwardIcon style={menuStyle} />, "Desert and Beverages"),
  ];

  return (
    <Box
      sx={{
        color: "white",
        ml: 2,
        p: 3,
        border: "1px solid white",
        maxHeight: "80vh",
        overflow: "auto",
        scrollbarWidth: "none",
        //float: "right", // Added Leftside Gap of Cuisine Title
      }}
    >
      <Grid container direction="column">
        <Grid container justifyContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} md={6} wrap="nowrap">
            {/* There is a glitch on wrapping, press sidebarmenu fixes it*/}
            <ThemeProvider theme={fontTheme}>
              <Typography variant="h1">Continental Cuisine</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {menuItems.map((item) => {
                return (
                  <ItemSelector label={item.label} textTheme={fontTheme} />
                );
              })}
            </List>
            <List>
              {menuItems.map((item) => {
                return (
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} wrap="nowrap">
            <ThemeProvider theme={fontTheme}>
              <Typography variant="h1">Continental Cuisine</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {menuItems.map((item) => {
                return (
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
