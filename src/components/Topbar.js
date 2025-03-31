import React from "react";

const Topbar = ({ toggleUpload }) => {
  return (
    <div className="topbar">
      <h1>Portfolio</h1>
      <div className="topbar-actions">
        <input type="text" placeholder="Search Loan Number" />
        <button className="filter-btn" onClick={toggleUpload}>More Filters</button>
      </div>
    </div>
  );
};

export default Topbar;

