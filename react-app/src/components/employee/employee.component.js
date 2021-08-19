import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRipple } from "../../commons/commons";
import "./employee.css";
import EmployeeList from "./employeeList.component";
import EmployeeModal from "./employeeModal.component";

const Entry = () => {
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }

  const newEntry = () => {
    const modal = document.getElementById("entry-modal");
    modal.style.display = "block";
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="h-half">
            <h2 style={{ textAlign: "left" }}>Employee List</h2>
          </div>
          <div className="h-half"></div>
        </div>
        <div className="tool-bar">
          <button className="primary-button" onClick={newEntry}>
            <FontAwesomeIcon icon={["fas", "plus"]} />
            <div style={{ float: "right", marginRight: "6px" }}>New</div>
          </button>
        </div>
        <EmployeeList />
        <EmployeeModal />
      </div>
    </>
  );
};

export default Entry;
