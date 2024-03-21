import React from 'react'
import "./mapstyles.css"

// importing json data as employees
import employees from './data.json';


function Map() {
  return (
    <div className="map">

      <h2 className="header">Mapping JSON values</h2>

        <div className="body">

          {employees.map((employee, index) => (
                <div key={index} className="cards">
                  <h2>{employee.employee_name}</h2>
                  <p>Employee Code: {employee.employee_code}</p>
                  <p>Department: {employee.department}</p>
                  <p>Email: {employee.email_address}</p>
                </div>
              ))}

        </div>


    </div>
  )
}

export default Map