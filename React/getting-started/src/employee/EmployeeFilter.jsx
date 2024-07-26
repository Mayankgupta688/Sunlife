import { Component } from "react";

export default class EmployeeFilter extends Component {
    
    constructor() {
        super();
        this.state = {
            filterText: ""
        }
    }
     
    updateFilterText(event) {
        this.setState({
            filterText: event.target.value
        })
    }
    
    filterEmployee(event) {
        debugger;
        this.props.filterEmployee(this.state.filterText);
        this.setState({
            filterText: ""
        })
    }
    
    render() {
        return(
            <>
                <label>Filter Employee: </label>
                <input type="text" onChange={this.updateFilterText.bind(this)} value={this.state.filterText} />
                <input type="button" value="Filter" onClick={this.filterEmployee.bind(this)} />
                <br/>
            </>
        )
    }
    
}