import React from "react";
import "./Button.css";

/**
 * Button component.
 * Renders a button element with the specified text and type.
 * @param {Object} props - Component props.
 * @param {string} props.text - The text to be displayed inside the button.
 * @param {string} [props.type] - The type attribute of the button element (e.g., "button", "submit").
 * @returns {JSX.Element} Button component.
 */

const Button = ({ text, type }) => {
  return (
    <button type={type} className="button">
      {text}
    </button>
  );
};

export default Button;
