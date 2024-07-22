debugger;

function abc() {


    function bbc() {

        function ccc() {

            debugger;
            console.log(x)
        }

        ccc()

        console.log(x)
    }

    bbc();

    console.log(x)
}

abc();

