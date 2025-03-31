import React from "react";

const PortfolioTable = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Loan No</th>
            <th>Loan Type</th>
            <th>Borrower Name</th>
            <th>Address</th>
            <th>Co-Borrower</th>
            <th>Current DPD</th>
            <th>Sanction Amount</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>L2813275</td>
            <td>Personal Loan</td>
            <td>Vivaan Virk</td>
            <td>H.No 613, Ghaziabad</td>
            <td>Ekaksh Chahal</td>
            <td>76</td>
            <td>₹ 3,863,514</td>
            <td>West</td>
          </tr>
          <tr>
            <td>L2813276</td>
            <td>Home Loan</td>
            <td>Samaira Jain</td>
            <td>Dhaka Lala</td>
            <td>Shan Hira</td>
            <td>50</td>
            <td>₹ 2,364,323</td>
            <td>South</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
