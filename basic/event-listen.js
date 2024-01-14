// 引入events模块
const EventEmitter = require('events');

// 创建一个自定义的事件发射器实例
const myEmitter = new EventEmitter();

// 监听事件
myEmitter.on('myEvent', (data) => {
  console.log('事件被触发了！数据是:', data);
});

// 触发事件
myEmitter.emit('myEvent', 'Hello, Event!');

// 也可以使用once()方法监听事件，该事件只会被触发一次
myEmitter.once('onceEvent', () => {
  console.log('这个事件只会被触发一次！');
});

// 触发一次性事件
myEmitter.emit('onceEvent');
myEmitter.emit('onceEvent'); // 这次不会触发

