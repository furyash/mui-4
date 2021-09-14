import {
  Button,
  ButtonGroup,
  ListItem,
  ListItemText,
  Paper,
  ThemeProvider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  selector: {
    borderRight: "4px solid rgb(178, 0, 54)",
    backgroundColor: "rgba(25, 32, 43, 0.596)",
    color: "white",
    flexGrow: 1,
  },
  incrementor: {
    //border: "1px solid white",
    marginLeft: 15,
    backgroundColor: "inherit",
    color: "white",
  },
  hide: { display: "none" },
  incrementorOpen: {
    transition: theme.transitions.create(["all"], {
      easing: theme.transitions.easing.easeOut,
      duration: "500ms",
    }),
  },
  incrementorClose: {
    transition: theme.transitions.create(["all"], {
      easing: theme.transitions.easing.sharp,
      duration: "500ms",
    }),
  },
}));

function ItemSelector(props) {
  const classes = useStyles();
  const { itemId, label, textTheme, orderQuantity, incrementor, decrementor } =
    props;

  let counter = orderQuantity;

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <ListItem>
        <Paper
          elevation={3}
          className={clsx(classes.selector, classes.incrementorOpen, {
            [classes.incrementorClose]: !counter,
          })}
        >
          <ListItem button onClick={incrementor}>
            <ListItemText>
              <ThemeProvider theme={textTheme}>
                <Typography style={{ textAlign: "right" }} variant="h5">
                  {label}
                </Typography>
              </ThemeProvider>
            </ListItemText>
          </ListItem>
        </Paper>
        <div
          className={clsx(classes.incrementor, { [classes.hide]: !counter })}
        >
          <ButtonGroup variant="contained" color="secondary" size="small">
            <Button onClick={incrementor}>
              <ThemeProvider theme={textTheme}>
                <Typography variant="h6">-</Typography>
              </ThemeProvider>
            </Button>
            <Button disabled>
              <ThemeProvider theme={textTheme}>
                <Typography variant="h6" style={{ color: "#f50057" }}>
                  {counter}
                </Typography>
              </ThemeProvider>
            </Button>
            <Button onClick={decrementor}>
              <ThemeProvider theme={textTheme}>
                <Typography variant="h6">+</Typography>
              </ThemeProvider>
            </Button>
          </ButtonGroup>
        </div>
      </ListItem>
    </div>
  );
}

export default ItemSelector;
