// basic

var pattern = /not/
var pattern2 = new RegExp('not')


var str = 'this world is not real, it was virtual'

var result = pattern.test(str)
console.log(`result 1: ${result}`)

result = pattern2.test(str)
console.log(`result 2 : ${result}`);


// complicated

str = 'this is my world, REAL!!'
pattern = /real/i
result = pattern.test(str)
console.log(`result 3: ${result}`)


str = 'this is my world, REAL!!'
pattern = /[abc]/i
result = pattern.test(str)
console.log(`result 4: ${result}`)

str = 'a'
pattern = /[^a]/;
result = pattern.test(str)
console.log(`result 5: ${result}`)


str = '1234443'
pattern = /[1-4]/;
result = pattern.test(str)
console.log(`result 6: ${result}`)


str = 'Toyota car, is a safe car, big Toyota'
pattern = /Toy/
result = pattern.exec(str)
console.log(`result 7: ${result}`)
console.log(result)

str = 'Toyota car, is a safe car, big Toyota'
pattern = /Toy/g
result = pattern.exec(str)
console.log(`result 8: ${result}`)
console.log(result)

str = 'wooden bat , smelly cat , a fat cat'
pattern = /[bcf]at/g
result = str.match(pattern)
console.log(result)

str = 'wooden bat , smelly cat , a fat cat'
pattern = /[bcf]at/g
result = str.replace(pattern, 'dog')
console.log(result)


str = 'i1 i2 i3 i4 i5 i6 i7'
pattern = /i[^0-4]/ig
result = str.match(pattern)
console.log(result)


// back ref
console.log('back ref')
str = 'XaX'
pattern = /([XYZ])a\1/
result = str.match(pattern)
console.log(result)
if (result) {
    console.log("find it")
}

str = 'hack/user/1003/usea/'
pattern = /(user)\/\d+\/\1/
result = str.match(pattern)
console.log(result)
if (result) {
    console.log('find it')
} else {
    console.log("fail to find it")
}
//consle.log(str[result.index, 10])


//replace
//


str = '1234 7890'
pattern = /(\d{4}) (\d{4})/;
var new_result = str.replace(pattern, 'New number : $2 $1')
console.log(new_result)


//lazy match

str = 'helloXXX'
pattern = /\w*X/;
new_result = str.match(pattern)
console.log(typeof new_result)
if (new_result.length) {
    console.log(new_result[0])
}

str = 'helloXXX'
pattern = /\w*?X/;
new_result = str.match(pattern)
console.log(typeof new_result)
if (new_result.length) {
    console.log(new_result[0])
}

function trim(str) {
    //remove empty str in the end of the str
    var pattern = /^(\s*)|(\s*)$/g
    return str.replace(pattern, "")
}

var test_str = 'http://www.baidu.com     '
console.log(`after trime =====${trim(test_str)}====`)

var test_str2 = 'http://www.baidu.com   \t  \t'
console.log(`after trime =====${trim(test_str2)}====`)

const str_test = "FF1(10007)";

// 使用正则表达式匹配括号内的数字
const match = str_test.match(/\((\d+)\)/);

if (match) {
  const number = match[1]; // 第一个捕获组，即括号内的数字
  console.log(number); // 输出：10007
} else {
  console.log('没有找到括号内的数字');
}
