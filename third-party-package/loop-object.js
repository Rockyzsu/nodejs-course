// let responseData = {"status": 1, "message": "OK", "results": {"id": "ucyo", "message": "", "ranking": {"1": {"15962": {"ranking_id": "i7qw", "ranking_name": "Partnership"}}},"2":[]}, "calling_id": 104356}
// let responseData = {"status": 1, "message": "OK", "results": {"id": "ucyo", "message": "", "ranking": {"1": {"15962": {"ranking_id": "i7qw", "ranking_name": "Partnership"}}},"2":[]}, "calling_id": 104356}
// empty 
let responseData ={"status": 1, "message": "OK", "results": {"id": "ppqg", "message": "", "ranking": {"1": [],"2":[]}}, "calling_id": 82650}
// console.log(Object.keys(rankingInfo["1"])[0]);
const rankingInfo = responseData.results.ranking;
let ranking_id = null;
let userOjb = null;
console.log(rankingInfo);

if (rankingInfo?.["2"] && Object.keys(rankingInfo["2"]).length>0) {

  userOjb = Object.keys(rankingInfo["2"])[0];
  ranking_id = rankingInfo["2"][userOjb]["ranking_id"];

} else if (rankingInfo?.["1"] &&  Object.keys(rankingInfo["1"]).length>0) {

  userOjb = Object.keys(rankingInfo["1"])[0];
  ranking_id = rankingInfo["1"][userOjb]["ranking_id"];

} else {
  console.log('', "no need to execute internal ranking update");
}

console.log(ranking_id);