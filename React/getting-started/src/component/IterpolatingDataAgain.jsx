export default function IterpolatingData() {
    var username = "Anshul";
    var abc = () => {
        return "Aniket"
    }
    var userDetails = {
        name: abc(),
        age: 20
    }
    function myFunction() {
        return <h2>User Age is 10</h2>
    }
    
    function myFunctionDesignation() {
        return "Designation: VP"
    }
    
    function clickAlert(parameter) {
        alert(userDetails[parameter]);
    }
    
    function clickAlertParamMissing() {
        alert("Hi")
    }
    
    function clickWithEventObject(event) {
        alert("Event was of Type " + event.type);
    }
    
    function clickWithEventAndObject(event, userName) {
        alert("Event was of Type " + event.type + " " + userName);
        return "Function Executed"
    }
    
    var x = (event) => { var data = clickWithEventAndObject(event, "Mayank");  console.log(data)}
    
    return (
        <>
            <h1>My Name is {username} {new Date().getHours() + " : " + new Date().getMinutes()}</h1>
            {myFunction()}
            <h3>{myFunctionDesignation()}</h3>
            <input type="button" value="Click" onClick={() => { clickAlert("name") }} />
            <input type="button" value="Click" onClick={() => { clickAlert("name") }} />
            <input type="button" value="Click without Param" onClick={clickAlertParamMissing} />
            <input type="button" value="Click with Event" onClick={clickWithEventObject} />
            <input type="button" value="Click with Event And Object" onClick={x} />
            <input type="button" value="Click with Event And Object" onClick={(event) => { var data = clickWithEventAndObject(event, "Mayank"); }} />
        </>
        
    )
}