import chalk from 'chalk';

const DEFAULT_LABEL = {
  label: 'group',
};

function isBrowserEnv() {
  return !global;
}

function isObject(v) {
  return v && v.constructor === Object;
}

function isFunction(v) {
  return v && v.constructor === Function;
}

// function consoleByType(type, msg, style) {
//   switch (type) {
//     case 'log':
//       log(msg, style);
//       break;
//     case 'error':
//       error(msg, style);
//       break;
//     case 'info':
//       info(msg, style);
//       break;
//     case 'warn':
//       warn(msg, style);
//       break;
//     default:
//       log(msg, style);
//       break;
//   }
// }

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
  let _chalk = chalk;

  Object.keys(style).map(k => {
    const v = style[k];

    switch (k) {
      case 'fontStyle': {
        if (v === 'italic') {
          _chalk = _chalk[v];
        }
        break;
      }
      case 'fontWeight': {
        if (v === 'bold') {
          _chalk = _chalk[v];
        }
        break;
      }
      case 'textDecoration': {
        if (v === 'underline') {
          _chalk = _chalk['underline'];
        }
        if (v === 'line-through') {
          _chalk = _chalk['strikethrough'];
        }
        break;
      }
      case 'visibility': {
        if (v === 'hidden') {
          _chalk = _chalk[v];
        }
        break;
      }
      case 'backgroundColor': {
        const firstChar = v.substr(0, 1);
        const _v = `bg${firstChar.toUpperCase()}${v.substr(1)}`;

        if (style['backgroundColorBright']) {
          _chalk = _chalk[`${_v}Bright`];
        } else {
          _chalk = _chalk[_v];
        }
        break;
      }
      case 'color': {
        if (style['colorBright']) {
          _chalk = _chalk[`${v}Bright`];
        } else {
          _chalk = _chalk[v];
        }
        break;
      }
    }
  });

  if (isFunction(_chalk)) {
    return _chalk;
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

  switch (true) {
    case isObject(style): {
      if (isBrowserEnv()) {
        _msg = `%c${msg}`;
        _style = [getStyleInfo(style)];
      } else {
        const creator = getCreatorChalkMsg(style);

        if (creator) {
          _msg = creator(msg);
        }
      }
      break;
    }
    case Array.isArray(msg) && Array.isArray(style): {
      if (isBrowserEnv()) {
        _msg = msg
          .reduce((acc, vv) => {
            acc.push(`%c${vv}`);
            return acc;
          }, [])
          .join(' ');

        _style = style.reduce((acc, vv) => {
          acc.push(getStyleInfo(vv));
          return acc;
        }, []);
      } else {
        _msg = msg
          .reduce((acc, vv, index) => {
            const creator = getCreatorChalkMsg(style[index]);

            if (creator) {
              acc.push(creator(vv));
            } else {
              acc.push(vv);
            }
            return acc;
          }, [])
          .join('');
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
  console.debug(...getStyleMsg(...args));
}

export function dir(v) {
  console.dir(v);
}

export function assert(assertion, msg, style) {
  if (isFunction(assertion)) {
    if (assertion()) log(msg, style);
  } else {
    if (assertion) log(msg, style);
  }
}

export function table(v) {
  console.table(v);
}

export function group(v = [], label = DEFAULT_LABEL.label, style) {
  console.group(...getStyleMsg(label, style));
  report(v);
  console.groupEnd();
}

export function groupCollapsed(v = [], label = DEFAULT_LABEL.label, style) {
  console.groupCollapsed(...getStyleMsg(label, style));
  report(v);
  console.groupEnd();
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
