import React from "react";
import { useFormContext } from "react-hook-form";
import "./FormField.css";

/**
 * Form component that integrates with `react-hook-form` to manage form state and submission.
 *
 * @param {Object} props - The props for the component.
 * @param {Function} props.onSubmit - Function to call when the form is submitted.
 * @param {React.ReactNode} props.children - Form fields and other elements to be rendered inside the form.
 * @param {string} [props.className] - Optional CSS class name to apply to the form.
 *
 * @returns {JSX.Element} The rendered form component wrapped with `FormProvider` to provide form methods context.
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
