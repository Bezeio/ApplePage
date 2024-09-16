import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Eye,
  Flame,
  ShoppingCart,
  CreditCard,
  HelpCircle,
  Heart,
  Twitter,
  Facebook,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Guaranteed from "../components/Guaranteed";
import { useParams } from "react-router-dom";
import { addToCart, priceData, products } from "../../services/service";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState("");
  const [memory, setMemory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [appleCare, setAppleCare] = useState("None");
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const [mainImage, setMainImage] = useState(0);
  const [marketPrice, setMarketPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const updatePrices = (productName, selectedMemory) => {
    if (priceData[productName] && priceData[productName][selectedMemory]) {
      const { market, sale } = priceData[productName][selectedMemory];
      setMarketPrice(market);
      setCurrentPrice(sale);
    }
  };

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setColor(foundProduct.color[0]);
      setMemory(foundProduct.internalMemory[0]);
      setMainImage(foundProduct.image);
      updatePrices(foundProduct.name, foundProduct.internalMemory[0]);
    }
  }, [id]);

  useEffect(() => {
    if (product && memory) {
      updatePrices(product.name, memory);
    }
  }, [product, memory]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const tabs = [
    "DESCRIPTION",
    "ADDITIONAL INFORMATION",
    "REVIEWS (0)",
    "SHIPPING",
  ];

  const handleAddToCart = () => {
    addToCart(product.id, quantity, color, memory, appleCare);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mb-12">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 text-left">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <Eye size={16} />
            <span>46 people are viewing this product right now</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Flame size={16} />
            <span>29 items sold with Bitcoin in last 24 hours</span>
          </div>
          <div className="mb-4">
            <span className="line-through text-customGray mr-2 font-bold text-2xl">
              ${" "}
              {marketPrice ? marketPrice.toFixed(2) : product.price.toFixed(2)}
            </span>
            <span className="text-blue-600 font-bold text-2xl">
              $
              {currentPrice
                ? currentPrice.toFixed(2)
                : product.salePrice.toFixed(2)}
            </span>
          </div>
          <p className="mb-4">Estimated delivery: 16/09/2024</p>

          <div className="mb-4">
            <label className="block mb-2">Color</label>
            <div className="relative">
              <select
                className="w-full p-2 border rounded appearance-none"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                {product.color.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3" size={16} />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Internal Memory</label>
            <div className="relative">
              <select
                className="w-full p-2 border rounded appearance-none"
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
              >
                {product.internalMemory.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-3" size={16} />
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold mb-2">AppleCare+ for your iPhone 15:</h3>
            <p>
              Protection for your iPhone from the experts who know your Apple
              devices better than anyone else. AppleCare+ offers accidental
              damage protection and theft and loss coverage.
            </p>
          </div>
          <div className="mt-6">
            <div className="mb-4">
              <label className="block mb-2">AppleCare+</label>
              <div className="relative">
                <select
                  className="w-full p-2 border rounded appearance-none"
                  value={appleCare}
                  onChange={(e) => setAppleCare(e.target.value)}
                >
                  <option>None</option>
                  <option>1 Year</option>
                  <option>2 Years</option>
                </select>
                <ChevronDown className="absolute right-2 top-3" size={16} />
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border rounded">
                <button
                  className="px-3 py-1 border-r"
                  onClick={() =>
                    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
                  }
                >
                  -
                </button>
                <span className="px-3 py-1">{quantity}</span>
                <button
                  className="px-3 py-1 border-l"
                  onClick={() =>
                    setQuantity((prevQuantity) =>
                      Math.min(product.quantity, prevQuantity + 1)
                    )
                  }
                >
                  +
                </button>
              </div>
              <button
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 hover:bg-customBlack transition duration-300"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={16} />
                ADD TO CART
              </button>
            </div>

            <div className="text-center mb-4">OR</div>

            <button className="w-full bg-green-600 text-white py-2 mb-6 hover:bg-customDarkGreen transition duration-300">
              <CreditCard className="inline mr-2" size={16} />
              BUY NOW
            </button>

            <div className="border p-4 rounded mb-6">
              <h3 className="font-bold mb-2">Buy more save more!</h3>
              <div className="flex justify-between items-center">
                <p>
                  Buy from 2 to 5 items and get 10% OFF
                  <br />
                  <span className="text-sm text-gray-500">on each product</span>
                </p>
                <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 hover:bg-customBlack transition duration-300">
                  ADD
                </button>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 hover:bg-customBlack transition duration-300 mb-4">
              <HelpCircle size={16} />
              NEED HELP?
            </button>

            <button className="flex items-center gap-2 text-customGray mb-4">
              <Heart size={16} />
              Add to Wishlist
            </button>

            <p className="mb-4">Brand: Apple</p>
            <Guaranteed />
            <div className="mt-6">
              <p>
                SKU: <span className="text-customGray">{product.id}</span>
              </p>
              <p>
                Categories:{" "}
                <span className="text-customGray">
                  {product.categories.join(", ")}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={mainImage} alt={product.name} className="w-full mb-4" />
          <div className="flex gap-2">
            {product.childImage.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} image ${index + 1}`}
                className="w-1/4 cursor-pointer transition duration-300"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 mb-6">
        <span>Share:</span>
        <Twitter size={20} className="cursor-pointer text-customGray" />
        <Facebook size={20} className="cursor-pointer text-customGray" />
        <Mail size={20} className="cursor-pointer text-customGray" />
        <Linkedin size={20} className="cursor-pointer text-customGray" />
        <MessageCircle size={20} className="cursor-pointer text-customGray" />
      </div>

      <div className="border-t pt-6">
        <div className="flex flex-col lg:flex-row border-b">
          {" "}
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === "DESCRIPTION" && (
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4">Product Description</h2>
              <h3 className="text-xl font-semibold mb-2">
                Buy {product.name} with Bitcoin
              </h3>
              <p>{product.description}</p>
            </div>
          )}
          {activeTab === "ADDITIONAL INFORMATION" && (
            <p>Additional information about the product goes here.</p>
          )}
          {activeTab === "REVIEWS (0)" && <p>No reviews yet.</p>}
          {activeTab === "SHIPPING" && <p>Shipping information goes here.</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
