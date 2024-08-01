import { connect } from "react-redux";

function EmployeeLength(props) {
    debugger;
    return (
        <>
            <h1>Total Employee in Company is {props.empList.length}</h1>
        </>
    )
}

function mapStoreToProps(store) {
    return {
        empList: store.employee
    }
}

export default connect(mapStoreToProps, null)(EmployeeLength)

