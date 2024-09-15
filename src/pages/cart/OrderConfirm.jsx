import React, { useEffect, useState } from "react";

const OrderConfirmation = () => {
  const [cart, setCart] = useState([]);
  const [billingDetails, setBillingDetails] = useState({});

  useEffect(() => {
    // Retrieve data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const storedBillingDetails = JSON.parse(
      localStorage.getItem("billingDetails") || "{}"
    );
    setCart(storedCart);
    setBillingDetails(storedBillingDetails);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">ORDER DETAILS</h2>
        </div>

        <div className="p-6">
          <div className="bg-customLightGray text-left">
            <p className="mb-4 text-xs p-2">PRODUCT</p>
          </div>
          <div className="border-b pb-4 mb-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Subtotal:</p>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Shipping:</p>
            <p>Free Shipping (3-10 days)</p>
          </div>
          <div className="flex justify-between items-center text-xl font-bold">
            <p>Total:</p>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">
            Billing & Shipping Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-left text-customGray border">
              <h3 className="font-semibold mb-2 text-black bg-customGray  p-2">
                Billing Address
              </h3>
              <p className="pl-2">
                {billingDetails.firstName} {billingDetails.lastName}
              </p>
              <p className="pl-2">{billingDetails.streetAddress}</p>
              {billingDetails.apartment && <p>{billingDetails.apartment}</p>}
              <p className="pl-2">
                {billingDetails.town}, {billingDetails.county}{" "}
                {billingDetails.postcode}
              </p>
              <p className="pl-2">{billingDetails.country}</p>
              <p className="pl-2">Phone: {billingDetails.phone}</p>
              <p className="pl-2 pb-2">Email: {billingDetails.email}</p>
            </div>
            <div className="text-left text-customGray border">
              <h3 className="font-semibold mb-2 text-black bg-customGray  p-2">
                Shipping Address
              </h3>
              <p className="pl-2">
                {billingDetails.firstName} {billingDetails.lastName}
              </p>
              <p className="pl-2">{billingDetails.streetAddress}</p>
              {billingDetails.apartment && <p>{billingDetails.apartment}</p>}
              <p className="pl-2">
                {billingDetails.town}, {billingDetails.county}{" "}
                {billingDetails.postcode}
              </p>
              <p className="pl-2">{billingDetails.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
