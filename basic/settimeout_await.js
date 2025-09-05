async function sleep(params) {
  return {
    then(resolve) {
      setTimeout(resolve, params);
    },
  };
}

(async () => {
  console.log("Start");
  await sleep(1000);
  console.log("1 second later");
})();
