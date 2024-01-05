const data = require("./data");
console.log(data);

const _ = require("lodash");
console.log(_.chain(data).sortBy("name").value());
