function fetchImage(src) {
  return new Promise((res, rej) => {
    const img = {};
    img.onload = res;
    img.onerror = rej;
    img.src = src;
  });
}

fetchImage("https://baidu.com/test.jpg").then(
  () => console.log("image load"),
  () => console.log("image error")
);
