import { Component } from "react";

export default class TrackInputValue extends Component {
    constructor() {
        debugger;
        super();
        this.state = {
            userName: "Mayank",
            userAge: 10,
            userDesignation: "VP",
            userSalary: 10
        }
        
        // Value of this is Class, Overridden function class context...
        this.trackInput = this.trackInput.bind(this);
    }
    
    trackInput(event) {
        debugger;
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }
    
    trackInputOne = (event) => {
        debugger;
        alert(event.target.value)
        this.setState({
            userName: event.target.value
        })
    }
    
    render() {
        debugger;
        return (
            <>
                UserName: <input id="userName" type="text" value={this.state.userName} onChange={this.trackInput.bind(this)} /><br/><br/>
                UserAge: <input id="userAge" type="text" value={this.state.userAge} onChange={this.trackInput.bind(this)} /><br/><br/>
                UserDesignation: <input id="userDesignation" type="text" value={this.state.userDesignation} onChange={this.trackInput.bind(this)} /><br/><br/>
                UserSalary: <input type="text" id="userSalary" value={this.state.userSalary} onChange={this.trackInput.bind(this)} /><br/><br/>
                <h3>User Entered: {this.state.userName}</h3>
                <h3>User Entered: {this.state.userAge}</h3>
                <h3>User Entered: {this.state.userDesignation}</h3>
                <h3>User Entered: {this.state.userSalary}</h3>
            </>
        )
    }
}