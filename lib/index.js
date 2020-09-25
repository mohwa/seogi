const DEFAULT_LABEL = {
  label: 'label',
  style: { color: '#2ea44f' },
};

function isObject(v) {
  return v?.constructor === Object;
}

function consoleByType(type, msg, style) {
  switch (type) {
    case 'log':
      log(msg, style);
      break;
    case 'error':
      error(msg, style);
      break;
    case 'info':
      info(msg, style);
      break;
    case 'warn':
      warn(msg, style);
      break;
    default:
      log(msg, style);
      break;
  }
}

function report(v = []) {
  v.forEach(vv => {
    switch (vv.constructor) {
      case Function: {
        vv();
        break;
      }
      case Object: {
        const { logStyle, msg, style } = vv;
        consoleByType(logStyle, msg, style);
        break;
      }
      default: {
        log(vv);
        break;
      }
    }
  });
}

function getConsoleStyle(style = {}) {
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
      _msg = `%c${msg}`;
      _style = [getConsoleStyle(style)];
      break;
    }
    case Array.isArray(msg) && Array.isArray(style): {
      _msg = msg
        .reduce((acc, vv) => {
          acc.push(`%c${vv}`);

          return acc;
        }, [])
        .join(' ');

      _style = style.reduce((acc, vv) => {
        acc.push(getConsoleStyle(vv));

        return acc;
      }, []);
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
  if (assertion?.constructor === Function) {
    if (assertion()) log(msg, style);
  } else {
    if (assertion) log(msg, style);
  }
}

export function table(v) {
  console.table(v);
}

export function group(v = [], label = DEFAULT_LABEL.label, style = DEFAULT_LABEL.style) {
  console.group(...getStyleMsg(label, style));
  report(v);
  console.groupEnd();
}

export function groupCollapsed(v = [], label = DEFAULT_LABEL.label, style = DEFAULT_LABEL.style) {
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
