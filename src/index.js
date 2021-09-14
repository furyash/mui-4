import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MenuContextProvider } from "./store/menuContext";

ReactDOM.render(
  <MenuContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MenuContextProvider>,
  document.getElementById("root")
);
