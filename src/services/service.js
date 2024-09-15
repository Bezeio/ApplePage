import iphone from "../static/media/buy-iphone-15-with-bitcoin.jpg"
import iphone1 from "../static/media/buy-iphone-15-with-bitcoin-2.jpg"
import iphone2 from "../static/media/buy-iphone-15-with-bitcoin-3.jpg"
import iphone3 from "../static/media/buy-iphone-15-with-bitcoin-black.jpg"
import macbook from "../static/media/buy-macbook-air-m2-with-bitcoin.jpg"
import macbook1 from "../static/media/buy-macbook-air-m2-with-bitcoin-2.jpg"
import macbook2 from "../static/media/buy-macbook-air-m2-with-bitcoincash.jpg"
import macbook3 from "../static/media/buy-macbook-air-m2-with-crypto.jpg"
import ipad from "../static/media/buy-ipad-air-with-crypto-main-1.jpg"
import ipad1 from "../static/media/buy-ipad-air-with-bitcoin-3.jpg"
import ipad2 from "../static/media/buy-ipad-air-with-crypto-2.jpg"
import ipad3 from "../static/media/buy-ipad-air-with-btc-4.jpg"
import airpod from "../static/media/buy-airpods-pro-2rd-with-bitcoin.jpg"
import airpod1 from "../static/media/buy-airpods-pro-2rd-with-crypto.jpg"
import airpod2 from "../static/media/buy-airpods-pro-2rd-with-dogecoin.jpg"
import airpod3 from "../static/media/buy-airpods-pro-2rd-with-ethereum.jpg"

const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 999.99,
      salePrice: 899.99,
      discount: 10,
      image: iphone,
      childImage: [iphone, iphone1, iphone2, iphone3],
      quantity: 50,
      description: "The latest iPhone with pro camera system and A15 Bionic chip.",
      categories: ["Smartphone", "Apple"],
      color: ["Graphite", "Gold", "Silver", "Sierra Blue"],
      internalMemory: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 999.99,
      salePrice: 899.99,
      discount: 10,
      image: macbook,
      childImage: [macbook, macbook1, macbook2, macbook3],
      quantity: 30,
      description: "Powerful. Light. Ready for everything.",
      categories: ["Laptop", "Apple"],
      color: ["Space Gray", "Gold", "Silver"],
      internalMemory: ["256GB", "512GB", "1TB"]
    },
    {
      id: 3,
      name: "iPad Pro",
      price: 799.99,
      salePrice: 749.99,
      discount: 6,
      image: ipad,
      childImage: [ipad, ipad1, ipad2, ipad3],
      quantity: 40,
      description: "The ultimate iPad experience with the M1 chip.",
      categories: ["Tablet", "Apple"],
      color: ["Space Gray", "Silver"],
      internalMemory: ["128GB", "256GB", "512GB", "1TB", "2TB"]
    },
    {
      id: 4,
      name: "AirPods Pro",
      price: 249.99,
      salePrice: 199.99,
      discount: 20,
      image: airpod,
      childImage: [airpod, airpod1, airpod2, airpod3],
      quantity: 100,
      description: "Magic like you've never heard.",
      categories: ["Audio", "Apple"],
      color: ["White"],
      internalMemory: ["N/A"]
    }
  ];
  
  // Function to add item to cart
  const addToCart = (productId, quantity, color, memory, appleCare) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
  
    // Ensure quantity is at least 1
    const safeQuantity = Math.max(1, parseInt(quantity) || 1);
  
    // Get existing cart or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Find if the product already exists in the cart
    const existingItemIndex = cart.findIndex(item => 
      item.id === productId && 
      item.color === color && 
      item.memory === memory && 
      item.appleCare === appleCare
    );
  
    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity = (parseInt(cart[existingItemIndex].quantity) || 0) + safeQuantity;
    } else {
      // Add new item to the cart
      cart.push({ 
        ...product, 
        quantity: safeQuantity,
        color, 
        memory, 
        appleCare,
        selectedPrice: product.salePrice
      });
    }
  
    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Dispatch cartUpdated event to notify other components
    const event = new CustomEvent('cartUpdated', { detail: { count: cart.length } });
    window.dispatchEvent(event);
  
    // Optionally call updateCartCount if needed
    updateCartCount();
  };
  
  // Function to update cart count in header
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    requestAnimationFrame(() => {
      const cartCountElement = document.querySelector('.cart-count');
      if (cartCountElement) {
        cartCountElement.textContent = count;
      }
    });
  
    // Dispatch a custom event for components that need to react to cart changes
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count } }));
  };
  
  // Function to get cart items
  const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  };
  
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', updateCartCount);
  }
  
  export { products, addToCart, getCartItems, updateCartCount };
