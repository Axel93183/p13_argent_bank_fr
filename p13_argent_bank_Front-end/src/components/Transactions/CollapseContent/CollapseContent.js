import React from "react";
import iconWrite from "../../../assets/icons/write-icon-solid.jpg";
import "./CollapseContent.css";

const CollapseContent = ({
  transactionType = "Electronic",
  category,
  notes,
}) => {
  return (
    <div className="collapse-text">
      <div className="transaction-type">
        <p>Transaction Type : {transactionType}</p>
      </div>
      <div className="transaction-type">
        <p>Category : {category}</p>
        <button className="icon-write">
          <img src={iconWrite} alt="Modify category" />
        </button>
      </div>
      <div className="transaction-type">
        <p>Notes : {notes}</p>
        <button className="icon-write">
          <img src={iconWrite} alt="Modify notes" />
        </button>
      </div>
    </div>
  );
};

export default CollapseContent;
