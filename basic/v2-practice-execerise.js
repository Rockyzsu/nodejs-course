/*
 * @Author: Rockyzsu jinweizsu@gmail.com
 * @Date: 2023-10-14 09:27:49
 * @LastEditors: Rockyzsu jinweizsu@gmail.com
 * @LastEditTime: 2023-10-14 09:29:33
 * @FilePath: /nodejs-course/basic/v2-practice-execerise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const async1 = async (resolve) => {
	console.log('async1 start');
	await async2();
	resolve();
	console.log('after resolve');
};

const async2 = async () => {
	console.log('async2');
};

console.log('after func define');

setTimeout(() => {
	console.log('set timeout');
}, 0);

new Promise(async (resolve) => {
	await async2();
	console.log('promise running');
	async1(resolve);
	console.log('promise end');
}).then(() => {
	console.log('then start');
	setTimeout(() => {
		console.log('timeout trigger');
	}, 0);
});

console.log('script end');
