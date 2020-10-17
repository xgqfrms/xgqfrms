"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-10-01
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
 * @best_solutions
 *
 */

// const log = console.log;

let times = 1;

var abc = document.createElement('div');

Object.defineProperty(abc, `id`, {
  // 数据劫持
  get: function () {
    // console.log(`控制台被打开了`, x);
    console.warn(`控制台被打开了`, times);
    console.error(`控制台被打开了`, times);
    times++;
  },
  // others
});

console.log(abc);



