const fetch = require("node-fetch");
async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const resp1 = await fetch(url);

    const url2 = "https://jsonplaceholder.typicode.com/posts/2";
    const resp2 = await fetch(url2);

    const [obj1, obj2] = await Promise.all([resp1, resp2]);
    //   let obj1 = await resp1.json();
    console.log(await obj1.json());
    console.log(await obj2.json());
}

console.log("start");
getData();
console.log("end");
