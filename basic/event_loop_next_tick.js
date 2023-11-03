const nt_recursive = () => {
  console.log("2");
  process.nextTick(nt_recursive);
};

nt_recursive();

console.log("end");

setInterval(() => {
  console.log("hi");
}, 10);
