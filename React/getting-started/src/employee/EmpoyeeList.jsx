
import { Component } from "react";
import { EmployeeDummy } from "./Employee"
import EmployeeLength from "./EmployeeLength";
import EmployeeFilter from "./EmployeeFilter";

export default class EmpoyeeList extends Component {
    constructor() {
        super();
        var emp = [
            { id: 1, empName: "Mayank", empAge: 10 },
            { id: 2, empName: "Ankit", empAge: 10 },
            { id: 3, empName: "Anshul", empAge: 10 },
            { id: 4, empName: "Meha", empAge: 10 },
            { id: 5, empName: "Sagar", empAge: 10 }
        ];
        
        this.state = {
            employees: emp,
            filterEmployee: emp
        }
    }
    
    deleteEmployee(empName) {
        var newList = this.state.employees.filter((emp) => {
            return emp.empName != empName;
        })
        
        this.setState({
            employees: newList,
            filterEmployee: newList
        })
    }
    
    filterEmployee(filterText) {
        var newList = this.state.employees.filter((emp) => {
            return emp.empName.indexOf(filterText) > -1;
        })
        
        this.setState({
            ...this.state,
            filterEmployee: newList
        })
    }
    
    render() {
        return (
            <div style={{padding: "30px"}}>
                <EmployeeLength employees={this.state.employees}></EmployeeLength><hr /><br />
                <EmployeeFilter filterEmployee={this.filterEmployee.bind(this)}></EmployeeFilter>
                    <div style={{display: "inline-block"}}>
                        {this.state.filterEmployee.map((employee) => {
                            return (
                                <EmployeeDummy deleteEmployee={this.deleteEmployee.bind(this)} {...employee} userName={employee.empName} emp={employee}></EmployeeDummy>
                            )
                        })}
                    </div>
            </div>
        )
    }
}