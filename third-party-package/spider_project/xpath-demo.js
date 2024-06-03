const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');

const html = `<div>
               <ul>
                 <li class="item">Item 1</li>
                 <li class="item">Item 2</li>
               </ul>
             </div>`;

const $ = cheerio.load(html);
const dom = new JSDOM($.html()).window.document;

// 使用XPath查询
const items = JSDOM.fragment(`<ul>${$.html()}</ul>`).querySelectorAll('li.item');

console.log(Array.from(items).map(item => item.textContent)); // 输出：["Item 1", "Item 2"]