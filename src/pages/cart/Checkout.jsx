import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Austria",
  "Belgium",
  "Portugal",
  "Greece",
  "Ireland",
  "New Zealand",
  "South Africa",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Indonesia",
  "Philippines",
  "South Korea",
  "Russia",
  "Ukraine",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Romania",
  "Turkey",
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "Israel",
  "Argentina",
  "Chile",
  "Colombia",
  "Peru",
  "Venezuela",
];

const CheckoutPage = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    town: "",
    county: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
  }, [billingDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="flex justify-between p-4 max-w-[80%] mx-auto">
      <div className="w-2/3 pr-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">BILLING DETAILS</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                className="w-1/2 p-2 border rounded"
                placeholder="First name"
                name="firstName"
                required
                value={billingDetails.firstName}
                onChange={handleInputChange}
              />
              <input
                className="w-1/2 p-2 border rounded"
                placeholder="Last name"
                name="lastName"
                required
                value={billingDetails.lastName}
                onChange={handleInputChange}
              />
            </div>
            <select
              className="w-full p-2 border rounded"
              name="country"
              required
              value={billingDetails.country}
              onChange={handleInputChange}
            >
              <option value="">Select a country / region...</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <input
              className="w-full p-2 border rounded"
              placeholder="House number and street name"
              name="streetAddress"
              required
              value={billingDetails.streetAddress}
              onChange={handleInputChange}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Apartment, suite, unit, etc. (optional)"
              name="apartment"
              value={billingDetails.apartment}
              onChange={handleInputChange}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Town / City"
              name="town"
              required
              value={billingDetails.town}
              onChange={handleInputChange}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="County (optional)"
              name="county"
              value={billingDetails.county}
              onChange={handleInputChange}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Postcode"
              name="postcode"
              required
              value={billingDetails.postcode}
              onChange={handleInputChange}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Phone"
              name="phone"
              required
              value={billingDetails.phone}
              onChange={handleInputChange}
            />
            <input
              className="w-full p-2 border rounded"
              placeholder="Email address"
              name="email"
              required
              value={billingDetails.email}
              onChange={handleInputChange}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="createAccount"
                className="form-checkbox"
              />
              <label htmlFor="createAccount">Create an account?</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="shipDifferent"
                className="form-checkbox"
              />
              <label htmlFor="shipDifferent">
                Ship to a different address?
              </label>
            </div>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Order notes (optional)"
              rows={4}
            />
          </form>
        </div>
      </div>
      <div className="w-1/3">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">YOUR ORDER</h2>
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <img src={item.image} alt={item.name} className="w-12 h-12" />
                  <div>
                    <p>{item.name}</p>
                    <p>
                      {item.quantity} x ${item.price}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between mb-4">
                <p>Subtotal</p>
                <p>${calculateTotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="font-bold">TOTAL</p>
                <p className="font-bold">${calculateTotal().toFixed(2)}</p>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="awbPayment"
                name="paymentMethod"
                defaultChecked
                className="form-radio"
              />
              <label htmlFor="awbPayment">AWB Payment</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="coinbaseCommerce"
                name="paymentMethod"
                className="form-radio"
              />
              <label htmlFor="coinbaseCommerce">Coinbase Commerce</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="payCrypto"
                name="paymentMethod"
                className="form-radio"
              />
              <label htmlFor="payCrypto">Pay With Cryptocurrency</label>
            </div>
          </div>
          <p className="text-sm mt-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <input type="checkbox" id="terms" className="form-checkbox" />
            <label htmlFor="terms">
              I have read and agree to the website terms and conditions
            </label>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <input type="checkbox" id="updates" className="form-checkbox" />
            <label htmlFor="updates">
              I want to receive updates about products and promotions.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800"
            onClick={() => {
              navigate("/order-confirmation");
            }}
          >
            PLACE ORDER
          </button>
          <div className="mt-4 text-center">
            <p className="font-bold">GUARANTEED SAFE CHECKOUT</p>
            <div className="flex justify-center space-x-2 mt-2">
              {/* Add payment method icons here */}
            </div>
            <p className="mt-2">Your Payment is 100% Secure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
