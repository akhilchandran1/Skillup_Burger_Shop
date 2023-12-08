import React, { useState } from "react";
import { Country, State } from "country-state-city";
// import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addOrder } from "../../redux/orderSlice";
import { emptyCart } from "../../redux/cartSlice";

const Shipping = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [shippingData, setShippingData] = useState({
    houseNo: "",
    city: "",
    country: "",
    state: "",
    pinCode: "",
    phoneNo: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setShippingData((previousData) => ({
      ...previousData,
      [name]: value.trim(),
    }));
  };
  const handleCountrySelection = (event) => {
    setSelectedCountry(event.target.value);
    handleUserInput(event);
    setSelectedState("");
  };
  const handleStateSelection = (event) => {
    setSelectedState(event.target.value);
    handleUserInput(event);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const emptyValueCheck = Object.values(shippingData).every(
      (field) => field !== ""
    );

    if (!emptyValueCheck) {
      setShowErrorMessage(true);
      return;
    }

    const calculateSubtotalAmount = cartItems.reduce(
      (total, item) => total + item.value * item.price,
      0
    );
    const calculateTax = calculateSubtotalAmount * 0.18;
    const shippingCharge = 200;
    const totalAmount = calculateSubtotalAmount + calculateTax + shippingCharge;
    let totalQuantity = () => {
      let quantity = 0;
      cartItems.forEach((item) => {
        quantity += item.value;
      });
      return quantity;
    };

    const newOrder = {
      id: uuidv4(),
      orderItems: cartItems,
      shippingData: shippingData,
      date: new Date().toISOString(),
      totalQuantity: totalQuantity(),
      subtotalAmount: calculateSubtotalAmount,
      tax: calculateTax,
      shippingCharge: shippingCharge,
      totalAmount: totalAmount,
    };
    dispatch(addOrder(newOrder));
    dispatch(emptyCart());
    setShowSuccessMessage(true);
    // navigate("/myorders");
  };

  return (
    <section className="shipping">
      {cartItems ? (
        <main>
          <h1>Shipping Details</h1>
          {console.log(cartItems)}
          <form>
            <div>
              <label>H.No.</label>
              <input
                type="text"
                name="houseNo"
                placeholder="Enter House No."
                required
                onChange={handleUserInput}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                required
                onChange={handleUserInput}
              />
            </div>
            <div>
              {/* Compelte the code for the COUNTRY DROPDOWN*/}
              <label>Country</label>

              <select
                name="country"
                value={selectedCountry}
                onChange={handleCountrySelection}
              >
                <option value="" disabled>
                  Select your Country
                </option>
                {/*  Enter the code here for country dropdown            */}
                {Country &&
                  Country.getAllCountries().map((country) => (
                    <option value={country.isoCode} key={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              {/* Add the code for the STATE DROPDOWN*/}
              <label>State</label>
              <select
                name="state"
                value={selectedState}
                onChange={handleStateSelection}
              >
                <option value="" disabled>
                  Select your State
                </option>
                {State &&
                  State.getStatesOfCountry(selectedCountry).map((state) => (
                    <option value={state.isoCode} key={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label>Pin Code</label>
              <input
                type="text"
                name="pinCode"
                placeholder="Enter Pincode"
                onChange={handleUserInput}
              />
            </div>
            {/*  Enter thr code for contact */}
            <div>
              <label>Phone Number</label>
              <input
                type="number"
                name="phoneNo"
                placeholder="Enter Phone Number."
                onChange={handleUserInput}
              />
            </div>
            <button
              type="button"
              className="link"
              onClick={handleFormSubmission}
            >
              Confirm Order
            </button>

            {/* <Popup
              trigger={
                // <Link className="link" to="/myorders">
                <button
                  type="button"
                  className="link"
                  onClick={handleFormSubmission}
                >
                  Confirm Order
                </button>
                // Confirm Order
                // </Link>
              }
              position="right center"
            >
              <div
                style={{
                  color: "red",
                  position: "absolute",
                  top: "50%",
                  right: "100%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                Order Successfully Placed
              </div>
            </Popup> */}
          </form>
          {(showErrorMessage || showSuccessMessage) && (
            <div
              style={{
                color: `${
                  (showErrorMessage && "red") || (showSuccessMessage && "green")
                }`,
                position: "absolute",
                top: "50%",
                right: "37%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgb(156, 0, 60)",
              }}
            >
              <p>
                {showErrorMessage && "*** Please complete all fields ..!"}
                {showSuccessMessage && "Order Successfully Placed"}
              </p>
              <button
                type="button"
                className="link"
                onClick={() => {
                  showErrorMessage && setShowErrorMessage(false);
                  showSuccessMessage && setShowSuccessMessage(false);
                  showSuccessMessage && navigate("/myorders");
                }}
              >
                ok
              </button>
            </div>
          )}
        </main>
      ) : (
        <main>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "37%",
              transform: "translateY(-50%)",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgb(156, 0, 60)",
            }}
          >
            <p>No items in the cart. </p>
            <button
              type="button"
              className="link"
              onClick={() => {
                navigate("/");
              }}
            >
              Home Page
            </button>
          </div>
        </main>
      )}
    </section>
  );
};

export default Shipping;
