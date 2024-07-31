import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./Form.css";

/**
 * Form component.
 * Renders a form using react-hook-form with context provider and handles form submission.
 * @param {Object} props - Component props.
 * @param {function} props.onSubmit - Function to handle form submission.
 * @param {ReactNode} props.children - The child components to be rendered within the form.
 * @returns {JSX.Element} Form component.
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
