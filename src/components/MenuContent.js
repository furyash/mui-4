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
import MenuContext from "../store/menuContext";
import OrderContext from "../store/orderContext";

function MenuContent(props) {
  //const menuStyle = { color: "white" };
  let fontTheme = createTheme();
  fontTheme = responsiveFontSizes(fontTheme);

  const menuSet = React.useContext(MenuContext);
  const orderItems = React.useContext(OrderContext);
  const itemList = orderItems.items;

  const [subMenu, setSubMenu] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //const [refresh, setRefresh] = React.useState(true);

  React.useEffect(() => {
    if (menuSet && menuSet.menu) {
      setSubMenu(menuSet.subMenu);
      setAllItems(menuSet.allItems);
      setIsLoading(false);
    }
  }, [menuSet]);

  if (isLoading) {
    return (
      <div style={{ color: "white" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  let getQuantity = (id) => {
    if (itemList) {
      let getIndex = itemList.findIndex((item) => item.id === id);
      if (getIndex >= 0) return itemList[getIndex].quantity;
      else return 0;
    }
    return 0;
  };

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
              <Grid container justifyContent="center">
                <Grid item xs={12} md={6} lg={5}>
                  {/* There is a glitch on wrapping, press sidebarmenu fixes it*/}
                  <ThemeProvider theme={fontTheme}>
                    <Typography
                      style={{
                        textAlign: "center",
                        marginRight: 20,
                        textShadow: "3px 3px 5px #f50057",
                      }}
                      variant="h1"
                    >
                      {subMenuItem.name}
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={12} sm={10} md={6} lg={5}>
                  {allItems.map((item) => {
                    var itemFound = item["submenu-id"].find(
                      (subMenuId) => subMenuId === subMenuItem.id
                    );
                    if (itemFound)
                      return (
                        <ItemSelector
                          key={item.id}
                          label={item.name}
                          textTheme={fontTheme}
                          orderQuantity={getQuantity(item.id)}
                          incrementor={() => {
                            orderItems.increaseQuantity(item.id);
                            //setRefresh(!refresh);
                          }}
                          decrementor={() => {
                            orderItems.decreaseQuantity(item.id);
                            //setRefresh(!refresh);
                          }}
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

export default MenuContent;
