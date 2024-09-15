import Sidebar from "../components/Sidebar.jsx";
import {
  Truck,
  HelpCircle,
  Smartphone,
  Laptop,
  Info,
  ShoppingCart,
} from "lucide-react";
import logoProduct from "../../static/media/buy-iphone-with-bitcoin-crypto-currency.png";
import bannerProduct from "../../static/media/laptop-with-colorful-screen-white-background-3d-rendering.jpg";
import Navbar from "../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../services/service.js";
import { useEffect, useState } from "react";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategorySelect = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.categories.includes(category))
      );
    }
  };
  return (
    <main className="flex-grow container mx-auto max-w-[80%] py-8">
      <div className="flex">
        {!isMobile && <Sidebar onCategorySelect={handleCategorySelect} />}
        <div className={isMobile ? "w-full" : "w-3/4"}>
          <nav className="lg:justify-between lg:items-center ">
            <Navbar onCategorySelect={handleCategorySelect} />
          </nav>
          <h1 className="text-4xl font-bold mb-4">BUY IPHONE WITH BITCOIN</h1>
          <h2 className="text-2xl mb-4">BUY APPLE PRODUCTS WITH CRYPTO</h2>
          <p className="text-customGray text-left mb-8">
            Dive into AWBStore, your ultimate destination to buy iPhone with
            Bitcoin. Extend your crypto shopping experience to MacBooks and
            other coveted Apple products, all under one roof. We guarantee
            secure transactions, global delivery, and unbeatable prices. Turn
            your Bitcoin into the Apple device of your dreams at AWBStore today!
          </p>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg">
                <Link to={`/product/${product.id}`}>
                  <div className="relative mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                      UP TO {product.discount}% OFF
                    </span>
                  </div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-600 line-through">
                    From: ${product.price.toFixed(2)}
                  </p>
                  <p className="text-green-600 font-bold">
                    From: ${product.salePrice.toFixed(2)}
                  </p>
                </Link>
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="mt-3 w-full bg-customGray text-white py-2 hover:bg-customBlue transition duration-300 flex items-center justify-center"
                >
                  <ShoppingCart className="mr-2" />
                  SELECT OPTIONS
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 py-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={bannerProduct}
              alt="Eco-Friendly Laptop Stand"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-left mb-4">
              BUY MACBOOK WITH BITCOIN
            </h2>
            <h3 className="text-xl font-semibold text-left mb-6">
              DOES APPLE ACCEPT BITCOINT?
            </h3>
            <p className="text-customGray text-left mb-8">
              In 2017, AWBStore revolutionized the purchasing experience by
              enabling customers to buy products using Bitcoin, a cryptocurrency
              not accepted by Apple. If you’ve already ventured into the Apple
              ecosystem with the acquisition of an iPhone using Bitcoin, the
              moment has arrived to elevate your experience with a MacBook
              purchased through the same digital currency. Buy{" "}
              <span className="font-bold">MacBook with Bitcoin</span> and unlock
              exclusive savings of up to 20%. Act swiftly, as our time-limited
              offers won’t last forever.
            </p>
            <p className="text-customGray text-left mb-8">
              Discover the game-changing performance of the{" "}
              <span className="font-bold text-black">
                new Apple MacBook Pro
              </span>
              , a device designed to empower professionals. With the option to
              choose between the powerhouse M1 Pro, the groundbreaking M1 Max,
              or the highly anticipated Apple M2 chip, you can supercharge your
              productivity and effortlessly tackle professional-level tasks.
              Experience accelerated work processes, unparalleled speed, and a
              battery life that goes the distance. By investing in a MacBook Pro
              using cryptocurrency, you’re making a forward-thinking decision to
              stay at the forefront of technology.
            </p>
            <button className="group mx-auto mt-3 px-6 bg-customBlue text-white py-4 hover:bg-customLightGray transition duration-300 flex">
              <ShoppingCart className="mr-2 group-hover:text-customBlue transition duration-300" />
              <span className="group-hover:text-customBlue transition duration-300">
                SHOP
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <img className="mx-auto justify-center py-4" src={logoProduct} alt="" />
        <h2 className="text-2xl font-bold text-center mb-6">RECENT PRODUCTS</h2>
        <p className="text-customGray text-center mb-8 px-24">
          <span className="font-bold">Buy iPhone with Bitcoin</span> today and
          embrace the future of digital transactions. Bitcoin has gained
          recognition as a legitimate payment method, and we’re thrilled to
          announce that we now accept it. Don’t wait—seize this opportunity to
          maximize the value of your digital assets and avoid unnecessary
          delays. Our selection goes beyond iPhones and includes{" "}
          <span className="font-bold">MacBook Air, MacBook Pro</span>, iMac,
          iPad, AirPods, and even the highly coveted PS5. Experience seamless
          shopping and unlock the possibilities when you combine cutting-edge
          technology with the power of cryptocurrency. Revolutionize the way you
          shop for your favorite gadgets and devices by purchasing high-quality
          electronic devices with Bitcoin at our store. Don’t miss out on this
          unique opportunity. Buy iPhone with Bitcoin and enjoy the convenience
          of digital transactions today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <Link to={`/product/${product.id}`}>
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    UP TO {product.discount}% OFF
                  </span>
                </div>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600 line-through">
                  From: ${product.price.toFixed(2)}
                </p>
                <p className="text-green-600 font-bold">
                  From: ${product.salePrice.toFixed(2)}
                </p>
              </Link>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="mt-3 w-full bg-customGray text-white py-2 hover:bg-customBlue transition duration-300 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2" />
                SELECT OPTIONS
              </button>
            </div>
          ))}
        </div>
        <button className="group mx-auto mt-12 px-24 bg-customBlue text-white py-3 hover:bg-customLightGray transition duration-300 flex">
          <span className="group-hover:text-customBlue transition duration-300">
            MORE PRODUCTS
          </span>
        </button>
      </div>
      <div className="mx-auto pt-6 space-y-8">
        <h1 className="text-3xl font-bold text-center">
          WORLDWIDE FREE SHIPPING!
        </h1>

        <p className="text-customGray text-left mb-8 px-24">
          At AWBStore, we believe in providing a transparent and
          customer-centric approach to shipping. That’s why we offer free
          international shipping on all the products available in our store. We
          understand that shipping costs can add up, so we’ve made it our
          commitment to provide a flat rate for everyone. When you
          <span className="font-bold text-customBlack">
            {" "}
            buy iPhone with Bitcoin
          </span>{" "}
          or explore our wide range of products, including iPhones,{" "}
          <span className="text-customBlack">AirPods</span>, MacBooks,
          <span className="text-customBlack">iMacs, iPads</span>, and more, you
          can enjoy the added convenience of free international shipping.
        </p>

        <p className="text-customGray text-left mb-8 px-24">
          Your privacy is of utmost importance to us. We employ encryption
          technology to safeguard all your personal information, ensuring that
          it remains secure and confidential. Rest assured that we do not share
          your information with any external parties.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="group mx-auto mt-12 px-4 bg-customBlue text-white py-3 hover:bg-customLightGray transition duration-300 flex">
            <Truck className="mr-2 group-hover:text-customBlue" />
            <span className="group-hover:text-customBlue transition duration-300">
              SHIPPING
            </span>
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-16">
          <HelpCircle className="mr-2 bg-blue-500 text-white rounded-full" />
          FAQ
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded">
            <h2 className="font-bold flex items-center text-left text-sm">
              <Smartphone className="mr-2" /> CAN I BUY AN IPHONE USING BITCOIN?
            </h2>
            <p className="mt-2 text-customGray text-left text-sm">
              Yes, you can buy the newest iPhones on AWBStore using Bitcoin and
              other cryptocurrencies. Our iPhones are brand new and unlocked.
              Simply add the desired iPhone to your cart and pay with Bitcoin or
              another cryptocurrency. Shopping online with AWBStore is easier
              and more private than visiting an Apple store. Enjoy the
              convenience of purchasing iPhones with Bitcoin today.
            </p>
          </div>
          <div className="border p-4 rounded">
            <h2 className="font-bold flex items-center text-left text-sm">
              <Laptop className="mr-2" /> CAN I BUY A MACBOOK USING BITCOIN?
            </h2>
            <p className="mt-2 text-customGray text-left text-sm">
              Yes, at AWBStore, you can buy a MacBook Pro or MacBook Air using
              Bitcoin or other cryptocurrencies. Simply add the desired MacBook
              to your shopping cart, provide the necessary information, and pay
              with Bitcoin or another cryptocurrency. Purchasing a MacBook with
              Bitcoin offers convenience and potential savings. Shop now and
              experience the future of digital transactions at AWBStore.
            </p>
          </div>
          <div className="border p-4 rounded">
            <h2 className="font-bold flex items-center text-left text-sm">
              <Info className="mr-2" /> DOES APPLE ACCEPT BITCOIN?
            </h2>
            <p className="mt-2 text-customGray text-left text-sm">
              While Apple Inc. may not directly accept Bitcoin as a payment
              option currently, at AWBStore, we provide a seamless solution to
              this limitation. Experience the freedom of purchasing your
              favorite Apple products using Bitcoin and other cryptocurrencies,
              only at AWBStore. Embrace the future of commerce today and indulge
              in the convenience of buying Apple devices with Bitcoin at
              AWBStore, effortlessly bridging the gap where Apple hasn’t
              ventured yet.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Products;
