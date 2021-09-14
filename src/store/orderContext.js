import React, { createContext } from "react";

const OrderContext = createContext({
  items: [],
  increaseQuantity: (itemId) => {},
  decreaseQuantity: (itemId) => {},
});

export function OrderContextProvider(props) {
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    setOrderItems([{ id: 0, quantity: 0 }]);
  }, []);

  function incrementItemHandler(itemId) {
    setOrderItems((prevOrderItems) => {
      prevOrderItems.find((item, index) => {
        if (item.id === itemId) {
          prevOrderItems[index].quantity += 1;
          return prevOrderItems;
        } else {
          prevOrderItems.push({ id: itemId, quantity: 1 });
          return prevOrderItems;
        }
      });
    });
  }

  function decrementItemHandler(itemId) {
    setOrderItems((prevOrderItems) => {
      prevOrderItems.find((item, index) => {
        if (item.id === itemId) prevOrderItems[index].quantity -= 1;
        return prevOrderItems;
      });
    });
  }

  const context = {
    items: orderItems,
    increaseQuantity: incrementItemHandler,
    decreaseQuantity: decrementItemHandler,
  };

  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
