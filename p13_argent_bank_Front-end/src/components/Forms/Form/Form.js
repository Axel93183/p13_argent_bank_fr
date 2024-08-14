import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./Form.css";

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
const Form = ({ onSubmit, children, className }) => {
  const methods = useForm();

  const formClass = className ? className : "form";

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={formClass}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
