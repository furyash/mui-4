import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import ItemSelector from "./ItemSelector";

function MainContent(props) {
  //const menuStyle = { color: "white" };

  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  const menuItems = [
    "Quick Items",
    "Order Items",
    "Full Menu",
    "Quantity Items",
    "Quality Items",
    "Menu by Time",
    "Menu by Place",
    "Desert and Beverages",
  ];

  return (
    <Box
      sx={{
        color: "white",
        ml: 2,
        p: 3,
        //border: "1px solid white",
        maxHeight: "80vh",
        overflow: "auto",
        scrollbarWidth: "none",
        //float: "right", // Added Leftside Gap of Cuisine Title
      }}
    >
      <Grid container direction="column">
        <Grid container justifyContent="flex-start" alignItems="flex-start">
          <Grid item xs={12} md={6}>
            {/* There is a glitch on wrapping, press sidebarmenu fixes it*/}
            <ThemeProvider theme={fontTheme}>
              <Typography variant="h1">Continental Cuisine</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            {menuItems.map((item, index) => {
              return (
                <ItemSelector key={index} label={item} textTheme={fontTheme} />
              );
            })}
            <List>
              {menuItems.map((item, index) => {
                return <ListItem button>{item}</ListItem>;
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
              {menuItems.map((item, index) => {
                return <ListItem button>{item}</ListItem>;
              })}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
