import React from "react";
import MenuContext from "./store/menuContext";

export default function InnerInnerApp() {
  const menuSet = React.useContext(MenuContext);
  return <div> hello{console.log(menuSet.menu)}</div>;
}
