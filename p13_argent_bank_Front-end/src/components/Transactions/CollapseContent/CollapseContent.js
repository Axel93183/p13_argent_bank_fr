import React, { useState } from "react";
import iconWrite from "../../../assets/icons/write-icon-solid.jpg";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import "./CollapseContent.css";

/**
 * CollapseContent component.
 * Displays and allows editing of transaction details such as type, category, and notes.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.transactionType="Electronic"] - The type of transaction. Defaults to "Electronic".
 * @param {string} props.category - The current category of the transaction.
 * @param {string} [props.notes=""] - Initial notes for the transaction. Defaults to an empty string.
 * @returns {JSX.Element} The rendered CollapseContent component.
 */

const CollapseContent = ({
  transactionType = "Electronic",
  category,
  notes: initialNotes,
}) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showNotesInput, setShowNotesInput] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [notes, setNotes] = useState(initialNotes);

  const handleCategoryButtonClick = () => {
    setShowCategoryDropdown((prev) => !prev);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setShowCategoryDropdown(false); // Hide dropdown after selection
  };

  const handleNotesButtonClick = () => {
    setShowNotesInput((prev) => !prev);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleNotesBlur = () => {
    setShowNotesInput(false); // Hide input after editing
  };

  const handleNotesKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setShowNotesInput(false);
    }
  };

  return (
    <div className="collapse-text">
      <div className="transaction-type">
        <p>Transaction Type : {transactionType}</p>
      </div>
      <div className="transaction-type">
        <p>Category : {selectedCategory}</p>
        <button className="icon-write" onClick={handleCategoryButtonClick}>
          <img src={iconWrite} alt="Modify category" />
        </button>
        {showCategoryDropdown && (
          <CategoryDropdown
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        )}
      </div>
      <div className="transaction-type">
        <p>Notes : {notes}</p>
        <button className="icon-write" onClick={handleNotesButtonClick}>
          <img src={iconWrite} alt="Modify notes" />
        </button>
        {showNotesInput && (
          <input
            type="text"
            value={notes}
            onChange={handleNotesChange}
            onBlur={handleNotesBlur}
            onKeyDown={handleNotesKeyDown}
            autoFocus
          />
        )}
      </div>
    </div>
  );
};

export default CollapseContent;
