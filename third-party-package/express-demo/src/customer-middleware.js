function express() {
  var funcs = [];
  const app = function (req, res, next) {
    var i = 0;
    function next() {
      task = funcs[i];
      i++;
      if (!task) {
        console.log("end");
        res.write('Helllo World')
        res.end();
        return;
      }

      task(req, res, next);
    }

    next();
  };

  app.use = function (task) {
    funcs.push(task);
  };
  return app;
}

var app = express();
var http = require("http");
http.createServer(app).listen(7000, () => {
  console.log("listen to port 7000");
});

function middlewareA(req, res, next) {
  console.log("before A next");
  next();
  console.log("After A next");
}

function middlewareB(req, res, next) {
  console.log("before B next");
  next();
  console.log("After B next");
}

function middlewareC(req, res, next) {
  console.log("before C next");
  next();
  console.log("After C next");
}


app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);