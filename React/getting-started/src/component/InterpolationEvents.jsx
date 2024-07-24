export default function Abc() {
    var userName = "Mayank1";
    var age = 11;
    
    function complexLogic() {
        if (userName === "Mayank" && age === 12) {
            return <h2>Hello {userName}</h2>;
        } else if (userName === "Mayank" && age > 12) {
            return <h2>Hello Mayank Gupta Age is greater than 12</h2>;
        } else {
            return <h2>Hello User</h2>;
        }
    }
    
    return (
        <>
            <h1>Hello World from TechnoFunnel</h1>
            {complexLogic()}
            {userName === "Mayank" ? <h1>A</h1> : <h2>B</h2>}
        </>
    )
}