import React, { useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CollapseTransactions.css";

/**
 * CollapseTransactions component.
 * Displays a collapsible section for transaction details with a toggle feature.
 * @param {Object} props - Component properties.
 * @param {string} props.date - Transaction date.
 * @param {string} props.description - Description of the transaction.
 * @param {string} props.amount - Transaction amount.
 * @param {string} props.balance - Balance after the transaction.
 * @param {JSX.Element} props.content - Additional content to display when the section is expanded.
 * @returns {JSX.Element} CollapseTransactions component.
 */

const CollapseTransactions = ({
  date,
  description,
  amount,
  balance,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-component">
      <div className="collapse-container" onClick={toggleCollapse}>
        <div className="collapse-header">
          <div className="collapse-chevron">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`collapse-icon ${isOpen ? "open" : ""}`}
            />
          </div>
          <div className="collapse-items">
            <div className="collapse-item">{date}</div>
            <div className="collapse-item">{description}</div>
            <div className="collapse-item">{amount}</div>
            <div className="collapse-item">{balance}</div>
          </div>
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        {content}
      </div>
    </div>
  );
};

export default CollapseTransactions;
