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

function MainContent(props) {
  const menuColor = "white";

  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  return (
    <Box
      sx={{
        color: "white",
        ml: 1,
        p: 3,
        border: "1px solid white",
        float: "right",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} wrap="nowrap">
          <ThemeProvider theme={fontTheme}>
            <Typography variant="h1">Continental Cuisine</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Quick Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Order Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Full Menu" />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Quantity Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Quality Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Menu by Time" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Menu by Place" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Desert and Beverages" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Quick Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Order Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Full Menu" />
            </ListItem>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Quantity Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Quality Items" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Menu by Time" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Menu by Place" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FastForwardIcon style={{ color: menuColor }} />
              </ListItemIcon>
              <ListItemText primary="Desert and Beverages" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
