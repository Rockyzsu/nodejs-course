const promise1 = Promise.reject(0)
const promise2 = Promise.resolve(1)
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 1000)
})
Promise.any([promise1, promise2, promise3]).then(result => {
    console.log(result)
})

console.log('done')

const promise4 = Promise.reject(0)
const promise5 = Promise.reject(1)
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    }, 1000)
})
Promise.any([promise4, promise5, promise6]).then(result => {
    console.log(result)
}).catch(err => {
    console.log('err')
    console.log(err)
    console.log(err.errors[0])
    console.log(err.errors[1])
    console.log(err.errors[2])
})


const urls = [
'http://www.baidu.com',
'http://www.qq.com'
]


Promise.any(urls.map(url=>{
fetch(url).then(resp=>resp.text)

})).then(result=>console.log(result));


