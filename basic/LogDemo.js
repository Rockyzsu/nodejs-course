const LogConsole = (req, msg) => {
  const url = req?.originalUrl || "";
  console.log(new Date().toISOString() + " " + url + " " + JSON.stringify(msg));
};

LogConsole("", "Error");
