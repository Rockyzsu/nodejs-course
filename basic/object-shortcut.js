const text = "hello";
const message = { text };
console.log(message);

const property = "color";
const eye = { [property]: "green" };
console.log(eye);

const property2 = ()=>{
return ["color","age"];
}
const [p1]=property2();
const eye2 = { p1: "green" };
console.log(eye2)
