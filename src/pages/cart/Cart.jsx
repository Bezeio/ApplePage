import React, { useState, useEffect } from "react";
import { Trash2, Flame } from "lucide-react";
import Guaranteed from "../components/Guaranteed";
import { useNavigate } from "react-router-dom";
import './Cart.css'

const CartItem = ({ product, onUpdateQuantity }) => (
  <tr className="border-b">
    <td className="py-4 flex items-center">
      <img src={product.image} alt={product.name} className="w-20 h-20 mr-4" />
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-black">
          Color: <span className="text-customGray">{product.color}</span>
        </p>
        <p className="text-sm text-black">
          Categories:{" "}
          <span className="text-customGray">
            {product.categories.join(", ")}
          </span>
        </p>
        <p className="text-sm text-black">
          Internal Memory:{" "}
          <span className="text-customGray">{product.memory}</span>
        </p>
        <p className="text-sm text-black">
          AppleCare+:{" "}
          <span className="text-customGray">
            {product.appleCare ? product.appleCare : "None"}
          </span>
        </p>
      </div>
    </td>
    <td className="py-4 price">${product.price.toFixed(2)}</td>
    <td className="py-4">{product.sku}</td>
    <td className="py-4 quantity">
      <div className="flex items-center border rounded w-max">
        <button
          className="px-2 py-1 w-8 text-center"
          onClick={() => onUpdateQuantity(product.id, -1)}
        >
          -
        </button>
        <span className="px-2 py-1 border-l border-r">{product.quantity}</span>
        <button
          className="px-2 py-1 w-8 text-center"
          onClick={() => onUpdateQuantity(product.id, 1)}
        >
          +
        </button>
      </div>
    </td>
    <td className="py-4">${(product.price * product.quantity).toFixed(2)}</td>
  </tr>
);

const CheckoutTimer = () => {
  const [timeLeft, setTimeLeft] = useState(229); // 3 minutes and 49 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gray-100 p-4 mb-4 flex items-center">
      <Flame className="text-orange-500 mr-2" />
      <span>Hurry up, these products are limited, checkout within </span>
      <span className="font-bold ml-1">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(cart);
  const navigate = useNavigate();
  const updateQuantity = (id, change, color, memory, appleCare) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.color === color &&
        item.memory === memory &&
        item.appleCare === appleCare
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );

    const updatedCart = cartItems.map((item) =>
      item.id === id &&
      item.color === color &&
      item.memory === memory &&
      item.appleCare === appleCare
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    const event = new CustomEvent("cartUpdated", { detail: { count: 0 } });
    window.dispatchEvent(event);
  };

  return (
    <div className="container mx-auto p-4 max-w-[80%] mb-12">
      <CheckoutTimer />
      <div className="flex flex-col md:flex-row gap-8 text-left">
        <div className="md:w-2/3">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">PRODUCT</th>
                <th className="text-left py-2">PRICE</th>
                <th className="text-left py-2">SKU</th>
                <th className="text-left py-2">QUANTITY</th>
                <th className="text-left py-2">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(cartItems) && cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    product={item}
                    onUpdateQuantity={(id, change) =>
                      updateQuantity(
                        id,
                        change,
                        item.color,
                        item.memory,
                        item.appleCare
                      )
                    }
                  />
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </tbody>
          </table>
          <div className="button-coupon flex justify-between mt-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Coupon code"
                className="border p-2 mr-2"
              />
              <button className="bg-gray-200 px-4 py-2">OK</button>
            </div>
            <button
              className="clear flex items-center bg-gray-200 px-4 py-2"
              onClick={clearCart}
            >
              <Trash2 size={16} className="mr-2" />
              CLEAR SHOPPING CART
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="border p-4">
            <h2 className="font-bold mb-4">CART TOTALS</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>TOTAL</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              className={`w-full py-2 mb-2 ${
                cartItems.length > 0
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-400 text-gray-300 cursor-not-allowed"
              }`}
              onClick={() => navigate("/checkout")}
              disabled={cartItems.length === 0}
            >
              PROCEED TO CHECKOUT
            </button>
            <button
              className="w-full border py-2"
              onClick={() => navigate("/")}
            >
              CONTINUE SHOPPING
            </button>
          </div>
          <Guaranteed />
        </div>
      </div>
    </div>
  );
};

export default Cart;
