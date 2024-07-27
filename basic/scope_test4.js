var words = ["function", "scope"];
for (var i = 0; i < words.length; i++) { // 第二个loop到了i=7之后，不满足这个条件，所以不会再执行这个loop了
  var word = words[i];
  for (var i = 0; i < word.length; i++) {
    console.log("char ", i, word[i]);
  }
}
