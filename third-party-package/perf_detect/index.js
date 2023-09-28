var mem = require("memeye");
const fs = require("fs");
mem();
const source_file = "temp/source.txt";
const target_file = "temp/target.txt";

// function copy(){

//     var source = fs.createReadStream(source_file)
//     var target = fs.createWriteStream(target_file)
//     source.pipe(target)
//     // source.on('end',()=>{console.log("Done")})
// }

function copy() {
  fs.readFile(source_file, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFile(target_file, data.toString(), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    copy();
  }
  console.log('done')
}, 15000);
