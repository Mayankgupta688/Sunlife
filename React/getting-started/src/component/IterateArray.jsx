export default function IterateArray() {
    var employee = [10, 20, 30, 40, 50];
    
    var employeeList = [{
        empName: "A",
        empAge: 10
    }, {
        empName: "B",
        empAge: 10
    }, {
        empName: "C",
        empAge: 10
    }, {
        empName: "D",
        empAge: 10
    }, {
        empName: "E",
        empAge: 10
        }];
    
    
    function deleteEmployee(employeeName) {
        alert("Tried Deleting Employee: " + employeeName)
    };
    
    function deleteOtherEmployee(event) {
        alert("Tried Deleting Employee id: " + event.target.id)
        alert("Tried Deleting Employee name: " + event.target.name)
        alert("Tried Deleting Employee class: " + event.target.className)
        alert("Tried Deleting Employee dataset: " + event.target.dataset.empname)
    }
    
    return (
        <>
            {employee.map((emp) => {
                return <h1>Value is: {emp}</h1>
            })}<hr/>
            
            {employeeList.map((emp) => {
                return (
                    <>
                        <div>
                            <h1>Employee Name is: {emp.empName}</h1>
                            <h1>Employee Age is: {emp.empAge}</h1>
                            <input type="button" value="Delete" onClick={() => { deleteEmployee(emp.empName) }} />
                            <input type="button" value="Events" data-xyz="abc" data-empname={emp.empName} class={emp.empName} name={emp.empName} id={emp.empName} onClick={deleteOtherEmployee} />
                            <hr />
                        </div>
                    </>
                )
            })}
        </>
    )
}