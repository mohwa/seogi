# leave library

- 네이티브 `Console API`들을, 더 가독성 좋게(`group`, `style` 적용 등...) 사용할 수 있는 유틸리티입니다.

# how to package install

## NORMAL API

```javascript
log('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '10px' });
error('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '20px' });
warn('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '30px' });
info('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '40px' });
debug('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '50px' });
assert(() => true /* or false */, 'Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '60px' });
```

![log_event](https://git.linecorp.com/storage/user/3128/files/93b11d80-fcc0-11ea-9ec9-9a1958e0abf1)

## OBJECT TYPE API

```javascript
LogUtils.dir({ x: 1 });
LogUtils.table({ x: 1, y: 2 });
```

![dir_table](https://git.linecorp.com/storage/user/3128/files/c529e900-fcc0-11ea-808a-c03acad926e5)

## GROUP TYPE API

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
```

![group](https://git.linecorp.com/storage/user/3128/files/e12d8a80-fcc0-11ea-9062-3f9baac7756b)

```javascript
LogUtils.groupLog(1, null, 'GROUP LOG', { color: '#8e3278' });
LogUtils.groupDir({ x: 1, y: 2 }, 'GROUP DIR', { color: '#8e3278' });
LogUtils.groupTable({ x: 1, y: 2 }, 'GROUP TABLE', { color: '#8e3278' });
```

![simple_group](https://git.linecorp.com/storage/user/3128/files/f73b4b00-fcc0-11ea-8075-0b5938608773)

## GROUP COLLAPSED TYPE API

```javascript
LogUtils.groupCollapsed(
  [
    () => LogUtils.error('ERROR'),
    1,
    2,
    () =>
      LogUtils.groupCollapsed(
        [
          3,
          () => LogUtils.info('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '40px' }),
          () => LogUtils.warn('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '30px' }),
          4,
        ],
        'GROUP COLLAPSED 2'
      ),
  ],
  'GROUP COLLAPSED 1'
);
```

![group_collapsed_group](https://git.linecorp.com/storage/user/3128/files/1508b000-fcc1-11ea-9c83-af251e61eeb4)

```javascript
LogUtils.groupCollapsedLog('test', null, 'GROUP COLLAPSED LOG', { color: '#40a53a' });
LogUtils.groupCollapsedDir({ x: 1, y: 2 }, 'GROUP COLLAPSED DIR', { color: '#40a53a' });
LogUtils.groupCollapsedTable({ x: 1, y: 2 }, 'GROUP COLLAPSED TABLE', { color: '#40a53a' });
```

![group_collapsed_1](https://git.linecorp.com/storage/user/3128/files/2b167080-fcc1-11ea-889f-f78eff8387b1)
