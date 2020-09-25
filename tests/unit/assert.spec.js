// eslint-disable-next-line
import { assert, __RewireAPI__ as leaveRewireAPI } from '../../lib/index';

describe('assert', () => {
  let spy;
  const fnName = 'log';

  beforeEach(() => {
    spy = jest.fn();
    leaveRewireAPI.__Rewire__(fnName, spy);
  });

  afterEach(() => {
    leaveRewireAPI.__ResetDependency__(fnName);
  });

  it('should be call to log method if true result value of assertion function', () => {
    // Given
    const assertion = () => true;
    const message = 'test';
    const style = { color: 'red' };
    // When
    assert(assertion, message, style);
    // Then
    expect(spy).toHaveBeenCalled();
  });

  it('should be not call to log method if false result value of assertion function', () => {
    // Given
    const assertion = () => false;
    const message = 'test';
    const style = { color: 'red' };
    // When
    assert(assertion, message, style);
    // Then
    expect(spy).not.toHaveBeenCalled();
  });
});
