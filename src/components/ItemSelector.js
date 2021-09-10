import { ThemeProvider, Typography } from "@material-ui/core";
import React from "react";

function ItemSelector(props) {
  const { label, textTheme } = props;
  return (
    <div style={{ border: "1px solid white" }}>
      <ThemeProvider theme={textTheme}>
        <Typography variant="h3">{label}</Typography>
      </ThemeProvider>
    </div>
  );
}

export default ItemSelector;
