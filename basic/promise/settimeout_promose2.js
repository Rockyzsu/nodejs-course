const setTimeout_promise = require('util').promisify(setTimeout);

async function customTimeout() {
  return await setTimeout_promise(3000).then(()=>{console.log('this s a callback')});
}

customTimeout();
