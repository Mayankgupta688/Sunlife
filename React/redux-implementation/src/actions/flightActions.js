export function deleteEmployee(empName) {
    debugger;
    return {
        type: "delete_employee",
        payload: {
            empName: empName
        }
    }
}

export function addEmployee(employeeList) {
    debugger;
    return {
        type: "add_employee",
        payload: employeeList
    }
}