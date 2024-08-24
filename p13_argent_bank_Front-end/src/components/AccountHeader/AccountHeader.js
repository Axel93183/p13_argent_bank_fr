import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfileThunk } from "../../redux/slices/authThunks";
import Button from "../Button/Button";
import Form from "../Forms/Form/Form";
import FormField from "../Forms/FormField/FormField";
import "./AccountHeader.css";

const AccountHeader = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.auth.user);
  const { token } = useSelector((state) => state.auth);

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
    dispatch(
      updateUserProfileThunk({
        token,
        userData: {
          firstName: newFirstName,
          lastName: newLastName,
        },
      })
    ).then(() => {
      setDisplayFirstName(newFirstName);
      setDisplayLastName(newLastName);
      setShowEditName(false);
    });
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
          <Form onSubmit={false} className="edit-name-top-container">
            <FormField
              name="firstName"
              label="First Name"
              type="text"
              placeholder={newFirstName}
              defaultValue={newFirstName}
              onChange={handleFirstName}
              required={false}
            />
            <FormField
              name="lastName"
              label="Last Name"
              type="text"
              placeholder={newLastName}
              defaultValue={newLastName}
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
