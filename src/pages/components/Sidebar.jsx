import React from 'react';
import PropTypes from 'prop-types';
import { products } from "../../services/service";

const Sidebar = ({ onCategorySelect }) => {
  const categories = Array.from(new Set(products.flatMap((product) => product.categories)));

  return (
    <aside className="w-1/4 pr-4 leading-loose ixed top-0 left-0">
      <h2 className="font-bold text-left bg-customBlack text-white p-2 rounded-t-xl">
        ALL DEPARTMENTS
      </h2>
      <ul className="space-y-2 text-left border rounded-b p-2">
        {categories.map((category, index) => (
          <li 
            key={index}
            className="cursor-pointer hover:text-customGray transition duration-200"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  onCategorySelect: PropTypes.func.isRequired
};

export default Sidebar;
