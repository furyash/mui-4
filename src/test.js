import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";

export default function App() {
  return (
    <Box style={{ border: "1px solid white", color: "white" }}>
      <Grid container direction="row">
        <Box
          style={{
            border: "1px solid white",
            color: "white",
            maxHeight: "80vh",
            overflow: "auto",
            flexFlow: "column",
          }}
          order={{ xs: 2 }}
        >
          <Grid item xs={6}>
            <ul>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
              <li>Menu Item</li>
            </ul>
          </Grid>
        </Box>

        <Box
          order={{ xs: 1 }}
          style={{
            maxHeight: "10vh",
            border: "1px solid white",
            color: "white",
          }}
        >
          <Grid item xs={6}>
            <h2>Order Items</h2>
          </Grid>
        </Box>

        <Box
          order={{ xs: 1 }}
          style={{
            maxHeight: "10vh",
            border: "1px solid white",
            color: "white",
          }}
        >
          <Grid item xs={6}>
            <h2>Place Order</h2>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
