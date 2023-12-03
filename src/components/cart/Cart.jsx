import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import getCartItems from "../hooks/cartItems";

const CartItem = ({ id, value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={() => increment(id)}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  // const [cartItems, setCartItems] = useState(getCartItems);

  const increment = (itemId) => {
    // const updatedCartItems = cartItems.map((item) =>
    //   item.id === itemId ? { ...item, value: item.value + 1 } : item
    // );
    // setCartItems(updatedCartItems);
    dispatch(addToCart({ id: itemId }));
  };

  const decrement = (itemId) => {
    // const updatedCartItems = cartItems.map((item) =>
    //   item.id === itemId && item.value > 0
    //     ? { ...item, value: item.value - 1 }
    //     : item
    // );
    // setCartItems(updatedCartItems);
    dispatch(removeFromCart({ id: itemId }));
  };

  const calculateSubtotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
  };
  const calculateTax = () => calculateSubtotalAmount() * 0.18;
  const shippingCharge = 200;
  const totalAmount = () =>
    calculateSubtotalAmount() + calculateTax() + shippingCharge;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="cart">
      {Object.keys(cartItems).length > 0 ? (
        <main>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              value={item.value}
              img={item.img}
              increment={increment}
              decrement={decrement}
            />
          ))}
          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{calculateSubtotalAmount()}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹{calculateTax()}</p>
            </div>
            <div>
              <h4>Shipping Charges</h4>
              <p>₹{shippingCharge}</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>₹{totalAmount()}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        </main>
      ) : (
        <div className="empty-cart-card">
          <p>Your Cart is empty.</p>
        </div>
      )}
    </section>
  );
};

export default Cart;
