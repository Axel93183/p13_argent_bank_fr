import React from "react";
import { useFormContext } from "react-hook-form";
import "./FormField.css";

/**
 * FormField component.
 * Renders a form input field with a label, type, placeholder, and error message handling, using `react-hook-form` for form management.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.name - The name attribute for the input field, used for registration and error handling.
 * @param {string} props.label - The label to display for the input field.
 * @param {string} props.type - The type of the input field (e.g., email, password, text).
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @param {boolean} [props.required] - Indicates if the input field is required.
 * @param {string} [props.defaultValue] - The default value for the input field.
 * @param {Function} [props.onInput] - Function to call when the input value changes.
 * @param {string} [props.error] - Optional error message to display.
 * @returns {JSX.Element} The rendered FormField component with integrated form management and validation.
 */

const FormField = ({
  name,
  label,
  type,
  placeholder,
  required,
  defaultValue,
  onInput,
  error,
}) => {
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
        defaultValue={defaultValue}
        onInput={onInput}
      />
      {errors[name] && <p className="error-message">{label} is required</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FormField;
