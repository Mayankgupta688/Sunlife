import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function MainPage() {
    return (
        <>
            <div style={{ padding: "30px" }}>
                <BrowserRouter>
                    <>
                        <nav>
                            <Link style={{marginRight: "20px"}} to="/home">Home</Link>
                            <Link style={{marginRight: "20px"}} to="/help">Help</Link>
                            <Link style={{ marginRight: "20px" }} to="/about">About</Link>
                            <Link style={{ marginRight: "20px" }} to="/random">Random</Link>
                            <Link style={{ marginRight: "20px" }} to="/randomone">RandomOne</Link>
                            <Link style={{ marginRight: "20px" }} to="/stock/SBI/1/5464">SBI</Link>
                            <Link style={{ marginRight: "20px" }} to="/stock/NALCO/Random/345">NALCO</Link>
                            <Link style={{marginRight: "20px"}} to="/stock/TATA/3/3213">NALCO</Link>
                        </nav><br /><br />
                        <h1>fgsfgisuf</h1>
                        
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/home" component={Home}></Route>
                            <Route exact path="/help" component={Help}></Route>
                            <Route exact path="/about" component={About}></Route>
                            <Route exact path="/stock/:stockName/:otherParam/:someOther" component={Stock}></Route>
                            <Route component={Unknown}></Route>
                        </Switch>  <br /><br /><hr />
                        
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/home" component={Home}></Route>
                            <Route exact path="/help" component={Help}></Route>
                        </Switch>
                        
                        <Route exact path="/home" component={Home}></Route>
                    </>
                </BrowserRouter>
            </div>   
        </>            
    )
}

function Home(props) {
    debugger;
    
    function redirectUser() {
        props.history.push("/help")
    }
    
    return (
        <>
            <h1>This is Home Page</h1>
            <input type="button" value="Redirect to Help" onClick={redirectUser} />
        </>
    )
}

function Help(props) {
    
    function goBack() {
        props.history.goBack()
    }
    
     return (
        <>
            <h1>This is Help Page</h1>
            <input type="button" value="Undo" onClick={goBack} />
        </>
    )
}

function About() {
    return <h1>This is About Page</h1>
}

function Unknown() {
    return <h1>Incorrect URL</h1>
}

function Gp() {
    return <h1>Gp</h1>
}

function Blackrock() {
    return (
        <>
            <h1>This is Blackrock</h1>
            <Route exact path="/stock/Mayank/Blackrock/gp" component={Gp}></Route>
        </>
    )
}

function Mayank() {
    return (
        <>
            <h1>This is Mayank</h1>
            <Route exact path="/stock/Mayank/Blackrock/:someOther" component={Blackrock}></Route>
        </>
    )
}

function Stock(props) {
    var [sbiData] = useStockPrice(props.match.params.stockName);
    return (
        <>
            <h1 style={{ color: sbiData.color }}>{props.match.params.otherParam} {props.match.params.someOther} Looking for Data for the Stock {props.match.params.stockName}: {sbiData.price}</h1>
            <Switch>
                <Route exact path="/stock/Mayank/:otherParam/:someOther" component={Mayank}></Route>
            </Switch>
        </>
    )
}


function useStockPrice(stockName) {
    var [stockPrice, setStockPrice] = useState({
        price: 0,
        color: "green"
    });
    
    useEffect(() => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
                
                if (response.data.data.pricecurrent == stockPrice.price) {
                    setStockPrice({ ...stockPrice });
                }
                
                debugger
                
                setStockPrice({
                    price: response.data.data.pricecurrent,
                    color: response.data.data.pricecurrent > stockPrice.price ? "green" : "red"
                });
            })
        }, 1000);
    }, []);
    return [stockPrice];
}