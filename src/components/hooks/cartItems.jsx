const getCartItems = () => {
  const savedCartItems = localStorage.getItem("cartItems");
  const addedCartItems = JSON.parse(savedCartItems);
  return addedCartItems;
};

// const getOrderDetails = () => {
//   const savedOrderDetails = localStorage.getItem("orderDetails");
//   const orderDetails = JSON.parse(savedOrderDetails);
//   return orderDetails;
// };

const calculateSubtotalAmount = () => {
  return getCartItems().reduce(
    (total, item) => total + item.value * item.price,
    0
  );
};
const calculateTax = () => calculateSubtotalAmount() * 0.18;
const shippingCharge = 200;
const totalAmount = () =>
  calculateSubtotalAmount() + calculateTax() + shippingCharge;

export default getCartItems;
export { totalAmount };
