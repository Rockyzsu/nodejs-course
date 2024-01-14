const axios = require("axios");
const subStr = "42018502002747";
const visit = async () => {
  const reqUrl = "https://jandan.net/top-4h";
  [1, 2, 3, 4, 5].map(async (element) => {
    console.log(element);
    let respData = await axios.get(reqUrl);
    if (respData.status == 200) {
      console.log(respData.data.length);
      console.log(respData.data.includes(subStr) ? "Found" : "Not Found");
    }
  });
};

const visit_for_loop = async () => {
    const reqUrl = "https://jandan.net/top-4h";
    for(let element of [1, 2, 3, 4, 5]){
      console.log(element);
      let respData = await axios.get(reqUrl);
      if (respData.status == 200) {
        console.log(respData.data.length);
        console.log(respData.data.includes(subStr) ? "Found" : "Not Found");
      }
    }
  };


const visit_promise = async () => {
  const reqUrl = "https://jandan.net/top-4h";
  const promises = [1, 2, 3, 4, 5].map(async (element) => {
    console.log(element);
    let respData =  axios.get(reqUrl);
    return respData;
  });
  const result = await Promise.all(promises);
  result.map(item=>{
    if (item.status == 200) {
        // console.log(item.data.length);
        console.log(item.data.includes(subStr) ? "Found" : "Not Found");
      }
    console.log(item.data.length)
});
}
// visit();
// visit_for_loop()
visit_promise()

