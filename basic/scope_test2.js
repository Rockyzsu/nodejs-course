//作用域测试

let read,write;
{
    let data = {};
    let write = function(key,val){
        data[key] = val;
    }
}


write('hello','name'); // write is not define


