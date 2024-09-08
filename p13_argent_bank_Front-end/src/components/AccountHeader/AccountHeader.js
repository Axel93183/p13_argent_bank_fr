import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Form from "../Forms/Form/Form";
import FormField from "../Forms/FormField/FormField";
import "./AccountHeader.css";

/**
 * AccountHeader component.
 * Displays the user's account header with a welcome message and the option to edit their name.
 *
 * This component shows the user's first and last name and provides a button to toggle the display of a form for updating their name.
 * When the form is shown, users can input new names and either save or cancel the changes.
 *
 * @returns {JSX.Element} The rendered AccountHeader component with name editing functionality.
 */

const AccountHeader = () => {
  const dispatch = useDispatch();

  const { token, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch({ type: "user/fetchProfile", payload: { token } });
    }
  }, [dispatch, token]);

  const { firstName, lastName } = useSelector((state) => state.user.user);
  const [errorMessage, setErrorMessage] = useState("");

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
    if (!newFirstName.trim() || !newLastName.trim()) {
      setErrorMessage("Fields cannot be empty.");
      return;
    }

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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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
