// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <p>
          Copyright ⓒ {currentYear}
          <strong> All right received @burgershop</strong>
        </p>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://youtube.com/">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
