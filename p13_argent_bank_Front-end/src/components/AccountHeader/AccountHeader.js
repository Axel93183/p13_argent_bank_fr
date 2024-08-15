import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName, updateLastName } from "../../redux/slices/authSlice";
import Button from "../Button/Button";
import Form from "../Forms/Form/Form";
import FormField from "../Forms/FormField/FormField";
import "./AccountHeader.css";

const AccountHeader = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user.user);
  const [showEditName, setShowEditName] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  useEffect(() => {
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
    dispatch(updateFirstName(newFirstName));
    dispatch(updateLastName(newLastName));
    setShowEditName(false);
  };

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
