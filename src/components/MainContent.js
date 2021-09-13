import React from "react";
import {
  Box,
  Grid,
  Typography,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Divider,
} from "@material-ui/core";
import ItemSelector from "./ItemSelector";
import OrderContext from "../store/orderContext";

// database : https://mui-4-f408f-default-rtdb.firebaseio.com/allItems

function MainContent(props) {
  //const menuStyle = { color: "white" };
  const [subMenu, setSubMenu] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);

  const orderItems = React.useContext(OrderContext);
  const idList = orderItems.items;

  const getQuantity = (id) => {
    return idList.find((item) => {
      if (item.id === id) return item.quantity;
      else return 0;
    });
  };

  React.useEffect(() => {
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/allItems.json")
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
      });
  }, []);

  React.useEffect(() => {
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/subMenu.json")
      .then((response) => response.json())
      .then((data) => {
        setSubMenu(data);
      });
  }, []);

  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

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
        {subMenu.map((subMenuItem) => {
          var menuFound = subMenuItem["menu-id"].find(
            (menuId) => menuId === props.menuId
          ); //Using 1 for showing Quick Items Menu
          if (menuFound) {
            return (
              <Grid
                container
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={6}>
                  {/* There is a glitch on wrapping, press sidebarmenu fixes it*/}
                  <ThemeProvider theme={fontTheme}>
                    <Typography
                      style={{
                        textAlign: "center",
                        marginRight: 20,
                        textShadow: "3px 3px 5px #f50057",
                      }}
                      variant="h2"
                    >
                      {subMenuItem.name}
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  {allItems.map((item) => {
                    var itemFound = item["submenu-id"].find(
                      (subMenuId) => subMenuId === subMenuItem.id
                    );
                    if (itemFound)
                      return (
                        <ItemSelector
                          itemId={item.id}
                          label={item.name}
                          textTheme={fontTheme}
                          orderQuantity={getQuantity(item.id)}
                          incrementor={orderItems.increaseQuantity(item.id)}
                          decrementor={orderItems.decreaseQuantity(item.id)}
                        />
                      );
                    return null;
                  })}
                  <Divider
                    variant="middle"
                    style={{ border: "1px solid #f50057", marginBottom: 20 }}
                  />
                </Grid>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  );
}

export default MainContent;
