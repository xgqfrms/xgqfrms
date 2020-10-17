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

function FBIWarning() {
  console.warn(`控制台被打开了`);
  console.error(`控制台被打开了`);
}

// ??? !function
!function () {
  const id = setInterval(() => {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (Math.abs(after - before) > 100) {
      FBIWarning();
      clearInterval(id)
    }
  }, 1000);
}();
