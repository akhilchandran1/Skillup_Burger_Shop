// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
// import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
// import getCartItems from "../hooks/cartItems";

// const GetCartItems =()=>{
//   const [totalCartItems, setTotalCartItems] = useState(0);

//   useEffect(() => {
//     setTotalCartItems(Object.keys(getCartItems).length);
//   }, [getCartItems]);
// }
// import { CartTotalItems } from "../home/Menu";

// const cartCount = (count = 0) => {
//   return count > 0 && <span className="cart-item-count">{count}</span>;
// };

const CartTotalItems = () => {
  const [cartSize, setCartSize] = React.useState(0);
  return { cartSize, setCartSize };
};

const Header = ({ isAuthenticated = false }) => {
  const { cartSize } = CartTotalItems();
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
          <span id="cartTotalItems"></span>

          <FiShoppingCart />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};
export default Header;
export { CartTotalItems };
