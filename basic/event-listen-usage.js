// 引入events模块
const EventEmitter = require('events');

// 创建一个自定义的事件发射器实例
const myEmitter = new EventEmitter();

// 监听事件
myEmitter.on('myEvent', (data) => {
  console.log('事件被触发了！数据是:', data);
});


setInterval(() => {
  myEmitter.emit('myEvent', 'Hello, Event!' + new Date().toISOString());
}
, 5000);

