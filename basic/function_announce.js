// it will has bug of below code
// scope raise issue
var condition = false;
if (condition) {
    function sayMoo() {
        return "TrueMoo"
    }
} else {
    function sayMoo() {
        return "FalseMoo"
    }
}

var result = sayMoo()
console.log(result)
