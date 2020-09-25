const { log, error, warn, info, debug, assert } = require('../lib/index');

log('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '10px' });
error('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '20px' });
warn('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '30px' });
info('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '40px' });
debug('Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '50px' });
assert(() => true /* or false */, 'Hello World', { color: 'gray', backgroundColor: 'yellow', fontSize: '60px' });
