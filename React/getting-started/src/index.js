import ReactDOM from "react-dom";
import React from "react";
import UserComponent from "./statefull/GetStockValue";

var renderElement = ReactDOM.createRoot(document.getElementById("root"));
renderElement.render((
    <>
        <UserComponent></UserComponent>
    </>
));
