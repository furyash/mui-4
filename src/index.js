import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { OrderContextProvider } from "./store/orderContext";

ReactDOM.render(
  <OrderContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OrderContextProvider>,
  document.getElementById("root")
);
