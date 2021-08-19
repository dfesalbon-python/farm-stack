import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => res.json())
      .then(
        (result) => {
          setEmployees(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, i) => {
            return (
              <tr key={i}>
                <td className="row-num">{e.employee_id}</td>
                <td>{e.name}</td>
                <td>
                  <button>
                    <FontAwesomeIcon icon={["fas", "pen"]} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
