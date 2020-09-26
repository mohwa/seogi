# seogi

This library improved use way console api. So you will able to use console api more better and more simplity.


# NPM Package Install
```javascript
npm i seogi
```

## Normal API 

You can use normal api like an console api

```javascript
log('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '10px' });
error('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '20px' });
warn('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '30px' });
info('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '40px' });
debug('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '50px' });
assert(() => true /* or false */, 'Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '60px' });
```

## Object Type API
 
This api include argument of object type and same to console api 

```javascript
dir({ x: 1 });
table({ x: 1, y: 2 });
```

## Group Type API

You will able to use api to improved way from console api 

```javascript
LogUtils.group(
  [
    1,
    2,
    () => LogUtils.group([3, 4, 5], 'GROUP 2'),
    '6',
    () => LogUtils.log('LOG'),
    7,
    () => LogUtils.table({ x: 1, y: 2 }),
    () => LogUtils.groupTable({ x: 1, y: 2 }, 'GROUP TABLE'),
    8,
    () => LogUtils.group([9, 10], 'GROUP 3'),
    () => LogUtils.groupDir({ x: 1, y: 2 }, 'GROUP DIR'),
  ],
  'GROUP 1'
);

LogUtils.groupLog(1, null, 'GROUP LOG', { color: '#8e3278' });
LogUtils.groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: '#8e3278' });
LogUtils.groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: '#8e3278' });
```

## Group Collapsed Type API

You will able to use api to improved way from console api

```javascript
groupCollapsed(
  [
    () => error('ERROR'),
    1,
    2,
    () =>
      groupCollapsed(
        [
          3,
          () => info('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '40px' }),
          () => warn('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '30px' }),
          4,
        ],
        'GROUP COLLAPSED 2'
      ),
  ],
  'GROUP COLLAPSED 1'
);

groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: '#40a53a' });
groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: '#40a53a' });
groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: '#40a53a' });
```
