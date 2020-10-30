// eslint-disable-next-line
import { assert, __RewireAPI__ as seogiRewireAPI } from '../../lib';

describe('assert', () => {
  let spy;
  const fnName = 'log';

  beforeEach(() => {
    spy = jest.fn();
    seogiRewireAPI.__Rewire__(fnName, spy);
  });

  afterEach(() => {
    seogiRewireAPI.__ResetDependency__(fnName);
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
