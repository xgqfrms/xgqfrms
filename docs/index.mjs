"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

console.warn("%c\n👻 被我发现了吧！ FBI警告：  不要搞事情！%c\n\ncontact: https://www.xgqfrms.xyz/about/", "font-size: 23px; color: red;", "color: green;");


// Generator
class App {
  constructor() {
    this.author = "xgqfrms";
    this.date = new Date().toLocaleString();
    this.copyright = `copyright@xgqfrms 2012 - ${new Date().getFullYear()}`;
  }
  init() {
    log(`%cauthor is ${this.author}`, `background: #000; color: #0f0f;`);
    log(`%ctoday is ${this.date}`, `background: #000; color: #fff;`);
    log(`%cthis.copyright`, `background: #000; color: #f0f;`);
  }
}


export default App;

export {
  App,
};
