// eslint-disable-next-line
import { warn, __RewireAPI__ as leaveRewireAPI } from '../../lib/index';

describe('warn', () => {
  let spy;
  const fnName = 'getStyleMsg';

  beforeEach(() => {
    spy = jest.spyOn(console, 'warn');
    spy.mockImplementation();
  });

  afterEach(() => {
    leaveRewireAPI.__ResetDependency__(fnName);
  });

  it('should be have message argument of string type when call to warn method', () => {
    // Given
    const message = 'test';
    leaveRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    warn(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of number type when call to warn method', () => {
    // Given
    const message = 1;
    leaveRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    warn(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of boolean type when call to warn method', () => {
    // Given
    const message = false;
    leaveRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    warn(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of function type when call to warn method', () => {
    // Given
    const message = () => {};
    leaveRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    warn(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of object type when call to warn method', () => {
    // Given
    const message = {};
    leaveRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    warn(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of string type and style argument of string type when call to warn method', () => {
    // Given
    const message = 'test';
    const style = { color: 'red' };
    const resultMessage = `%c${message}`;
    const resultStyle = 'color:red';

    leaveRewireAPI.__Rewire__(fnName, () => [resultMessage, ...[resultStyle]]);

    // When
    warn(message, style);
    // Then
    expect(spy).toHaveBeenCalledWith(resultMessage, resultStyle);
  });

  it('should be have message argument of string type and style argument of string type when call to warn method', () => {
    // Given
    const message = 'test';
    const style = { color: 'red', backgroundColor: 'green' };
    const resultMessage = `%c${message}`;
    const resultStyle = 'color:red;background-color:green';

    leaveRewireAPI.__Rewire__(fnName, () => [resultMessage, ...[resultStyle]]);

    // When
    warn(message, style);
    // Then
    expect(spy).toHaveBeenCalledWith(resultMessage, resultStyle);
  });
});
