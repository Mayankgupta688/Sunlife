// https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NR
// https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SA13
import { useState, useEffect } from "react";
import Axios from "axios";

export default function CreateCustomHooks() {
    var [clockData] = useClock();
    var [sbiStock] = useStockPrice("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");
    var [wareeStock] = useStockPrice("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SA13");
    return (
        <>
            <h1>Current Time: {clockData}</h1>
            <h1 style={{color: sbiStock.color}}>SBI Share Price: {sbiStock.price}</h1>
            <h1 style={{color: sbiStock.color}}>Waree Stock Price: {wareeStock.price}</h1>
        </>
    )
}

function useStockPrice(url) {
    var [stockPrice, setStockPrice] = useState({
        price: 0,
        color: "green"
    });
    
    useEffect(() => {
        setInterval(() => {
            Axios.get(url).then((response) => {
                
                if (response.data.data.pricecurrent == stockPrice.price) {
                    setStockPrice({ ...stockPrice });
                } 
                
                debugger
                
                setStockPrice({
                    price: response.data.data.pricecurrent,
                    color: response.data.data.pricecurrent > stockPrice.price ? "green" : "red"
                });
            })
        }, 1000)
        
    }, [])
    
    return [stockPrice];
}

function useClock() {
    var [current, setCurrentTime] = useState(currentTime());
    
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(currentTime())
        }, 1000)
    })
    
    function currentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    return [current];
}