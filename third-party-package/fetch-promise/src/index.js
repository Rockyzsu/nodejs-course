const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((js) => {
        return js.title;
    })
    .then((arg) => {
        console.log(arg);
    });
