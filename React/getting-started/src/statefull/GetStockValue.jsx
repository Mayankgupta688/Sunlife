import { Component } from "react";
import Axios from "axios";

export default class GetStockValue extends Component {

    constructor() {
        super();
        this.state = {
            sbiPrice: "0",
            randomNumber: 0
        }
    }
    
    render() {
        return (
            <>
                <h1>SBI Stock Price is: {this.state.sbiPrice}</h1>
                <h2>The Count is {this.state.randomNumber}</h2>
                <input type="button" value="Click to update" />
            </>
        )
    }
    
    componentDidMount() {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
                this.setState({
                    sbiPrice: response.data.data.pricecurrent
                });
            })
            
            // fetch("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then(response => response.json()).then(response => {
            //     this.setState({
            //         sbiPrice: response.data.pricecurrent
            //     });
            // })
        }, 1000)
    }
}