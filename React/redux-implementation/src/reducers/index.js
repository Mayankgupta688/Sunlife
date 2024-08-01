import { combineReducers } from "redux";
import flightReducer from "./flightReducer";
import employeeReducer from "./employeeReducer";


// store = {employee = [], flights: []}
export const rootReducer = combineReducers({
    employee: employeeReducer,
    flight: flightReducer
})