// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
// import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import DropdownMenu from "./DropdownMenu";

const Header = ({ isAuthenticated = false }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartItems = cartItems ? cartItems.length : 0;
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          {/* <span id="cartTotalItems" className="cart-item-count"></span> */}
          {totalCartItems > 0 && (
            <span id="cartTotalItems" className="cart-item-count">
              {totalCartItems}
            </span>
          )}

          <FiShoppingCart />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};
export default Header;
