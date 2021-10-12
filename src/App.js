import React from "react";
import MainDisplay from "./components/MainDisplay";
//import { MenuContextProvider } from "./store/menuContext";
import { OrderContextProvider } from "./store/orderContext";
import MenuContext from "./store/menuContext";
//import data from "./store/mui-4-data.json"; //Used in place of firebase

function App() {
  const menuSet = React.useContext(MenuContext);

  const [menu, setMenu] = React.useState([]);
  const [subMenu, setSubMenu] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/allItems.json")
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
      });
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/subMenu.json")
      .then((response) => response.json())
      .then((data) => {
        setSubMenu(data);
      });
    fetch("https://mui-4-f408f-default-rtdb.firebaseio.com/mainMenu.json")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      });
    // setAllItems(data.allItems);
    // setSubMenu(data.subMenu);
    // setMenu(data.mainMenu);
  }, []);

  React.useEffect(() => {
    if (menu.length && subMenu.length && allItems.length) {
      menuSet.setMenuSet(menu, subMenu, allItems);
      setIsLoading(false);
    }
  }, [menu, subMenu, allItems]);

  if (isLoading) {
    return (
      <div style={{ color: "white" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <OrderContextProvider>
      <MainDisplay />
    </OrderContextProvider>
  );
}

export default App;
