console.log(a);

// 报错，找不到a
function getThis() {
  var a = 10;
}

// 不报错，只是a是undefined
{
    var a=0;
}

// 不报错，只是a是undefined
var a = 0;
