function PromiseType() {
    let promise = new Promise((resolve, reject) => {
        request(
            {
                encoding: null,
                url: url,
            },
            function (err, res, body) {
                console.log(body.toString());
                resolve(body.toString())
            }
        );
    });
    promise
        .then((data) => {
            console.log('then call back');
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

PromiseType()