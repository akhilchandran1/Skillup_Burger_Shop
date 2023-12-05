import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector } from "react-redux";

const MyOrders = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/*     Add the code for the table body */}
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>Processing</td>
                <td>{order.totalQuantity}</td>
                <td>₹{order.totalAmount}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/${order.id}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
