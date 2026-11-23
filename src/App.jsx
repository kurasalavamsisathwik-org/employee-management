
import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard.jsx';
import './App.css';

function App() {

  // Employee records
  const employees = [
    {
      id: 101,
      name: "Rahul",
      department: "IT",
      salary: 45000
    },
    {
      id: 102,
      name: "Priya",
      department: "HR",
      salary: 35000
    },
    {
      id: 103,
      name: "Arjun",
      department: "Finance",
      salary: 40000
    },
    {
      id: 104,
      name: "Sneha",
      department: "training",
      salary: 50000
    }
  ];

  // State for department filter
  const [department, setDepartment] = useState("All");

  // Filter employees
  const filteredEmployees =
    department === "All"
      ? employees
      : employees.filter(
          (emp) => emp.department === department
        );

  return (
    <div className="container">

      <h1>Employee Management System</h1>

      <h3>Filter Employees by Department</h3>

      <div className="filter-buttons">

        <button onClick={() => setDepartment("All")}>
          All
        </button>

        <button onClick={() => setDepartment("IT")}>
          IT
        </button>

        <button onClick={() => setDepartment("HR")}>
          HR
        </button>

        <button onClick={() => setDepartment("Finance")}>
          Finance
        </button>
        <button onClick={() => setDepartment("training")}>
          training
        </button>

      </div>

      <div className="employee-list">

        {filteredEmployees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            id={emp.id}
            name={emp.name}
            department={emp.department}
            salary={emp.salary}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
