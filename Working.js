// JavaScript is multi Threaded Architecture, with Single Thread (Stack) working Continuesly.

// For Async Task, we have Web Api, working in parallel.

var i = 10;

setTimeout(function One() {
    console.log("Hello")
}, 35000)

setTimeout(function Two() {
    console.log("Hello")
}, 45000)

setTimeout(function Three() {
    console.log("Hello")
}, 35000)


for(var j = 0; j< 10; j++) {
    console.log(j)
}