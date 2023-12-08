// Write all the code here
import React from "react";
import { useDispatch } from "react-redux";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger_double-cheese.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { addToCart } from "../../redux/cartSlice";

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum, burgerSrc, price, title) => {
    const newItem = {
      id: itemNum,
      title: title,
      img: burgerSrc,
      price: price,
    };
    dispatch(addToCart(newItem));
  };

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={500}
          title="Veg Cheese Burge"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={1500}
          title="Cheese Burger
          with French Fries"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
