import React from "react";
import {
  Truck,
  RotateCcw,
  Headphones,
  CreditCard,
  Twitter,
  Instagram,
  Music,
  Tv,
  Youtube,
} from "lucide-react";
import logoBrand from "../../static/media/apple-with-bitcoin-partners-logo.png";

const Footer = () => {
  return (
    <footer className="bg-customFooterColor text-gray-300 py-8 px-4 leading-loose">
      <div className="container mx-auto">
        {/* Top section */}
        <div className="flex flex-wrap justify-between mb-8 pb-6 border-b border-customDarkGray">
          <div className="flex items-center mb-4 md:mb-0">
            <Truck className="mr-2" size={48} />
            <div>
              <h3 className="font-bold text-left">Worldwide Free Shipping</h3>
              <p className="text-sm text-left text-customGray">
                Delivery Moves So Quickly
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <RotateCcw className="mr-2" size={48} />
            <div>
              <h3 className="font-bold text-left">Easy & Fast Returns</h3>
              <p className="text-sm text-left text-customGray">
                30 Days Free Return Policy
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Headphones className="mr-2" size={48} />
            <div>
              <h3 className="font-bold text-left">24/7 Customer Support</h3>
              <p className="text-sm text-left text-customGray">
                Online Help By Our Agents
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <CreditCard className="mr-2" size={48} />
            <div>
              <h3 className="font-bold text-left">100% Secure Payments</h3>
              <p className="text-sm text-left text-customGray">
                Bitcoin / Coinbase / MetaMask
              </p>
            </div>
          </div>
        </div>
        {/* Middle section */}
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/5 mb-4 md:mb-0 text-left">
            <h3 className="font-bold mb-2 text-customGray">COMPANY</h3>
            <ul>
              <li>About Us</li>
              <li>Returns</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0 text-left">
            <h3 className="font-bold mb-2 text-customGray">SHOP</h3>
            <ul>
              <li>
                iPhone{" "}
                <span className="bg-red-500 text-white text-xs px-1 rounded">
                  HOT
                </span>
              </li>
              <li>MacBook</li>
              <li>AirPods</li>
              <li>Shop All</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0 text-left">
            <h3 className="font-bold mb-2 text-customGray">SUPPORT</h3>
            <ul>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Frequently Asked Questions</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="w-full md:w-2/5 text-center pl-6 border-l border-customDarkGray">
            <h3 className="font-bold mb-2">Crypto-Friendly Apple Store</h3>
            <h2 className="text-2xl font-bold mb-2">
              AWB<span className="bg-blue-500 text-white px-1">Store</span>
            </h2>
            <p className="text-sm mb-4 text-customGray">
              AWBStore is your go-to online retailer for an extensive array of
              Apple products, including iPhones, iPads, MacBooks, and
              accessories, all purchasable with Bitcoin.
            </p>
            <div className="flex space-x-2">
              <Twitter size={20} className="text-customGray" />
              <Instagram size={20} className="text-customGray" />
              <Music size={20} className="text-customGray" />
              <Tv size={20} className="text-customGray" />
              <Youtube size={20} className="text-customGray" />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-wrap items-center justify-between border-t border-customDarkGray pt-4 text-left">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-xl font-bold">AWBSTORE</h2>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0 text-sm leading-loose">
            <p>
              <span className="font-bold">Company Base: </span>
              <span className="text-customGray">
                27 HILL STREET LONDON UNITED KINGDOM W1J 5LP
              </span>
            </p>
            <p className="text-customGray">
              Copyright © 2024 BITCOIN AND CRYPTO TRADING LTD.
            </p>
          </div>
          <div className="w-full md:w-auto flex space-x-4">
            <img src={logoBrand} alt="Coinbase" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
