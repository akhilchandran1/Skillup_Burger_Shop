// Write all the code here
import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCartHandler = (itemNum, burgerSrc, price, title) => {
    if (cartItems && cartItems.some((cartItem) => cartItem.id === itemNum)) {
      setCartItems((cartItems) =>
        cartItems.map((cartItem) =>
          cartItem.id === itemNum
            ? { ...cartItem, value: cartItem.value + 1 }
            : cartItem
        )
      );
    } else {
      const newItem = {
        id: itemNum,
        title: title,
        img: burgerSrc,
        price: price,
        value: 1,
      };
      setCartItems((currentItems) => [...currentItems, newItem]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const totalItems = Object.keys(cartItems).length;
    const cartCount = document.getElementById("cartTotalItems");
    if (totalItems > 0) {
      cartCount.innerHTML = totalItems;
      cartCount.classList.add("cart-item-count");
    }
  }, [cartItems]);

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Double Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Classic Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1500}
          title="Cheese & Bacon Burger"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
