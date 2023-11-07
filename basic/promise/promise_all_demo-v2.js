var promise = "promise";
var thread = "thread";
var wish = Promise.resolve("I wish");
var say_no = Promise.reject("i say no !!");
let array = [promise, thread, wish, say_no];

Promise.all(array).then((result) => {
  console.log(result);
}).catch((err)=>{
  console.log(err);
});
