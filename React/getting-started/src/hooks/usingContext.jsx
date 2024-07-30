import { useState, createContext, useContext } from "react";

import DataContext from "./contextData";

export default function GrandFather() {
    
    var [familyDetails, setFamilyDetails] = useState({
        village: "Haryana",
        surName: "Gupta" 
    })
    
    function updateData() {
        setFamilyDetails({
            ...familyDetails,
            surName: "ABC"
        })
    }
    
    function addData(inputData) {
        debugger;
        setFamilyDetails({
            ...familyDetails,
            ...inputData
        });
    }
    
    return (
        <>
            <DataContext.Provider value={{
                familyDetails: familyDetails,
                updateData: updateData,
                addData: addData
            }}>
            
                <h1>This is GrandFather {familyDetails.village} {familyDetails.surName}</h1>
                {familyDetails.name != null && (<h2>User name is {familyDetails.name} {familyDetails.age}</h2>)}
                <hr />
                <Father familyDetails={familyDetails}></Father>
                
            
            </DataContext.Provider>
            
            
        </>
    )
}

function Father() {
    return (
        <>
            <h1>This is Father</h1><hr/>
            <Child></Child>
        </>
    )
}

function Child() {
    return (
        <>
            <h1>This is Child</h1><hr/>
            <GrandChild></GrandChild>
        </>
    )
}

function GrandChild() {
    debugger;
    var dataFromContext = useContext(DataContext)
    return (
        <>
            <h1>This is GrandChild {dataFromContext.familyDetails.surName}</h1><hr />
            <GrandGrandChild></GrandGrandChild>
        </>
    )
}


function GrandGrandChild() {
    debugger;
    var dataFromContext = useContext(DataContext)
    
    function sendDataToParent() {
        debugger;
        dataFromContext.addData({
            name: "Mayank",
            age: 10,
            designation: "Director"
        })
    }
    return (
        <>
            <h1>This is Grand Grand Child {dataFromContext.familyDetails.village}</h1>
            <input type="button" value="Update Contec=xt Dataage" onClick={sendDataToParent} /> <hr />
        </>
    )
}