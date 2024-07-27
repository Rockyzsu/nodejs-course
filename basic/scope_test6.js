let num = 0;
function getNum() {
  if (!num) {
    let num = 1;
    console.log("in side num ", num);
  }
  return num;
}

const result = getNum();
console.log(result); // 0
