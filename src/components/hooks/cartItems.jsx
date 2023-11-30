// import { useState } from "react";

// import { useState } from "react";

// const CartItems = () => {
//   const [cartItems, setCartItems] = useState([]);
//   return [cartItems, setCartItems];
// };

// export default CartItems;

const getCartItems = () => {
  const savedCartItems = localStorage.getItem("cartItems");
  const addedCartItems = JSON.parse(savedCartItems);
  // console.log(addedCartItems);
  return addedCartItems;
};

export default getCartItems;
