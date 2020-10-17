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

const log = console.log;


(function () {
  "use strict";
  const devtools = {
    isOpen: false,
    orientation: undefined,
  };
  // offset 偏移量
  const threshold = 160;
  const emitEvent = (isOpen, orientation) => {
    // CustomEvent
    window.dispatchEvent(new CustomEvent('devtoolschange', {
      detail: {
        isOpen,
        orientation,
      },
    }));
  };
  const main = ({ emitEvents = true } = {}) => {
    // 检测是否达到设定的 offset 阈值
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    const orientation = widthThreshold ? 'vertical' : 'horizontal';
    if (!(heightThreshold && widthThreshold) && ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
    ) {
      if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
        emitEvent(true, orientation);
      }
      devtools.isOpen = true;
      devtools.orientation = orientation;
    } else {
      if (devtools.isOpen && emitEvents) {
        emitEvent(false, undefined);
      }
      devtools.isOpen = false;
      devtools.orientation = undefined;
    }
  };
  main({ emitEvents: false });
  setInterval(main, 500);
  // CJS / ESM
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = devtools;
  } else {
    window.devtools = devtools;
  }
})();
