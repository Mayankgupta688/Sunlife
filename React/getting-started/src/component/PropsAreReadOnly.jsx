export default function PropsAreReadOnly(props) {
    debugger;
    props.employee.name = "Anuj"; // Allowed
    props.data.push(100);  // Allowed
    return <h1>Props value are contants....{props.employee.name}</h1>
}