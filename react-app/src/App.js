import "./App.css";
import Employee from "./components/employee/employee.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPen, faPlus);

function App() {
  return (
    <>
      <Employee />
    </>
  );
}

export default App;
