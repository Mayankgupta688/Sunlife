import ReactDOM from "react-dom";
import React from "react";
import HeaderComponent from "./component/Header";
import FooterComponent from "./component/Footer";
import MainComponent from "./component/Main";
var renderElement = ReactDOM.createRoot(document.getElementById("root"));
renderElement.render((
    <>
        <HeaderComponent></HeaderComponent>
        <MainComponent></MainComponent>
        <FooterComponent></FooterComponent>
    </>
));
