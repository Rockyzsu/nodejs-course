const Mock = require("mockjs");
for (let i = 0; i < 10; i++) {
  const randomString = Mock.Random.string("lower", 10);
  console.log(i,randomString);

  const randomNum = Mock.Random.integer(1,100);
  console.log(i,randomNum);

  const randomObject = Mock.mock({
    'name':'@cname',
    'age|1-100':1,
    'email':'@email'
  })

  console.log(i,randomObject);
}
