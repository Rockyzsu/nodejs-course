const getTotal = () => {
  const numbers = [1, 2, 3, 4, 5];
  const value = numbers.reduce((s, start_value) => {
    console.log("start ", start_value);
    console.log("end ", s);
    return s + start_value;
  }, 0);

  console.log("result ", value);
};

getTotal();
// console.log(value);
