import { useState } from "react";
import Axios from "axios";

export default function StockValue() {

    var [stockValue, setStockValue] = useState({
        stockPrice: 0,
        color: "green"
    });
    
    setTimeout(() => {
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
            setStockValue((oldValue) => {
                if (response.data.data.pricecurrent == oldValue.stockPrice) {
                    return {
                        stockPrice: response.data.data.pricecurrent,
                        color: stockValue.color
                    };
                }
                return {
                    stockPrice: response.data.data.pricecurrent,
                    color: response.data.data.pricecurrent > oldValue.stockPrice ? "green" : "red"
                }
            })
            
        })
    }, 1000)
    
    return (
        <>
            <h1 style={{color: stockValue.color}}>Stock Vale for SBI is { stockValue.stockPrice }</h1>
        </>
    )
}