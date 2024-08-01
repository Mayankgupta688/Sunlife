import React from "react";
import ReactDOM from "react-dom"; 
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {rootReducer} from "./reducers/index";
debugger;
var applicationStore = createStore(rootReducer);
debugger;

var rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render((
    <Provider store={applicationStore}>
        <App></App>
    </Provider>
))
