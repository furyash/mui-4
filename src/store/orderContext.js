import React, { createContext } from "react";

const OrderContext = createContext({
  items: [],
  increaseQuantity: (itemId) => {},
  decreaseQuantity: (itemId) => {},
  reset: () => {},
});

export function OrderContextProvider(props) {
  const [orderItems, setOrderItems] = React.useState([]);

  function incrementItemHandler(itemId) {
    setOrderItems((prevOrderItems) => {
      let getIndex = prevOrderItems.findIndex((item) => item.id === itemId);
      if (getIndex >= 0) {
        prevOrderItems[getIndex].quantity += 1;
        return prevOrderItems;
      } else {
        prevOrderItems.push({ id: itemId, quantity: 1 });
        return prevOrderItems;
      }
    });
  }

  function decrementItemHandler(itemId) {
    setOrderItems((prevOrderItems) => {
      let getIndex = prevOrderItems.findIndex((item) => item.id === itemId);
      if (getIndex >= 0) {
        prevOrderItems[getIndex].quantity -= 1;
        return prevOrderItems;
      }
    });
  }

  function resetHandler() {
    setOrderItems([]);
  }
  const context = {
    items: orderItems,
    increaseQuantity: incrementItemHandler,
    decreaseQuantity: decrementItemHandler,
    reset: resetHandler,
  };

  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
