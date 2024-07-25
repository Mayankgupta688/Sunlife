import { Component } from "react";
function ShowCurrentTimeStateless() {
    
    var timer = currentTime();   
    setInterval(() => {
        timer = currentTime();
        console.log(timer)
    }, 1000)   
    function currentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    return (
        <h1>Current Time is {timer}</h1>
    )
}
export default class ShowCurrentTime extends Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            userName: "Mayank",
            userAge: 20
        }
    }
    updateTimer() {
        setInterval(() => {
            this.setState({
                ...this.state,
                timer: this.currentTime(),
                userAge: this.state.userAge + 1
            })
            console.log(this.state.timer);
        }, 1000)
    }
    currentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.userAge % 2 == 0) {
            return false;
        }
        return true;
    }
    render() {
        return <h1>Current Time of {this.state.userName} having age: {this.state.userAge} is {this.state.timer}</h1>
    }
    componentDidUpdate() {
        debugger;
    }
    componentDidMount() {
        this.updateTimer();
    }
}