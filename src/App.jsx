import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./pages/header/Header.jsx";
import Footer from "./pages/footer/Footer.jsx";
import Products from "./pages/products/Products.jsx";
import ProductDetail from "./pages/products/ProductDetail.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Checkout from "./pages/cart/Checkout.jsx";
import OrderConfirmation from "./pages/cart/OrderConfirm.jsx";

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            {/* <Route path="/detail" element={<DetailProduct />} />
            <Route path="/form" element={<AmazonForm />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
