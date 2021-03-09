import colors from 'colors/safe';
import { isPlainObject, isFunction, isArray } from 'emnida';
import {
  isBrowser,
  getStyleInfo,
  getCreatorColorsMsg,
  isIE,
  isIE9ToIE11,
  getImageMsg,
  supportsCanvas,
  asyncToSync,
} from './utils';

const DEFAULT_LABEL = {
  label: 'group',
};

if (!isBrowser()) {
  colors.enable();
}

if (isBrowser() && window.console && hasConsoleLogObject() && Function.prototype.bind) {
  const methods = ['log', 'error', 'warn', 'info', 'dir', 'assert'];

  methods.forEach(function(f) {
    console[f] = this.bind(console[f], console);
  }, Function.prototype.call);
}

function hasConsoleLogObject() {
  return typeof console.log === 'object';
}

function report(v = []) {
  v.forEach(vv => {
    switch (vv.constructor) {
      case Function: {
        vv();
        break;
      }
      default: {
        log(vv);
        break;
      }
    }
  });
}

/**
 * Return console arguments that included a style or not
 * @param {string|string[]} msg console message
 * @param {Object|Object[]} style style object
 * @returns {Array} Console arguments that included a style or not
 * @example
 * console.log(...getStyleMsg('Hello World', { color: 'red }));
 */
export function getStyleMsg(msg, style) {
  let _msg = msg;
  let _style = [];

  if (isArray(msg)) {
    _msg = msg.join(' ');
  }

  switch (true) {
    case isPlainObject(style): {
      if (isBrowser()) {
        if (!isIE9ToIE11()) {
          _msg = `%c${_msg}`;
          _style = [getStyleInfo(style)];
        }
      } else {
        const builder = getCreatorColorsMsg(style);

        if (builder) {
          _msg = builder(_msg);
        }
      }
      break;
    }
    case isArray(msg) && isArray(style): {
      if (isBrowser()) {
        if (!isIE9ToIE11()) {
          _msg = msg
            .reduce((acc, vv) => {
              acc.push(`%c${vv}`);
              return acc;
            }, [])
            .join(' ');

          _style = msg.reduce((acc, vv, i) => {
            const _style = style[i];

            if (isPlainObject(_style)) {
              acc.push(getStyleInfo(_style));
            } else {
              acc.push('');
            }
            return acc;
          }, []);
        }
      } else {
        _msg = msg
          .reduce((acc, vv, i) => {
            const _style = style[i];

            let builder;

            if (isPlainObject(_style)) {
              builder = getCreatorColorsMsg(_style);
            }

            if (builder) {
              acc.push(builder(vv));
            } else {
              acc.push(vv);
            }
            return acc;
          }, [])
          .join(' ');
      }
      break;
    }
  }
  return [_msg, ..._style];
}

/**
 * Write log message on the console tab
 * @param {string|string[]} [msg] console message
 * @param {Object|Object[]} [style] style object
 * @example
 * log('Hello World', { color: 'red' });
 */
export function log(msg, style) {
  console.log(...getStyleMsg(msg, style));
}

/**
 * Write error message on the console tab
 * @param {string|string[]} [msg] console message
 * @param {Object|Object[]} [style] style object
 * @example
 * error('Hello World', { color: 'red' });
 */
export function error(msg, style) {
  console.error(...getStyleMsg(msg, style));
}

/**
 * Write warn message on the console tab
 * @param {string|string[]} [msg] console message
 * @param {Object|Object[]} [style] style object
 * @example
 * warn('Hello World', { color: 'red' });
 */
export function warn(msg, style) {
  console.warn(...getStyleMsg(msg, style));
}

/**
 * Write information message on the console tab
 * @param {string|string[]} [msg] console message
 * @param {Object|Object[]} [style] style object
 * @example
 * info('Hello World', { color: 'red' });
 */
export function info(msg, style) {
  console.info(...getStyleMsg(msg, style));
}

/**
 * Write debug message on the console tab
 * It will be call the log api without style at only IE9 to IE10 browser
 * @param {string|string[]} [msg] console message
 * @param {Object|Object[]} [style] style object
 * @example
 * debug('Hello World', { color: 'red' });
 */
export function debug(msg, style) {
  if (isIE(9) || isIE(10)) {
    log(msg);
  } else {
    console.debug(...getStyleMsg(msg, style));
  }
}

/**
 * Write object information on the console tab
 * It will be call a log api at only IE10 browser
 * @param {Object} [v] object value
 * @example
 * dir({ x: 1 });
 */
export function dir(v) {
  if (isIE(10)) {
    log(JSON.stringify(v));
  } else {
    console.dir(v);
  }
}

/**
 * Write log message on the console tab when return true by assertion function
 * @param {Function} [assertion] assertion function
 * @param {string|string[]} [msg] console message
 * @param {Object|Object[]} [style] style object
 * @example
 * assert(() => true, 'Hello World');
 */
export function assert(assertion, msg, style) {
  if (isFunction(assertion)) {
    if (assertion()) log(msg, style);
  } else {
    if (assertion) log(msg, style);
  }
}

/**
 * Write object information in the table
 * @param {Object} [v] object value
 * @example
 * table({ x: 1 });
 */
export function table(v) {
  if (isIE()) {
    dir(v);
  } else {
    console.table(v);
  }
}

/**
 * Write group message on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {Object} [v = []] group list
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} [style] style object
 * @example
 * group([1, 2, 3], 'GROUP 1')
 */
export function group(v = [], label = DEFAULT_LABEL.label, style) {
  if (!(isIE(9) || isIE(10))) {
    console.group(...getStyleMsg(label, style));
    report(v);
    console.groupEnd();
  }
}

/**
 * Write groupCollapsed message on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {Object} [v = []] groupCollapsed list
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} [style] style object
 * @example
 * groupCollapsed([1, 2, 3], 'GROUP 1')
 */
export function groupCollapsed(v = [], label = DEFAULT_LABEL.label, style) {
  if (!(isIE(9) || isIE(10))) {
    console.groupCollapsed(...getStyleMsg(label, style));
    report(v);
    console.groupEnd();
  }
}

/**
 * Write group message with log message on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {string|string[]} msg console message
 * @param {Object|Object[]} style style object
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} labelStyle style object
 * @example
 * groupLog(1, null, 'GROUP LOG', { color: 'white' });
 */
export function groupLog(msg, style, label, labelStyle) {
  group([() => log(msg, style)], label, labelStyle);
}

/**
 * Write group message with object information on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {Object} [v] object value
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} labelStyle style object
 * @example
 * groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: 'magenta' });
 */
export function groupTable(v, label, labelStyle) {
  group([() => table(v)], label, labelStyle);
}

/**
 * Write group message with object information on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {Object} [v] object value
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} labelStyle style object
 * @example
 * groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: 'cyan' });
 */
export function groupDir(v, label, labelStyle) {
  group([() => dir(v)], label, labelStyle);
}

/**
 * Write groupCollapsed message with log message on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {string|string[]} msg console message
 * @param {Object|Object[]} style style object
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} labelStyle style object
 * @example
 * groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: 'green' });
 */
export function groupCollapsedLog(msg, style, label, labelStyle) {
  groupCollapsed([() => log(msg, style)], label, labelStyle);
}

/**
 * Write groupCollapsed message with object information on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {Object} [v] object value
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} labelStyle style object
 * @example
 * groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: 'blue' });
 */
export function groupCollapsedTable(v, label, labelStyle) {
  groupCollapsed([() => table(v)], label, labelStyle);
}

/**
 * Write groupCollapsed message with object information on the console tab
 * This api cannot use at IE9 to IE10 browser because browser compatibility issue
 * @param {Object} [v] object value
 * @param {string|string[]} [label='group'] label
 * @param {Object|Object[]} labelStyle style object
 * @example
 * groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: 'yellow' });
 */
export function groupCollapsedDir(v, label, labelStyle) {
  groupCollapsed([() => dir(v)], label, labelStyle);
}

/**
 * Draw image that included the text on the console tab
 * This api can use at only browser that supported canvas api
 * @param {string} [v] Image url
 * @param {{color: string, text: string}} [option={ x = 0, y = 0, font = "10px 'serif'" }] Font style object
 * @param {string} option.text Text on the image
 * @param {number} option.x X-axis of the text
 * @param {number} option.y Y-axis of the text
 * @param {string} option.font Font style
 * @example
 * image('https://pubpress.net/houseads/2018/03/15/wordads/3-8-300x250.png', { text: 'Hello World', color: 'azure' });
 */
export function image(v, option) {
  if (isBrowser() && supportsCanvas()) {
    asyncToSync(getImageMsg(v, option))
      .then(v => {
        console.log(...v);
      })
      .catch(e => console.log(e));
  }
}

export default {
  getStyleMsg,
  log,
  error,
  warn,
  info,
  debug,
  dir,
  assert,
  table,
  group,
  groupCollapsed,
  groupLog,
  groupTable,
  groupDir,
  groupCollapsedLog,
  groupCollapsedTable,
  groupCollapsedDir,
  image,
};
