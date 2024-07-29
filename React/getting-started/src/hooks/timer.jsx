import { useState } from "react";

export default function TimerComponent() {
    
    console.time("Mayank")
    var [timer, setTimer] = useState(0);
    var [time, setTime] = useState("10 :0 : 0");
    
    var [displayData, setDisplayData] = useState({
        timer: 0,
        time: currentTime()
    });

    var [displayDataArr, setDisplayDataArr] = useState([0, currentTime()]);
    
    function currentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    setTimeout(() => {
        setTimer(timer + 1);
        setTime(currentTime());
        
        setDisplayData({
            time: currentTime(),
            timer: displayData.timer + 1
        });
        
        setDisplayDataArr([displayDataArr[0] + 1, currentTime()]);
    }, 1000);
    
    console.timeEnd("Mayank")
    
    return (
        <>
            <h1>The Updated Current Timer is: {displayDataArr[0]}</h1>
            <h2>The Current Time is: {displayDataArr[1]}</h2>
        </>
    )
}
