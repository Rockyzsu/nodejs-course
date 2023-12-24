const LogErrorConsole = (req, msg) => {
  const result = req?.body ?? "";
  console.log(result);
  console.log(req?.body ?? "");
  console.log(msg);
  console.log(new Date().toISOString()+ result+' '+msg );
};

const msg = "hello world";
LogErrorConsole("", msg);
