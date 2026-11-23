
import React from 'react';

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <h2>{props.name}</h2>

      <p><strong>Employee ID:</strong> {props.id}</p>

      <p><strong>Department:</strong> {props.department}</p>

      <p><strong>Salary:</strong> ₹{props.salary}</p>
    </div>
  );
}

export default EmployeeCard;
