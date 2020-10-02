// eslint-disable-next-line
import { __RewireAPI__ as leaveRewireAPI } from '../../lib';

describe('report', () => {
  const spy = jest.fn();
  const report = leaveRewireAPI.__get__('report');

  it('should be call to element of function type', () => {
    // Given
    const v = [() => spy()];

    // When
    report(v);

    // Then
    expect(spy).toHaveBeenCalled();
  });

  it('should be call log function when element of string type', () => {
    // Given
    const msg = 'test';

    const v = [msg];
    leaveRewireAPI.__Rewire__('log', spy);

    // When
    report(v);

    // Then
    expect(spy).toHaveBeenCalled();
  });

  it('should be call log function when element of number type', () => {
    // Given
    const msg = 1;

    const v = [msg];
    leaveRewireAPI.__Rewire__('log', spy);

    // When
    report(v);

    // Then
    expect(spy).toHaveBeenCalled();
  });
});
