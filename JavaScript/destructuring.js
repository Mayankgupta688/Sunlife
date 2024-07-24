var employee ={
    name: "Mayank",
    age: 10,
    designation: "Developer"
}

var {name, age} = employee;

console.log(name);
console.log(age);

var arrayData = [10, 20, 30, 40, 3, 4, 6, 8, 9, 4];

var [ a, b, ...c ] = arrayData;

debugger;