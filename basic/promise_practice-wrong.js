    const axios = require("axios");
    url = "http://127.0.0.1:7000/";

    function getWebData() {
    return new Promise((resolve, reject) => {
        console.log("Start");
        return axios.get(url);
    });
    }

    async function promiseFunc() {
    task = await getWebData();
    console.log(typeof task);

    task
        .then((res) => {
        console.log("in then");
        const data = res.data;
        console.log(data);
        return data;
        })
        .catch((err) => {
        console.log("hit error");
        console.log(err);
        });
    }

    promiseFunc();
    console.log("End");
