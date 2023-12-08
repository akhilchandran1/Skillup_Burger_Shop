import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  const [addToCartClick, setAddToCartClick] = useState(false);

  const addToCartHandler = async () => {
    await handler(itemNum, burgerSrc, price, title);
    setAddToCartClick(true);
    setTimeout(() => setAddToCartClick(false), 1000);
  };

  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>
        <button onClick={addToCartHandler}>Buy Now</button>
        {addToCartClick && (
          <div
            style={{
              color: "red",
              position: "fixed",
              top: "90%",
              left: "30%",
              transform: "translate(0%,-500%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Added to cart!
          </div>
        )}
      </main>
    </motion.div>
  );
};

export default MenuCard;
