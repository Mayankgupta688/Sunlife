export default function flightReducer(flightStore = [], action) {
    if (action.type == "add_flight") {
        return [
            { flightName: "Flight Mayank", flightCost: 10 },
            { flightName: "Flight Anshul", flightCost: 10 },
            { flightName: "Flight Ankit",  flightCost: 10 },
            { flightName: "Flight Meha",   flightCost: 10 } 
        ]
    }
    
    if (action.type == "delete_flight") {
        var newFlightList = flightStore.filter((flight) => {
            return flight.flightName != action.payload.flightName
        })
        return newFlightList;
    }
    
    return flightStore;
}