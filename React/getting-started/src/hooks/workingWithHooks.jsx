import { useState, useEffect, useRef } from "react";

export default function HooksImplementation() {
    var [count, setCount] = useState(0);
    var [time, setTime] = useState(currentTime());
    
    var status = useRef(0);
    
    useEffect(() => {
        setInterval(() => {
            setTime(currentTime());
        }, 1000)
    }, []);
    
    useEffect(() => {
        status.current = status.current + 1;
    })
    
    function currentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    function updateCount() {
        setCount(count + 1);
    }
    
    function updateStatus() {
        alert("Update Count is: " + status.current)
    }
    return (
        <>
            <h1>Current Time is: {time}</h1>
            <h2>Current Count is: {count}</h2>
            <input type="button" value="Update Count" onClick={updateCount} />
            <input type="button" value="Show Update Status" onClick={updateStatus} />
            <Abc></Abc>
        </>
    )
}

function Abc() {
    debugger;
    return <h1>Hello</h1>
}