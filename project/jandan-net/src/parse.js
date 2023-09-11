const cheerio = require("cheerio");

function parse(content) {
  const $ = cheerio.load(content);
  let result = [];
  $("ol.commentlist > li").each(function () {
    let comment_id = $(this).attr("id");
    console.log("comment-id", comment_id);
    comment_id = comment_id.split("-")[1];
    console.log("id ", comment_id);
    let author = $(this).find("div.row > div.author > strong").text();
    let content = $(this).find("div.row > div.text > p").text();
    let vote = $(this)
      .find("div.row > div.jandan-vote > span.tucao-like-container > span")
      .text();
    let current = new Date();

    result.push({
      comment_id: comment_id,
      author: author,
      content: content,
      vote: Number(vote),
      part: "treehole",
      updated: current.toDateString(),
    });
  });
  return result;
}

module.exports = parse;
