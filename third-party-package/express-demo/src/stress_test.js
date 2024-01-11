const axios = require('axios')

async function stressTest(){
    // for(let i=0;i<10;i++){
    // result = axios.get('http://127.0.0.1:7000/')
    // }

    const result = await Promise.all([1,2,3,4,].map(i=>axios.get('http://127.0.0.1:7000/')))
    console.log(result)
}



stressTest()