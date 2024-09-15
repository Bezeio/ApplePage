import { Search, ShoppingBag } from "lucide-react";
import logoProduct from "../../static/media/apple-with-bitcoin-logo-1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateCartCount } from "../../services/service";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  // Function to update cart count based on localStorage
  const updateCartCountFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCartCountFromLocalStorage();

    const handleCartUpdated = (event) => {
      setCartCount(event.detail.count);
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Top banner */}
      <div className="bg-gray-800 text-white text-center py-2 text-sm">
        "AWB5TH" 20% OFF ON FIRST ORDER
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-500">
            <Link to="/">
              <img src={logoProduct} className="max-w-[80%]" />
            </Link>
          </div>
          <div className="flex items-center space-x-12">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for..."
                className="px-2 py-1 border-l"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* <Heart className="w-6 h-6" />
            <User className="w-6 h-6" /> */}
            <div className="relative">
              <Link to={"../cart"}>
                <ShoppingBag className="w-6 h-6" />
              </Link>
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {Number(cartCount)}
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
