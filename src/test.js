import React from "react";
import InnerInnerApp from "./test2";
import MenuContext, { MenuContextProvider } from "./store/menuContext";

function App() {
  return (
    <MenuContextProvider>
      <InnerApp />
      <InnerInnerApp />
    </MenuContextProvider>
  );
}

export function InnerApp() {
  const menuSet = React.useContext(MenuContext);

  const [menu, setMenu] = React.useState([]);
  const [subMenu, setSubMenu] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);

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
  }, []);

  React.useEffect(() => {
    if (menu.length && subMenu.length && allItems.length)
      menuSet.setMenuSet(menu, subMenu, allItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu, subMenu, allItems]);

  return <div />;
}

export default App;
