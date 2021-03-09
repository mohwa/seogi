import colors from 'colors/safe';
import { isFunction } from 'emnida';

function toColorName(v) {
  const firstChar = v.substr(0, 1);

  return `${firstChar.toUpperCase()}${v.substr(1)}`;
}

function _isIE() {
  const { userAgent } = window.navigator;

  const isMSIE = userAgent.indexOf('MSIE') > -1;
  const isIE11 = userAgent.indexOf('Trident/') > -1;

  return isMSIE || isIE11;
}

function getImageElement(url) {
  const img = new Image();

  img.crossOrigin = 'Anonymous';
  img.src = url;

  return img;
}

function drawText(ctx, v, x, y, color, font) {
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(v, x, y);
}

export function isBrowser() {
  try {
    return !!window;
  } catch (e) {
    return false;
  }
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

export function supportsCanvas() {
  return !!document.createElement('canvas').getContext;
}

export const reqQueue = [];
export function asyncToSync(p) {
  return new Promise((resolve, reject) => {
    const stack = { p, resolve, reject };

    if (reqQueue.length) {
      reqQueue.push(stack);
      return;
    }
    reqQueue.push(stack);

    const next = _stack => {
      const { p, resolve } = _stack;

      p.then(v => {
        resolve(v);
        reqQueue.shift();

        if (reqQueue.length) {
          next(reqQueue[0]);
        }
      });
    };
    next(stack);
  });
}

export function getImageMsg(url, { text, x = 0, y = 0, color, font = "10px 'serif'" } = {}) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = getImageElement(url);

    img.addEventListener('load', () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);
      drawText(ctx, text, x, y, color, font);

      const imgUrl = canvas.toDataURL();

      resolve([
        '%c+',
        `font-size:1px; padding: ${img.height / 2}px ${img.width /
          2}px; background:url(${imgUrl}); background-repeat:no-repeat;color:transparent`,
      ]);
    });

    img.addEventListener('error', e => {
      reject(e);
    });
  });
}
