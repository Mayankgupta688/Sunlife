export default function employeeReducer(employeeStore = [], action) {
    debugger;
    if (action.type == "add_employee") {
        return action.payload;
    }
    
    if (action.type == "delete_employee") {
        var newEmployeeList = employeeStore.filter((emp) => {
            return emp.empName != action.payload.empName
        })
        return newEmployeeList;
    }
    
    return employeeStore;
}