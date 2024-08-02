import React, { useEffect, useState } from "react";
import users from "../../mocks/mockData";
import Button from "../Button/Button";
import Form from "../Forms/Form/Form";
import FormField from "../Forms/FormField/FormField";
import "./AccountHeader.css";

/**
 * AccountHeader component.
 * Renders a header with a welcome message and a button to edit the name.
 * @returns {JSX.Element} AccountHeader component.
 */

const AccountHeader = () => {
  const [showEditName, setShowEditName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  useEffect(() => {
    const user = users[0];
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setNewFirstName(user.firstName);
    setNewLastName(user.lastName);
  }, []);

  const handleClick = () => {
    setShowEditName(!showEditName);
  };

  const handleFirstName = (e) => {
    setNewFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setNewLastName(e.target.value);
  };

  const handleReset = (e) => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setShowEditName(false);
  };

  const handleSave = () => {
    setFirstName(newFirstName);
    setLastName(newLastName);
    setShowEditName(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    } else if (e.key === "Escape") {
      e.preventDefault();
      handleReset();
    }
  };

  return (
    <div className="account-header" onKeyDown={handleKeyDown} tabIndex="0">
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
              name="firstname"
              label="firstname"
              type="text"
              placeholder={firstName}
              value={newFirstName}
              onChange={handleFirstName}
              required={false}
            />
            <FormField
              name="lastname"
              label="lastname"
              type="text"
              placeholder={lastName}
              value={newLastName}
              onChange={handleLastName}
              required={false}
            />
          </Form>
          <div className="edit-name-bottom-container">
            <Button text="Save" className="edit-button" onClick={handleSave} />
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
