const LogErrorConsole = (req, msg) => {
  const result = req?.body ?? "";
  console.log(result);
  console.log(req?.body ?? "");
  console.log(msg);
  console.log(new Date().toISOString() + result + " " + JSON.stringify(msg));
};

LogErrorConsole('', 'hello world');
LogErrorConsole('',{'name':'job'})
LogErrorConsole('', [1,23,4]);
LogErrorConsole('',null);
LogErrorConsole('',undefined);
