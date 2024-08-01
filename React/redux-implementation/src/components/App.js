import { connect } from "react-redux";
import * as actions from "../actions/employeeActions"
import EmployeeLength from "./EmployeeLength";
import Axios from "axios"

function App(props) {
    
    function getData() {
        Axios.get("http://localhost:3000/employees").then((response) => {
            props.addEmployee(response.data)
        })
    }
    return (
        <>
            <EmployeeLength></EmployeeLength>
            
            {props.empList.map((emp) => {
                return <h1>Employee Name is {emp.empName}</h1>
            })}<hr/>
            
            <input type="button" value="Add Employee" onClick={getData} />
        </>
    )
}

function mapStoreToProps(store) {
    return {
        empList: store.employee
    }
}

export default connect(mapStoreToProps, actions)(App)

