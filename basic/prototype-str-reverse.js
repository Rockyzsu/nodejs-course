var print = console.log

String.prototype.reverse = function(){
return Array.prototype.reverse.apply(this.split('')).join('')
}

var str = "Javascript"

print(str.reverse())

