var outer = "Outer"
var copy

function outerFun() {
    var inner = "Inner"

    function innerFun() {

        console.log(outer);
        console.log(inner);
    }

    copy = innerFun;

}

outerFun()
copy()
