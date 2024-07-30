import Axios from "axios";
import { useState, useEffect } from "react";
import { EmployeeDummy } from "../../employee/Employee";
import EmployeeLength from "../../employee/EmployeeLength";
export default function EmployeeList() {
    
    var [employeeList, setEmployeeList] = useState([]);
    var [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Update Three")
    })
    
    useEffect(() => {
        console.log("Employee List Updated...")
    }, [employeeList])
    
    useEffect(() => {
        console.log("Update Four")
    }, [count, employeeList])
    
    
    useEffect(() => {
        debugger;
        Axios.get("http://localhost:3000/employees").then((response) => {
            setEmployeeList(response.data)
        })
        
        setInterval(() => {
            setCount((oldValue) => {
                return oldValue + 1
            })
        }, 1000)
    }, []);
    
    useEffect(() => {
    }, []);
    
    return (
        <>
            <h1>{count}</h1>
            <EmployeeLength employees={employeeList}></EmployeeLength>
            {employeeList.map((employee) => {
                return <EmployeeDummy emp={employee}></EmployeeDummy>
            })}
        </>
    )
}