import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profile-icon.png";
import profilePicMeera from "../../assets/meeraProPic.png";

const Profile = () => {
  const navigate = useNavigate();

  const activeUser = JSON.parse(localStorage.getItem("activeUserInfo"));
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img
          src={
            activeUser &&
            (activeUser.username === "meera" ? profilePicMeera : profileIcon)
          }
          alt="User"
          {...options}
        />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          {activeUser ? activeUser.name : "Gust User"}
        </motion.h5>

        <motion.div
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>

        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          onClick={() => {
            localStorage.removeItem("activeUserInfo");
            navigate("/login");
          }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
