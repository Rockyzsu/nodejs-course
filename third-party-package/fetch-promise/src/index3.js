async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts/2";
    const resp1 = await fetch(url);
    let obj1 = await resp1.json();
    console.log(obj1);
}

console.log("start");
getData();
console.log("end");
