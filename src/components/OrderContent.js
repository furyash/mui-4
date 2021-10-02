import React from "react";
import {
  Box,
  Grid,
  Typography,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Divider,
  Button,
} from "@material-ui/core";
import ItemSelector from "./ItemSelector";
import MenuContext from "../store/menuContext";
import OrderContext from "../store/orderContext";
import { useHistory } from "react-router-dom";

function OrderContent(props) {
  //const menuStyle = { color: "white" };
  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);
  const history = useHistory();

  const menuItemList = React.useContext(MenuContext).allItems;
  const order = React.useContext(OrderContext);
  const orderItemList = order.items;

  const [menuItems, setMenuItems] = React.useState([]);
  const [orderItems, setOrderItems] = React.useState([]);
  let total = 0;

  const [isLoading, setIsLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    if (menuItemList && orderItemList) {
      setMenuItems(menuItemList);
      setOrderItems(orderItemList);
      setIsLoading(false);
    }
  }, [menuItemList, orderItemList]);

  if (isLoading) {
    return (
      <div style={{ color: "white" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  let getQuantity = (id) => {
    if (orderItems) {
      let getIndex = orderItems.findIndex((item) => item.id === id);
      if (getIndex >= 0) return orderItems[getIndex].quantity;
      else return 0;
    }
    return 0;
  };

  let getTotal = () => {
    orderItems.map((item) => {
      total += menuItems[item.id - 1].price * item.quantity;
    });
    return total;
  };

  const placeOrder = () => {
    order.reset();
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderItems),
    });
    history.push("/");
  };

  return (
    <Box
      sx={{
        color: "white",
        ml: 2,
        p: 3,
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          container
          direction="column"
          spacing={4}
          item
          xs={12}
          md={6}
          lg={5}
        >
          <Grid item>
            <Box style={{ height: "50vh" }}>
              <ThemeProvider theme={fontTheme}>
                <Typography
                  style={{
                    textAlign: "center",
                    marginRight: 20,
                    textShadow: "3px 3px 5px #f50057",
                  }}
                  variant="h2"
                >
                  Order Items
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
          <Box
            style={{
              padding: 15,
              paddingLeft: 20,
              backgroundColor: "rgba(25, 32, 43, 0.596)",
            }}
          >
            <Grid item>
              <ThemeProvider theme={fontTheme}>
                <Typography
                  style={{
                    textAlign: "left",
                    textShadow: "3px 3px 5px #f50057",
                  }}
                  variant="h4"
                >
                  Total Price (Rs.)
                </Typography>
                <Typography
                  style={{
                    color: "#f50057",
                    textAlign: "left",
                    marginRight: 20,
                  }}
                  variant="h3"
                >
                  {getTotal()}
                </Typography>
              </ThemeProvider>
            </Grid>
          </Box>
          <Grid>
            <Button variant="contained" color="secondary" onClick={placeOrder}>
              <ThemeProvider theme={fontTheme}>
                <Typography
                  style={{
                    textTransform: "capitalize",
                  }}
                  variant="h4"
                >
                  Place Order
                </Typography>
              </ThemeProvider>
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <Box
            style={{
              maxHeight: "80vh",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          >
            {orderItems.map((orderItem) => {
              return (
                <ItemSelector
                  key=""
                  label={menuItems[orderItem.id - 1].name}
                  textTheme={fontTheme}
                  orderQuantity={getQuantity(orderItem.id)}
                  incrementor={() => {
                    order.increaseQuantity(orderItem.id);
                    setRefresh(!refresh);
                  }}
                  decrementor={() => {
                    order.decreaseQuantity(orderItem.id);
                    setRefresh(!refresh);
                  }}
                />
              );
            })}

            <Divider
              variant="middle"
              style={{ border: "1px solid #f50057", marginBottom: 20 }}

              // Show items with 0 quantity HERE below divider
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderContent;
