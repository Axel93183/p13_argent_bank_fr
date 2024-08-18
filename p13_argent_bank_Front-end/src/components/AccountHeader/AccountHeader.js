import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import Form from "../Forms/Form/Form";
import FormField from "../Forms/FormField/FormField";

import "./AccountHeader.css";

/**
 * AccountHeader component for displaying and editing the user's name.
 *
 * This component shows the user's first and last name with an option to edit them.
 * It toggles between viewing and editing modes, with fields to update the user's first and last names.
 *
 * @component
 * @returns {JSX.Element} The rendered AccountHeader component.
 */

const AccountHeader = () => {
  const { firstName, lastName } = useSelector((state) => state.user.user);
  const [showEditName, setShowEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const handleClick = () => {
    setShowEditName(!showEditName);
  };

  const handleFirstName = (e) => {
    setNewFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setNewLastName(e.target.value);
  };

  const handleReset = () => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setShowEditName(false);
  };

  // useEffect(() => {
  //   setNewFirstName(firstName);
  //   setNewLastName(lastName);
  // }, [firstName, lastName]);

  // const handleSave = () => {
  //   dispatch(updateFirstName(newFirstName));
  //   dispatch(updateLastName(newLastName));
  //   setShowEditName(false);
  // };

  return (
    <div className="account-header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <Button text="Edit Name" className="edit-button" onClick={handleClick} />
      {showEditName && (
        <div className="edit-name-container">
          <Form onSubmit={false} className="edit-name-top-container">
            <FormField
              name="firstName"
              label="firstName"
              type="text"
              placeholder={firstName}
              value={newFirstName}
              onChange={handleFirstName}
              required={false}
            />
            <FormField
              name="lastName"
              label="lastName"
              type="text"
              placeholder={lastName}
              value={newLastName}
              onChange={handleLastName}
              required={false}
            />
          </Form>
          <div className="edit-name-bottom-container">
            <Button
              text="Save"
              className="edit-button"
              onClick={null /**handleSave*/}
            />
            <Button
              text="Cancel"
              className="edit-button"
              onClick={handleReset}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountHeader;
