const request = require("request");

const cheerio = require("cheerio");

// 有时候中文乱码问题
const iconv = require("iconv-lite");

const url = "http://30daydo.com";
const options = {
    url: url,
    headers: {
        "User-Agent": "My-App",
        // Authorization: "Bearer my-token",
        encoding: 'utf8',
    },
};

request(options, function (err, res, body) {
    let source = body.toString();
    let data = iconv.decode(body, "utf-8").toString(); // 有点多余
    
    
    let $ = cheerio.load(body.toString());
    const title = $("title").text();
    console.log(title);
});
