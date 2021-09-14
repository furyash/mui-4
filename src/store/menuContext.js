import React from "react";

const MenuContext = React.createContext({
  menu: [],
  subMenu: [],
  allItems: [],
  setMenuSet: (menu, subMenu, items) => {},
});

export function MenuContextProvider(props) {
  const [importedMenuSet, setImportedMenuSet] = React.useState([]);

  const setMenuSetHandler = (menu, subMenu, items) =>
    setImportedMenuSet([menu, subMenu, items]);
  const context = {
    menu: importedMenuSet[0],
    subMenu: importedMenuSet[1],
    allItems: importedMenuSet[2],
    setMenuSet: setMenuSetHandler,
  };

  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
