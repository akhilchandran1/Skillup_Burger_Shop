import React, { useState } from "react";
import { Link } from "react-router-dom";
import getCartItems from "../hooks/cartItems";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartItems);
  const increment = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, value: item.value + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.value > 0
        ? { ...item, value: item.value - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateSubtotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
  };
  // console.log(`total cart items ${}`);
  return (
    <section className="cart">
      <main>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            value={item.value}
            img={item.img}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{calculateSubtotalAmount()}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{calculateSubtotalAmount() * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{calculateSubtotalAmount() * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
