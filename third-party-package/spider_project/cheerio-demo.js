
const cheerio = require("cheerio");
const body = `<html><title>Hello World</title></html>`;
let $ = cheerio.load(body);
const title = $("title").text();
console.log(title);