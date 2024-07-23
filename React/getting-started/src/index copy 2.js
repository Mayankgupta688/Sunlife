import ReactDOM from "react-dom";
import React from "react";

var renderElement = ReactDOM.createRoot(document.getElementById("root"));

renderElement.render(React.createElement("div", "", [
    React.createElement("div", {}, React.createElement("p", {}, "Hello")),
    React.createElement("div", {}, React.createElement("p", {}, [
        React.createElement("div", {}, React.createElement("p", {}, "Hello")),
        React.createElement("div", {}, React.createElement("p", {}, "Hi"))
    ])),
]));

renderElement.render((
    <>
        <div>
            <div>
                <p>Hello</p>
            </div>
            
            <div>
                <div>
                    <p>Hello</p>
                </div>
                
                <div>
                    <div>
                        <p>Hello</p>
                    </div>
                    
                    <div>
                        <div>
                            <p>Hello</p>
                        </div>
                        
                        <div>
                            <p>HI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
));







{/* 
<div>
    <div>
        <p>Hello</p>
    </div>
    
     <div>
        <div>
            <p>Hello</p>
        </div>
        
        <div>
            <div>
                <p>Hello</p>
            </div>
            
            <div>
                <div>
                    <p>Hello</p>
                </div>
                
                <div>
                    <p>HI</p>
                </div>
            </div>
        </div>
    </div>
</div> 
*/}