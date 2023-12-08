// Write all the code here

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const { id } = useParams();
  const orders = useSelector((state) => state.orders.orders);
  const getDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const order = orders.find((order) => order.id === id);
  if (!order)
    return (
      <section className="orderDetails" style={{ height: "100vh" }}>
        <p className="empty-cart-card">No Orders Places yet</p>
      </section>
    );

  const getUserName = () => {
    const userInfo = localStorage.getItem("activeUserInfo");
    const loggedUserInfo = userInfo && JSON.parse(userInfo);
    return userInfo
      ? loggedUserInfo.name
      : "No Name available (user not logged in)";
  };

  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {order.shippingData.houseNo}, {order.shippingData.city},
            {order.shippingData.country}, {order.shippingData.state},
            {order.shippingData.pinCode}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {getUserName()}
          </p>
          <p>
            <b>Phone</b> {order.shippingData.phoneNo}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b> {getDate(order.date)}
          </p>
          <p>
            <b>Delivered At</b>
            {getDate(order.date)}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> {"COD"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b> {getDate(order.date)}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total / Subtotal</b>₹{order.subtotalAmount}
          </p>
          <p>
            <b>Shipping Charges</b>₹{order.shippingCharge}
          </p>
          <p>
            <b>Tax</b>₹{order.tax}
          </p>
          <p>
            <b>Total Amount</b>₹{order.totalAmount}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          {order.orderItems.map((item, index) => (
            <div key={index}>
              <h4>{item.title}</h4>
              <div>
                <span>{item.value}</span> x <span>{item.price}</span>
              </div>
            </div>
          ))}
          {/* <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div> */}
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{order.subtotalAmount}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};
export default OrderDetails;
