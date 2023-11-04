"use strict";
var http = require("http");
var options = {
  host: "30daydo.com",
  port: 80,
  path: "/",
  method: "GET",
  headers: { "Content-Type": "application/json", "User-Agent": "Chrome Linux" },
};

var req = http.request(options);
var result = "";

req.once("response", (res) => {
  res.on("data", (chunk) => {
    result += chunk.toString();
  });

  res.on("end", () => {
    console.log(result);
  });
});

req.on("error", (err) => {
  console.error(err);
});

req.end()
console.log("end");
