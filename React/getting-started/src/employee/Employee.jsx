import { Component } from "react";

export default class Employee extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
                <img src="https://tse2.mm.bing.net/th?id=OIP.ocv4jX7yJmuAi0yAZWI1MQHaE8&pid=Api&P=0&h=220" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.emp.empName} - {this.props.empAge}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input className="btn btn-primary" type="button" value="Delete" onClick={() => { this.props.deleteEmployee(this.props.emp.empName)}} />
                </div>
            </div>
        )
    }
}


export function EmployeeDummy(props) {
    return (
        <div className="card" style={{ width: "18rem", display: "inline-block", margin: "10px" }}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.ocv4jX7yJmuAi0yAZWI1MQHaE8&pid=Api&P=0&h=220" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.emp.empName} - {props.empAge}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input className="btn btn-primary" type="button" value="Delete" onClick={() => { props.deleteEmployee(props.emp.empName)}} />
            </div>
        </div>
    )
}