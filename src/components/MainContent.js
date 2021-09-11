import React from "react";
import {
  Box,
  Grid,
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

function MainContent(props) {
  const menuStyle = { color: "white" };

  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  const menuItems = [
    "Quick Items",
    "Order Items",
    "Full Menu",
    "Quantity Items",
    "Quality Items",
    "Menu by Time",
    "Menu by Olace",
    "Desert and Beverages",
  ];

  return (
    <Box
      sx={{
        color: "white",
        ml: 1,
        p: 3,
        border: "1px solid white",
        maxHeight: "80vh",
        overflow: "auto",
        scrollbarWidth: "none",
        float: "right", // Added Leftside Gap of Cuisine Title
      }}
    >
      <Grid container direction="column">
        <Grid container justifyContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} md={6} wrap="nowrap">
            <ThemeProvider theme={fontTheme}>
              <Typography variant="h1">Continental Cuisine</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {menuItems.map((item) => {
                return <ListItem button></ListItem>;
              })}
            </List>
            <List>
              {menuItems.map((item) => {
                return <ListItem button></ListItem>;
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
                return <ListItem button></ListItem>;
              })}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
