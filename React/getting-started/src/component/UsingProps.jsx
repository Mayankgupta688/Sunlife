export default function UsingProps({empDetails, employeeSalary: sal, employeeList: list}) {
    return (
        <>
            {sal[0] + " " + sal[1]}
            {list.map((employee) => {
                return (
                    <>
                        <h1>User Name is {employee.userName}</h1>
                    </>
                )
            })}
        </>
    )
}