import React from "react";
import "./Button.css";

/**
 * Button component.
 * Renders a button element with the specified text and type.
 * @param {Object} props - Component props.
 * @param {string} props.text - The text to be displayed inside the button.
 * @param {string} [props.type] - The type attribute of the button element (e.g., "button", "submit").
 * @param {string} [props.className] - Additional class names to apply to the button.
 * @param {function} [props.onClick] - Click event handler for the button.
 * @returns {JSX.Element} Button component.
 */

const Button = ({ text, type, className, onClick, disabled }) => {
  const buttonClass = className ? className : "button";

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
