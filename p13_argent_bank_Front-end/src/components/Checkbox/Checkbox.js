import React from "react";
import { useFormContext } from "react-hook-form";
import "./Checkbox.css";

/**
 * Checkbox component.
 * Renders a checkbox input with a label and handles form validation using react-hook-form.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.name - The name attribute of the checkbox input.
 * @param {string} props.textLabel - The label text to be displayed next to the checkbox.
 * @param {boolean} [props.required=false] - Whether the checkbox is required or not.
 * @returns {JSX.Element} The rendered Checkbox component.
 */

const Checkbox = ({ name, textLabel, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        {...register(name, {
          required: required ? "This field is required" : false,
        })}
      />
      <label htmlFor={name}>{textLabel}</label>
      {errors[name] && <p className="error-message">{errors[name].message}</p>}
    </div>
  );
};

export default Checkbox;
