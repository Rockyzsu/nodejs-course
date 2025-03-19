// import { fetch } from "node-fetch";

const url = "https://swapi.dev/api/people/?format=json";

const promise = fetch(url);
promise
  .then(
    (resp) => {
      if (resp.ok) {
        console.log(resp.status); // 200
        // console.log(resp.text()); // OK
        return resp.json(); // 解析为json格式
      } else {
        console.log("status:", resp.status);
      }
    },
    (error) => {
      console.log("error", error);
    }
  )
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{console.log('DOne')}); // { count: 82, next: null, previous: null, results: [ ... ] }
