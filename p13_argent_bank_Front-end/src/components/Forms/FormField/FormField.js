import React from "react";
import { useFormContext } from "react-hook-form";
import "./FormField.css";

/**
 * FormField component.
 * Renders a form input field with a label and handles form validation using react-hook-form.
 * @param {Object} props - Component props.
 * @param {string} props.name - The name attribute of the input field.
 * @param {string} props.label - The label text to be displayed for the input field.
 * @param {string} props.type - The type attribute of the input field (e.g., "text", "email").
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {boolean} [props.required=false] - Whether the input field is required or not.
 * @returns {JSX.Element} FormField component.
 */

const FormField = ({ name, label, type, placeholder, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && <p className="error-message">{label} is required</p>}
    </div>
  );
};

export default FormField;
