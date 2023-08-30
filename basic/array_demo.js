var colors = ["red", "green", "black", "grey"];
colors.forEach(function (i) {
  console.log(`i like ${i} color`);
});

var b = [1, 2, 3];
var c = [4, 5, 6];
var d = b.concat(c);

console.log(d);
console.log(d.length);
len = d.length;
for (var i = 0; i < len; i++) {
  item = d.pop();
  console.log(item);
}

console.log(d);

for (var j in colors) {
  console.log(j);
}
