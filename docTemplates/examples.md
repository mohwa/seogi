### Functions

<dl>
<dt><a href="#getStyleMsg">getStyleMsg(msg, style)</a> ⇒ <code>Array</code></dt>
<dd><p>Return console arguments that included a style or not</p>
</dd>
<dt><a href="#log">log(msg, style)</a></dt>
<dd><p>Write log message on the console tab</p>
</dd>
<dt><a href="#error">error(msg, style)</a></dt>
<dd><p>Write error message on the console tab</p>
</dd>
<dt><a href="#warn">warn(msg, style)</a></dt>
<dd><p>Write warn message on the console tab</p>
</dd>
<dt><a href="#info">info(msg, style)</a></dt>
<dd><p>Write information message on the console tab</p>
</dd>
<dt><a href="#debug">debug(msg, style)</a></dt>
<dd><p>Write debug message on the console tab
It will be call the log api without style at only IE9 to IE10 browser</p>
</dd>
<dt><a href="#dir">dir(value)</a></dt>
<dd><p>Write object information on the console tab
It will be call a log api at only IE10 browser</p>
</dd>
<dt><a href="#assert">assert(assertion, msg, style)</a></dt>
<dd><p>Write log message on the console tab when return true by assertion function</p>
</dd>
<dt><a href="#table">table(value)</a></dt>
<dd><p>Write object information in the table</p>
</dd>
<dt><a href="#group">group([value], [label], style)</a></dt>
<dd><p>Write group message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsed">groupCollapsed([value], [label], style)</a></dt>
<dd><p>Write groupCollapsed message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupLog">groupLog(msg, style, [label], labelStyle)</a></dt>
<dd><p>Write group message with log message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupTable">groupTable(value, [label], labelStyle)</a></dt>
<dd><p>Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupDir">groupDir(value, [label], labelStyle)</a></dt>
<dd><p>Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsedLog">groupCollapsedLog(msg, style, [label], labelStyle)</a></dt>
<dd><p>Write groupCollapsed message with log message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsedTable">groupCollapsedTable(value, [label], labelStyle)</a></dt>
<dd><p>Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#groupCollapsedDir">groupCollapsedDir(value, [label], labelStyle)</a></dt>
<dd><p>Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue</p>
</dd>
<dt><a href="#image">image(url, [option])</a></dt>
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

### log(msg, style)
Write log message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
log('Hello World', { color: 'red' });
```
<a name="error"></a>

### error(msg, style)
Write error message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
error('Hello World', { color: 'red' });
```
<a name="warn"></a>

### warn(msg, style)
Write warn message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
warn('Hello World', { color: 'red' });
```
<a name="info"></a>

### info(msg, style)
Write information message on the console tab

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
info('Hello World', { color: 'red' });
```
<a name="debug"></a>

### debug(msg, style)
Write debug message on the console tab
It will be call the log api without style at only IE9 to IE10 browser

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
debug('Hello World', { color: 'red' });
```
<a name="dir"></a>

### dir(value)
Write object information on the console tab
It will be call a log api at only IE10 browser

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | An any value |

**Example**  
```js
dir({ x: 1 });
```
<a name="assert"></a>

### assert(assertion, msg, style)
Write log message on the console tab when return true by assertion function

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assertion | <code>function</code> | assertion function |
| msg | <code>string</code> \| <code>Array.&lt;string&gt;</code> | console message |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | style object |

**Example**  
```js
assert(() => true, 'Hello World');
```
<a name="table"></a>

### table(value)
Write object information in the table

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | An any value |

**Example**  
```js
table({ x: 1 });
```
<a name="group"></a>

### group([value], [label], style)
Write group message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>Object</code> | <code>[]</code> | group list |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
group([1, 2, 3], 'GROUP 1')
```
<a name="groupCollapsed"></a>

### groupCollapsed([value], [label], style)
Write groupCollapsed message on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>Object</code> | <code>[]</code> | groupCollapsed list |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| style | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

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

### groupTable(value, [label], labelStyle)
Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: 'magenta' });
```
<a name="groupDir"></a>

### groupDir(value, [label], labelStyle)
Write group message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Object</code> |  | object value |
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

### groupCollapsedTable(value, [label], labelStyle)
Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: 'blue' });
```
<a name="groupCollapsedDir"></a>

### groupCollapsedDir(value, [label], labelStyle)
Write groupCollapsed message with object information on the console tab
This api cannot use at IE9 to IE10 browser because browser compatibility issue

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Object</code> |  | object value |
| [label] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <code>&quot;&#x27;group&#x27;&quot;</code> | label |
| labelStyle | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> |  | style object |

**Example**  
```js
groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: 'yellow' });
```
<a name="image"></a>

### image(url, [option])
Draw image that included the text on the console tab
This api can use at only browser that supported canvas api

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | Image url |
| [option] | <code>Object</code> | <code>{ x &#x3D; 0, y &#x3D; 0, font &#x3D; &quot;10px &#x27;serif&#x27;&quot; }</code> | Font style object |
| option.text | <code>string</code> |  | Text on the image |
| option.x | <code>number</code> |  | X-axis of the text |
| option.y | <code>number</code> |  | Y-axis of the text |
| option.font | <code>string</code> |  | Font style |

**Example**  
```js
image('https://pubpress.net/houseads/2018/03/15/wordads/3-8-300x250.png', { text: 'Hello World', color: 'azure' });
```
