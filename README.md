# seogi

![npm](https://img.shields.io/npm/v/seogi) [![](https://data.jsdelivr.com/v1/package/npm/seogi/badge)](https://www.jsdelivr.com/package/npm/seogi) ![Codecov](https://img.shields.io/codecov/c/github/mohwa/seogi) ![npm bundle size](https://img.shields.io/bundlephobia/min/seogi) ![npm](https://img.shields.io/npm/dm/seogi) ![NPM](https://img.shields.io/npm/l/seogi)

This library improved use way console api so you will able to use them more better and more simplity and you can use similarly like existing console api.

[Example code on the CodePen](https://codepen.io/yanione/pen/abZjRVj?editors=0011)

> You will able to see related log on the console tab of your browser.

# Install

```javascript
npm i seogi
```

# Support Platforms

IE9 later, All modern browsers(Chrome, Safari, Edge ...), NodeJS(`10.0.0` version later).

# How to Use

### Normal apis

```javascript
import {
  log,
  error,
  warn,
  info,
  debug,
  assert,
} from 'seogi';

log('Hello World');
log(['Hello', 'World']);
log('Hello World', { color: 'red', backgroundColor: 'cyan', fontWeight: 'bold', fontSize: '10px' });
log(['Hello', 'World'], { color: 'cyan', backgroundColor: 'yellow' });
log(['Hello', 'World'], [{ color: 'magenta', backgroundColor: 'blue' }]);
log(['Hello', 'World'], [{ color: 'blue', backgroundColor: 'magenta' }, { color: 'cyan' }]);

error('Hello World', { color: 'cyan', backgroundColor: 'yellow', textDecoration: 'underline', fontSize: '20px' });
warn('Hello World', { color: 'magenta', backgroundColor: 'blue', textDecoration: 'line-through', fontSize: '30px' });
info('Hello World', { color: 'blue', backgroundColor: 'magenta', fontStyle: 'italic', fontSize: '40px' });
debug('Hello World', { color: 'yellow', backgroundColor: 'cyan', fontSize: '50px' });
assert(() => true /* or false */, 'Hello World', {
  color: 'green',
  fontSize: '50px',
});
```

![seogi_1](https://user-images.githubusercontent.com/11391606/97726770-f1802300-1b12-11eb-969b-67b0d79fc10e.png)

### Object Type apis

This api will use argument of the object type and this is same the native console api.

- `table` API will be unable to using at IE browser because browser compatibility issues and instead would be using `log` API

```javascript
import { dir, table } from 'seogi';

dir({ x: 1 });
table({ x: 1, y: 2 });
```

![seogi_2](https://user-images.githubusercontent.com/11391606/94977014-de992380-0551-11eb-8c33-7818ffab8431.png)

### Group Type apis

`Group Type API` cannot use at IE9 to IE10 browser because browser compatibility issue

```javascript
import {
  group,
  log,
  table,
  groupLog,
  groupTable,
  groupDir,
} from 'seogi';

group(
  [
    1,
    2,
    () => group([3, 4, 5], 'GROUP 2'),
    '6',
    () => log('log'),
    7,
    () => table({ x: 1, y: 2 }),
    () => groupTable({ x: 1, y: 2 }, 'GROUP 3'),
    8,
    () => group([9, 10], 'GROUP 4'),
    () => groupDir({ x: 1, y: 2 }, 'GROUP 5'),
  ],
  'GROUP 1'
);

groupLog(1, null, 'GROUP LOG', { color: 'white' });
groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: 'cyan' });
groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: 'magenta' });
```

![seogi_3](https://user-images.githubusercontent.com/11391606/94977015-df31ba00-0551-11eb-9a9f-c411ab91dd09.png)

### Group Collapsed Type apis

`Group Collapsed Type API` cannot use at IE9 to IE10 browser because browser compatibility issue

```javascript
import {
  error,
  warn,
  info,
  groupCollapsed,
  groupCollapsedLog,
  groupCollapsedDir,
  groupCollapsedTable,
} from 'seogi';

groupCollapsed(
  [
    () => error('error'),
    1,
    2,
    () =>
      groupCollapsed(
        [
          3,
          () => info('Hello World', { color: 'green', backgroundColor: 'yellow' }),
          () => warn('Hello World', { color: 'yellow', backgroundColor: 'white' }),
          4,
        ],
        'GROUP COLLAPSED 2'
      ),
  ],
  'GROUP COLLAPSED 1'
);

groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: 'green' });
groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: 'yellow' });
groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: 'blue' });
```

![seogi_4](https://user-images.githubusercontent.com/11391606/94977017-e062e700-0551-11eb-8143-c5d622d3dce7.png)

### Media Type apis

`Image API` can use at only browser that supported canvas api

```javascript
import { image } from 'seogi';

image('https://pubpress.net/houseads/2018/03/15/wordads/3-8-300x250.png', {
  text: 'Hello World1',
  x: 15,
  y: 100,
  color: 'azure',
  font: 'bold 48px serif',
});

image('https://pubpress.net/houseads/2018/03/15/wordads/3-8-300x250.png', {
  text: 'Hello World2',
  color: 'azure',
  font: '48px serif',
});
```

<img width="340" alt="Webpack App 2020-11-26 15-04-38" src="https://user-images.githubusercontent.com/11391606/100313891-d82aa380-2ff8-11eb-9377-29abddd3942c.png">

### On NodeJS Environment

<s>This library used [chalk library](https://github.com/chalk/chalk) that expression color on the NodeJS.

You can check color list that you can use in [this link](<(https://github.com/chalk/chalk)>) and you can use like following codes all feature of the chalk library.</s>

This library used [colors.js library](https://github.com/Marak/colors.js) that expression color on the NodeJS.

You can check color list that you can use in [this link](<(https://github.com/Marak/colors.js)>) and you can use like following codes all feature of the colors.js library.

- I changed chalk library to colors.js library because [polyfill issue](https://github.com/jaredpalmer/razzle/issues/998) happened at `0.0.15` version.

### Normal apis

```javascript
import {
  log,
  error,
  warn,
  info,
  debug,
  assert,
} from 'seogi';

log('Hello World');
log(['Hello', 'World']);
log('Hello World', { color: 'red', backgroundColor: 'cyan', fontWeight: 'bold', fontSize: '10px' });
log(['Hello', 'World'], { color: 'cyan', backgroundColor: 'yellow' });
log(['Hello', 'World'], [{ color: 'magenta', backgroundColor: 'blue' }]);
log(['Hello', 'World'], [{ color: 'blue', backgroundColor: 'magenta' }, { color: 'cyan' }]);

error('Hello World', { color: 'cyan', backgroundColor: 'yellow', textDecoration: 'underline' });
warn('Hello World', { color: 'magenta', backgroundColor: 'blue' });
info('Hello World', { color: 'blue', backgroundColor: 'magenta', fontStyle: 'italic', backgroundColorBright: true });
debug('Hello World', { color: 'yellow', backgroundColor: 'cyan', colorBright: true });
assert(() => true /* or false */, 'Hello World', {
  color: 'green',
});
```

<img width="154" alt="seogi_5" src="https://user-images.githubusercontent.com/11391606/97727008-36a45500-1b13-11eb-8644-fd1fbd08e7d4.png">

### Object Type apis

This api include argument of object type and it same to console api

```javascript
import { dir, table } from 'seogi';

dir({ x: 1 });
table({ x: 1, y: 2 });
```

<img width="203" alt="seogi_6" src="https://user-images.githubusercontent.com/11391606/94977019-e0fb7d80-0551-11eb-82f8-60736c60bb30.png">

### Group Type apis

```javascript
import {
  group,
  log,
  table,
  groupLog,
  groupTable,
  groupDir,
} from 'seogi';

group(
  [
    1,
    2,
    () => group([3, 4, 5], 'GROUP 2'),
    '6',
    () => log('log', { color: 'magenta' }),
    7,
    () => table({ x: 1, y: 2 }),
    () => groupTable({ x: 1, y: 2 }, 'GROUP 3'),
    8,
    () => group([9, 10], 'GROUP 4'),
    () => groupDir({ x: 1, y: 2 }, 'GROUP 5'),
  ],
  'GROUP 1'
);

groupLog(1, null, 'GROUP LOG', { color: 'white' });
groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: 'cyan' });
groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: 'magenta' });
```

<img width="259" alt="seogi_7" src="https://user-images.githubusercontent.com/11391606/94977020-e1941400-0551-11eb-9549-dc7fab2afb64.png">

### Group Collapsed Type apis

```javascript
import {
  error,
  warn,
  info,
  groupCollapsed,
  groupCollapsedLog,
  groupCollapsedDir,
  groupCollapsedTable,
} from 'seogi';

groupCollapsed(
  [
    () => error('error'),
    1,
    2,
    () =>
      groupCollapsed(
        [
          3,
          () => info('Hello World', { color: 'green', backgroundColor: 'yellow' }),
          () => warn('Hello World', { color: 'yellow', backgroundColor: 'white' }),
          4,
        ],
        'GROUP COLLAPSED 2'
      ),
  ],
  'GROUP COLLAPSED 1'
);

groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: 'green' });
groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: 'yellow' });
groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: 'blue' });
```

<img width="250" alt="seogi_8" src="https://user-images.githubusercontent.com/11391606/94977021-e22caa80-0551-11eb-9ee7-b35e4a0dbc84.png">

### getStyleMsg apis

If you need make console arguments that use to native api, you can use this `getStyleMsg API`

```javascript
import { getStyleMsg } from 'seogi';

console.log(...getStyleMsg('Hello World'));
console.log(...getStyleMsg(['Hello', 'World']));
console.log(
  ...getStyleMsg('Hello World', { color: 'red', backgroundColor: 'cyan', fontWeight: 'bold', fontSize: '10px' })
);
console.log(...getStyleMsg(['Hello', 'World'], { color: 'cyan', backgroundColor: 'yellow' }));
console.log(...getStyleMsg(['Hello', 'World'], [{ color: 'magenta', backgroundColor: 'blue' }]));
console.log(...getStyleMsg(['Hello', 'World'], [{ color: 'blue', backgroundColor: 'magenta' }, { color: 'cyan' }]));
```


![seogi_1](https://user-images.githubusercontent.com/11391606/97726770-f1802300-1b12-11eb-969b-67b0d79fc10e.png)

### Functions

<dl>
<dt><a href="#getStyleMsg">getStyleMsg(msg, style)</a> ⇒ <code>Array</code></dt>
<dd><p>Return console arguments that included a style or not</p>
</dd>
<dt><a href="#log">log([msg], [style])</a></dt>
<dd><p>Write log message on the console tab</p>
</dd>
<dt><a href="#error">error([msg], [style])</a></dt>
<dd><p>Write error message on the console tab</p>
</dd>
<dt><a href="#warn">warn([msg], [style])</a></dt>
<dd><p>Write warn message on the console tab</p>
</dd>
<dt><a href="#info">info([msg], [style])</a></dt>
<dd><p>Write information message on the console tab</p>
</dd>
<dt><a href="#debug">debug([msg], [style])</a></dt>
<dd><p>Write debug message on the console tab
It will be call the log api without style at only IE9 to IE10 browser</p>
</dd>
<dt><a href="#dir">dir([v])</a></dt>
<dd><p>Write object information on the console tab
It will be call a log api at only IE10 browser</p>
</dd>
<dt><a href="#assert">assert([assertion], [msg], [style])</a></dt>
<dd><p>Write log message on the console tab when return true by assertion function</p>
</dd>
<dt><a href="#table">table([v])</a></dt>
<dd><p>Write object information in the table</p>
</dd>
<dt><a href="#group">group([v], [label], [style])</a></dt>
<dd><p>Write group message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsed">groupCollapsed([v], [label], [style])</a></dt>
<dd><p>Write groupCollapsed message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupLog">groupLog(msg, style, [label], labelStyle)</a></dt>
<dd><p>Write group message with log message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupTable">groupTable([v], [label], labelStyle)</a></dt>
<dd><p>Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupDir">groupDir([v], [label], labelStyle)</a></dt>
<dd><p>Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsedLog">groupCollapsedLog(msg, style, [label], labelStyle)</a></dt>
<dd><p>Write groupCollapsed message with log message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsedTable">groupCollapsedTable([v], [label], labelStyle)</a></dt>
<dd><p>Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsedDir">groupCollapsedDir([v], [label], labelStyle)</a></dt>
<dd><p>Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#image">image([v], [option])</a></dt>
<dd><p>Draw image that included the text on the console tab
This api can use at only browser that supported canvas api</p>
</dd>
</dl>

<a name="getStyleMsg"></a>

### getStyleMsg(msg, style) ⇒ <code>Array</code>
Return console arguments that included a style or not

**Kind**: global function  
**Returns**: <code>Array</code> - Console arguments that included a style or not  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
console.log(...getStyleMsg('Hello World', { color: 'red }));
```
<a name="log"></a>

### log([msg], [style])
Write log message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
log('Hello World', { color: 'red' });
```
<a name="error"></a>

### error([msg], [style])
Write error message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
error('Hello World', { color: 'red' });
```
<a name="warn"></a>

### warn([msg], [style])
Write warn message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
warn('Hello World', { color: 'red' });
```
<a name="info"></a>

### info([msg], [style])
Write information message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
info('Hello World', { color: 'red' });
```
<a name="debug"></a>

### debug([msg], [style])
Write debug message on the console tab
It will be call the log api without style at only IE9 to IE10 browser

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
debug('Hello World', { color: 'red' });
```
<a name="dir"></a>

### dir([v])
Write object information on the console tab
It will be call a log api at only IE10 browser

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [v] | <code>Object</code> | object value |

**Example**  
```js
dir({ x: 1 });
```
<a name="assert"></a>

### assert([assertion], [msg], [style])
Write log message on the console tab when return true by assertion function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [assertion] | <code>function</code> | assertion function |
| [msg] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
assert(() => true, 'Hello World');
```
<a name="table"></a>

### table([v])
Write object information in the table

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [v] | <code>Object</code> | object value |

**Example**  
```js
table({ x: 1 });
```
<a name="group"></a>

### group([v], [label], [style])
Write group message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Object</code> | <code>[]</code> | group list |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
group([1, 2, 3], 'GROUP 1')
```
<a name="groupCollapsed"></a>

### groupCollapsed([v], [label], [style])
Write groupCollapsed message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Object</code> | <code>[]</code> | groupCollapsed list |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| [style] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupCollapsed([1, 2, 3], 'GROUP 1')
```
<a name="groupLog"></a>

### groupLog(msg, style, [label], labelStyle)
Write group message with log message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupLog(1, null, 'GROUP LOG', { color: 'white' });
```
<a name="groupTable"></a>

### groupTable([v], [label], labelStyle)
Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: 'magenta' });
```
<a name="groupDir"></a>

### groupDir([v], [label], labelStyle)
Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: 'cyan' });
```
<a name="groupCollapsedLog"></a>

### groupCollapsedLog(msg, style, [label], labelStyle)
Write groupCollapsed message with log message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> |  | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: 'green' });
```
<a name="groupCollapsedTable"></a>

### groupCollapsedTable([v], [label], labelStyle)
Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: 'blue' });
```
<a name="groupCollapsedDir"></a>

### groupCollapsedDir([v], [label], labelStyle)
Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: 'yellow' });
```
<a name="image"></a>

### image([v], [option])
Draw image that included the text on the console tab
This api can use at only browser that supported canvas api

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [v] | <code>string</code> |  | Image url |
| [option] | <code>Object</code> | <code>{ x &#x3D; 0, y &#x3D; 0, font &#x3D; &quot;10px &#x27;serif&#x27;&quot; }</code> | Font style object |
| option.text | <code>string</code> |  | Text on the image |
| option.x | <code>number</code> |  | X-axis of the text |
| option.y | <code>number</code> |  | Y-axis of the text |
| option.font | <code>string</code> |  | Font style |

**Example**  
```js
image('https://pubpress.net/houseads/2018/03/15/wordads/3-8-300x250.png', { text: 'Hello World', color: 'azure' });
```


