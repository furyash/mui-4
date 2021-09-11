import {
  ButtonGroup,
  ListItem,
  ListItemText,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";

function ItemSelector(props) {
  const { key, label, textTheme } = props;
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Paper
        elevation={3}
        style={{
          borderRight: "4px solid rgb(178, 0, 54)",

          //borderLeft: "1px solid rgb(178, 0, 54)",
          backgroundColor: "rgba(25, 32, 43, 0.596)",
          color: "white",
        }}
      >
        <ListItem button onClick>
          <ListItemText style={{ textAlign: "right", margin: 0, padding: 0 }}>
            <ThemeProvider theme={textTheme}>
              <Typography variant="h4">{label}</Typography>
            </ThemeProvider>
          </ListItemText>
        </ListItem>
      </Paper>
      <ButtonGroup></ButtonGroup>
    </div>
  );
}

export default ItemSelector;
