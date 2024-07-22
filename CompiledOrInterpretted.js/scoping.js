debugger;

// "var" keywords are function scope

function abc() {

    var x = "";

    function bbc() {


        var x = "";
        function ccc() {
            

            debugger;
            x = 100;
            if (true) {
                let x = "adsa"
            
            }
        }

        ccc()

        console.log(x)
    }

    bbc();

    console.log(x)
}

abc();

console.log(x)