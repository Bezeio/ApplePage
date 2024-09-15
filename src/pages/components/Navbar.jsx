import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../services/service";

const NavItem = ({ text, hasDropdown, categories, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative text-center cursor-pointer group lg:p-2 md:p-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center text-xs lg:text-base md:text-sm">
        {text}
        {hasDropdown && <ChevronDown size={16} className="ml-1" />}
      </div>
      {hasDropdown && isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-md py-2 w-48 z-10 text-left">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (typeof onCategorySelect === "function") {
                  onCategorySelect(category);
                } else {
                  console.error("onCategorySelect is not a function");                  
                }
              }}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {category}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (typeof onCategorySelect === "function") {
                onCategorySelect("All");
              } else {
                console.error("onCategorySelect is not a function");
              }
            }}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            All products
          </a>
        </div>
      )}
    </li>
  );
};

const Navbar = ({ onCategorySelect }) => {
  const categories = Array.from(
    new Set(products.flatMap((product) => product.categories))
  );

  return (
    <nav className="shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <ul className="flex justify-center space-x-6">
          <Link to="/">
            <NavItem text="HOME" />
          </Link>
          <NavItem
            text="PRODUCTS"
            hasDropdown
            categories={categories}
            onCategorySelect={onCategorySelect}
          />
          <Link to="/cart">
            <NavItem text="CART" />
          </Link>
          <NavItem text="ACCOUNT" />
          <NavItem text="HELP" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
