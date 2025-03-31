import React from "react";

const UploadSection = ({ show, close }) => {
  return (
    <div className={`upload-container ${show ? "show" : ""}`}>
      <button className="close-btn" onClick={close}>✖</button>
      <h2>Upload Document</h2>

      <label>Document Name</label>
      <select>
        <option>Select</option>
        <option>Agreement</option>
        <option>Statement</option>
      </select>

      <label>Document Type</label>
      <select>
        <option>Select</option>
        <option>PDF</option>
        <option>Image</option>
      </select>

      <label>Remarks</label>
      <input type="text" placeholder="Enter remarks" />

      <label>Select File</label>
      <input type="file" />

      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default UploadSection;
