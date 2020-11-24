import colors from 'colors/safe';
import { type } from 'emnida';

const { isPlainObject, isFunction, isArray } = type;

const DEFAULT_LABEL = {
  label: 'group',
};

colors.enable();

if (isBrowser() && window.console && hasConsoleLogObject() && Function.prototype.bind) {
  const methods = ['log', 'error', 'warn', 'info', 'dir', 'assert'];

  methods.forEach(function(f) {
    console[f] = this.bind(console[f], console);
  }, Function.prototype.call);
}

export function isBrowser() {
  try {
    return !!window;
  } catch (e) {
    return false;
  }
}

export function hasConsoleLogObject() {
  return typeof console.log === 'object';
}

export function _isIE() {
  const { userAgent } = window.navigator;

  const isMSIE = userAgent.indexOf('MSIE') > -1;
  const isIE11 = userAgent.indexOf('Trident/') > -1;

  return isMSIE || isIE11;
}

export function isIE(v) {
  if (isBrowser()) {
    if (_isIE()) {
      if (v) {
        const { userAgent } = window.navigator;

        if (v === 11) {
          return !!userAgent.match(/rv:\d+/)?.[0];
        }
        const version = userAgent.match(/MSIE\s+(\d+)/)?.[1];

        return parseInt(version) === v;
      }
      return true;
    }
    return false;
  }
  return false;
}

export function isIE9ToIE11() {
  return isIE(9) || isIE(10) || isIE(11);
}

export function toColorName(v) {
  const firstChar = v.substr(0, 1);

  return `${firstChar.toUpperCase()}${v.substr(1)}`;
}

export function report(v = []) {
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

export function getCreatorColorsMsg(style) {
  let builder = colors;

  Object.keys(style).map(k => {
    const v = style[k];

    switch (k) {
      case 'fontStyle': {
        if (v === 'italic') {
          builder = builder[v];
        }
        break;
      }
      case 'fontWeight': {
        if (v === 'bold') {
          builder = builder[v];
        }
        break;
      }
      case 'textDecoration': {
        if (v === 'underline') {
          builder = builder['underline'];
        }
        if (v === 'line-through') {
          builder = builder['strikethrough'];
        }
        break;
      }
      case 'visibility': {
        if (v === 'hidden') {
          builder = builder[v];
        }
        break;
      }
      case 'backgroundColor': {
        const colorName = toColorName(v);

        if (style['backgroundColorBright']) {
          builder = builder[`bgBright${colorName}`];
        } else {
          builder = builder[`bg${colorName}`];
        }
        break;
      }
      case 'color': {
        if (style['colorBright']) {
          builder = builder[`bright${toColorName(v)}`];
        } else {
          builder = builder[v];
        }
        break;
      }
    }
  });

  if (isFunction(builder)) {
    return builder;
  }
}

export function getStyleInfo(style = {}) {
  return Object.keys(style)
    .reduce((acc, k) => {
      const _k = k.replace(/([A-Z])/g, '-$1').toLowerCase();
      const v = style[k];

      acc.push(`${_k}:${v}`);

      return acc;
    }, [])
    .join(';');
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

export default Object.freeze({
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
});
