function parse(content) {
  let result = [];
  for (let item of content.result) {
    console.log(item);
    result.push(item);
  }

  return result;
}

module.exports = parse;
