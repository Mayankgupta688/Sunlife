import { useState } from "react";
import "./updateData.css"

export default function TimerComponent() {
    
    var [timer, setTimer] = useState(110);
    var [displayTimer, setDispayTimer] = useState(110);
    
    function updateTimer(event) {
        setTimer(event.target.value);
    }
    
    function updateDisplayValue() {
        setDispayTimer(timer)
    }
    
    return (
        <div>
            <h1>The Updated Current Timer is: {displayTimer}</h1><hr /><br /><br />
            <h2>Timer Value : {timer}</h2>
            Enter New Value for Timer: <input value={timer} type="text" onChange={updateTimer} /><br/><br/>
            <input type="button" value="Update Time" onClick={updateDisplayValue} />
        </div>
    )
}
