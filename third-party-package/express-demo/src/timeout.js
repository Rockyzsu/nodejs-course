const express = require("express");
const app = express();
const port = 7000;

app.use(express.json()); // 允许处理json

app.get("/", (req, res) => {
    console.log(new Date());
    setTimeout(() => {
        res.send("OK");
    }, 2000);
    console.log(new Date());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
