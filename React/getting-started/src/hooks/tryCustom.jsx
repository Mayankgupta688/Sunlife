import { useState, useCallback } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [empArray, setEmpArray] = useState([]);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    
    const addEmployee = useCallback(() => {
        setEmpArray((t) => [...t, "My New Employee"]);
    }, []);

    return (
    <>
        <EmployeeList empArray={empArray} addEmployee={addEmployee}></EmployeeList><hr />
        
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
    </>
    );
};

function EmployeeList(props) {
  return (
    <>
      <h2>My Employees</h2>
      {props.empArray.map((emp, index) => {
        return <p key={index}>{emp}</p>;
      })}
      <button onClick={props.addEmployee}>Add Employee</button>
    </>
  );
};

export default App;