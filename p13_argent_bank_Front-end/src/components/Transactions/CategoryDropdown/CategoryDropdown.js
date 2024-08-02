import React from "react";

import "./CategoryDropdown.css";

/**
 * CategoryDropdown component.
 * Renders a dropdown menu for selecting a category from a predefined list.
 * @param {Object} props - Component properties.
 * @param {string} props.selectedCategory - The currently selected category.
 * @param {Function} props.onCategoryChange - Callback function to handle category changes.
 * @returns {JSX.Element} CategoryDropdown component.
 */

const CategoryDropdown = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    "Categories",
    "Education",
    "Entertainment",
    "Food",
    "Health",
    "Shopping",
    "Travel",
    "Utilities",
    "Other",
  ];

  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
