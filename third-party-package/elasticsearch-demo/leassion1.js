require("dotenv").config();
var elasticsearch = require("elasticsearch");

var connectionstring = process.env.searchbox_url;

var client = new elasticsearch.Client({
    host: connectionstring,
    log: "debug",
});

function createIndex() {
    client.index(
        {
            index: "sample",
            type: "document",
            id: "2",
            body: {
                name: "has fuck girl",
                text: "long time fuck girl reliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.",
            },
        },
        function (error, response) {
            if (error) {
                console.log(err);
            } else {
                console.log(response);
            }
        }
    );
}
function search() {
    client
        .search({
            index: "sample",
            type: "document",
            body: {
                query: {
                    query_string: {
                        query: "fuck",
                    },
                },
            },
        })
        .then(
            function (resp) {
                // console.log(resp);
                for (let item of resp.hits.hits) {
                    let text = item._source.text;
                    console.log(text);
                }
            },
            function (err) {
                console.log(err.message);
            }
        );
}

// createIndex();
search();
console.log("END");
