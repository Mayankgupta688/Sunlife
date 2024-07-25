class Employee {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    showData() {
        alert(this.name);
    }
}

var abc = new Employee("Mayank", 10); 
var bbc = new Employee("Anshul", 20); 

// 100 => 200 + 2 = 202 JavaScript

function randomFunction() {
    alert(this.name);
}

var employee = {
    name: "Ankit",
    age: 20
}

var employeeOne = {
    name: "Anshul",
    age: 20
}

class Employee {
    constructor(name) {
        this.name = "AAA"
    }

    showData() {
        alert(this.name);
    }
}

debugger;
var newObject = new Employee();
newObject.showData();
debugger;
randomFunction()
randomFunction.call(employee);
randomFunction.call(employeeOne);
randomFunction.call(newObject);


// Prototypical Inheritence / Prototypical Chaining