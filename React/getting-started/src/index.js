import ReactDOM from "react-dom";
import React from "react";
import UserComponent from "./employee/EmpoyeeList";

var renderElement = ReactDOM.createRoot(document.getElementById("root"));
renderElement.render((
    <>
        <UserComponent></UserComponent>
    </>
));
