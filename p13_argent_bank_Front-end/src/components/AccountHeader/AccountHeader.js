import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Form from "../Forms/Form/Form";
import FormField from "../Forms/FormField/FormField";
import "./AccountHeader.css";

const AccountHeader = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user.user);
  const { token, error } = useSelector((state) => state.user);

  const [displayFirstName, setDisplayFirstName] = useState(firstName);
  const [displayLastName, setDisplayLastName] = useState(lastName);

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  const [showEditName, setShowEditName] = useState(false);

  useEffect(() => {
    setDisplayFirstName(firstName);
    setDisplayLastName(lastName);
    setNewFirstName(firstName);
    setNewLastName(lastName);
  }, [firstName, lastName]);

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

  const handleSave = () => {
    dispatch({
      type: "user/updateProfile",
      payload: {
        token,
        userData: {
          firstName: newFirstName,
          lastName: newLastName,
        },
      },
    });
    handleReset();
  };

  return (
    <div className="account-header">
      <h1>
        Welcome back
        <br />
        {displayFirstName} {displayLastName}!
      </h1>
      <Button text="Edit Name" className="edit-button" onClick={handleClick} />
      {showEditName && (
        <div className="edit-name-container">
          <Form onSubmit={handleSave} error={error.general}>
            <div className="edit-name-top-container">
              <FormField
                name="firstName"
                label="First Name"
                type="text"
                placeholder={newFirstName}
                defaultValue={newFirstName}
                onInput={handleFirstName}
                required={false}
              />
              <FormField
                name="lastName"
                label="Last Name"
                type="text"
                placeholder={newLastName}
                defaultValue={newLastName}
                onInput={handleLastName}
                required={false}
              />
            </div>
            <div className="edit-name-bottom-container">
              <Button type="submit" text="Save" className="edit-button" />
              <Button
                text="Cancel"
                className="edit-button"
                onClick={handleReset}
              />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AccountHeader;
