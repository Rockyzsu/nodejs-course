const run_immediate = () => {
  setImmediate(() => {
    console.log("immediate");
    run_immediate();
  });
};

run_immediate();

setInterval(() => {
  console.log("hi");
}, 10);
