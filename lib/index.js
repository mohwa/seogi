const colors = require('colors/safe');

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

function isBrowser() {
  try {
    return !!window;
  } catch (e) {
    return false;
  }
}

function isObject(v) {
  return v && v.constructor === Object;
}

function isFunction(v) {
  return v && v.constructor === Function;
}

function hasConsoleLogObject() {
  return typeof console.log === 'object';
}

function _isIE() {
  const { userAgent } = window.navigator;

  const isMSIE = userAgent.indexOf('MSIE') > -1;
  const isIE11 = userAgent.indexOf('Trident/') > -1;

  return isMSIE || isIE11;
}

function isIE(v) {
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

function isIE9ToIE11() {
  return isIE(9) || isIE(10) || isIE(11);
}

function toColorName(v) {
  const firstChar = v.substr(0, 1);

  return `${firstChar.toUpperCase()}${v.substr(1)}`;
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

function getCreatorChalkMsg(style) {
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

function getStyleInfo(style = {}) {
  return Object.keys(style)
    .reduce((acc, k) => {
      const _k = k.replace(/([A-Z])/g, '-$1').toLowerCase();
      const v = style[k];

      acc.push(`${_k}:${v}`);

      return acc;
    }, [])
    .join(';');
}

export function getStyleMsg(msg, style) {
  let _msg = msg;
  let _style = [];

  if (Array.isArray(msg)) {
    _msg = msg.join(' ');
  }

  switch (true) {
    case isObject(style): {
      if (isBrowser()) {
        if (!isIE9ToIE11()) {
          _msg = `%c${_msg}`;
          _style = [getStyleInfo(style)];
        }
      } else {
        const builder = getCreatorChalkMsg(style);

        if (builder) {
          _msg = builder(_msg);
        }
      }
      break;
    }
    case Array.isArray(msg) && Array.isArray(style): {
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

            if (isObject(_style)) {
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

            if (isObject(_style)) {
              builder = getCreatorChalkMsg(_style);
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

export function log(...args) {
  console.log(...getStyleMsg(...args));
}

export function error(...args) {
  console.error(...getStyleMsg(...args));
}

export function warn(...args) {
  console.warn(...getStyleMsg(...args));
}

export function info(...args) {
  console.info(...getStyleMsg(...args));
}

export function debug(...args) {
  if (isIE(9) || isIE(10)) {
    log(args[0]);
  } else {
    console.debug(...getStyleMsg(...args));
  }
}

export function dir(v) {
  if (isIE(10)) {
    log(JSON.stringify(v));
  } else {
    console.dir(v);
  }
}

export function assert(assertion, msg, style) {
  if (isFunction(assertion)) {
    if (assertion()) log(msg, style);
  } else {
    if (assertion) log(msg, style);
  }
}

export function table(v) {
  if (isIE()) {
    dir(v);
  } else {
    console.table(v);
  }
}

export function group(v = [], label = DEFAULT_LABEL.label, style) {
  if (!(isIE(9) || isIE(10))) {
    console.group(...getStyleMsg(label, style));
    report(v);
    console.groupEnd();
  }
}

export function groupCollapsed(v = [], label = DEFAULT_LABEL.label, style) {
  if (!(isIE(9) || isIE(10))) {
    console.groupCollapsed(...getStyleMsg(label, style));
    report(v);
    console.groupEnd();
  }
}

export function groupLog(msg, style, label, labelStyle) {
  group([() => log(msg, style)], label, labelStyle);
}

export function groupTable(v, label, labelStyle) {
  group([() => table(v)], label, labelStyle);
}

export function groupDir(v, label, labelStyle) {
  group([() => dir(v)], label, labelStyle);
}

export function groupCollapsedLog(msg, style, label, labelStyle) {
  groupCollapsed([() => log(msg, style)], label, labelStyle);
}

export function groupCollapsedTable(v, label, labelStyle) {
  groupCollapsed([() => table(v)], label, labelStyle);
}

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
