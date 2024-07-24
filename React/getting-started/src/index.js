import ReactDOM from "react-dom";
import React from "react";
import UserComponent from "./component/PropsAreReadOnly";
var renderElement = ReactDOM.createRoot(document.getElementById("root"));


var employee = {
    name: "TechnoFunnel",
    age: 300
}

var data = [10, 20, 30]
console.dir(employee)
setTimeout(() => {
    console.dir(employee)
}, 10000)

renderElement.render((
    <>
        <UserComponent userName="Mayank" userAge="10" {...employee} employee={{...employee}} data={data} ></UserComponent>
    </>
));
