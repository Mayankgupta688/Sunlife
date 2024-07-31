import ReactDOM from "react-dom";
import React from "react";
import UserComponent from "./spa/MainPage";

var renderElement = ReactDOM.createRoot(document.getElementById("root"));

renderElement.render((
    <>
        <UserComponent></UserComponent>
    </>
));
