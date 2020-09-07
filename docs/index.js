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

// const log = console.log;

// Generator
class App {
  constructor() {
    this.author = "xgqfrms";
    this.date = new Date().toLocaleString();
    this.copyright = `copyright@xgqfrms 2012 - ${new Date().getFullYear()}`;
  }
  init() {
    const log = console.log;
    log(`%cauthor is ${this.author}`, `background: #000; color: #0f0f;`);
    log(`%ctoday is ${this.date}`, `background: #000; color: #fff;`);
    log(`%cthis.copyright`, `background: #000; color: #f0f;`);
  }
}


export default App;

export {
  App,
};
