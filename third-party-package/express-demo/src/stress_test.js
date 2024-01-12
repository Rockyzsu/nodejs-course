const axios = require('axios')

async function stressTest(){
    // for(let i=0;i<10;i++){
    // result = axios.get('http://127.0.0.1:7000/')
    // }

    const result = await Promise.all([1,2,3,4,7,8,9,10,11,12,13,12,14].map(i=>axios.get('http://127.0.0.1:7000/')))
    // console.log(result)
    result.map(i=>console.log(i.data))
}



stressTest()