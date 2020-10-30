// eslint-disable-next-line
import { log, __RewireAPI__ as seogiRewireAPI } from '../../lib';

describe('log', () => {
  let spy;
  const fnName = 'getStyleMsg';

  beforeEach(() => {
    spy = jest.spyOn(console, 'log');
    spy.mockImplementation();
  });

  afterEach(() => {
    seogiRewireAPI.__ResetDependency__(fnName);
  });

  it('should be have message argument of string type when call to log method', () => {
    // Given
    const message = 'test';
    seogiRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    log(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of number type when call to log method', () => {
    // Given
    const message = 1;
    seogiRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    log(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of boolean type when call to log method', () => {
    // Given
    const message = false;
    seogiRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    log(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of function type when call to log method', () => {
    // Given
    const message = () => {};
    seogiRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    log(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of object type when call to log method', () => {
    // Given
    const message = {};
    seogiRewireAPI.__Rewire__(fnName, () => [message]);

    // When
    log(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of string type and style argument of string type when call to log method', () => {
    // Given
    const message = 'test';
    const style = { color: 'red' };
    const resultMessage = `%c${message}`;
    const resultStyle = 'color:red';

    seogiRewireAPI.__Rewire__(fnName, () => [resultMessage, ...[resultStyle]]);

    // When
    log(message, style);
    // Then
    expect(spy).toHaveBeenCalledWith(resultMessage, resultStyle);
  });

  it('should be have message argument of string type and style argument of string type when call to log method', () => {
    // Given
    const message = 'test';
    const style = { color: 'red', backgroundColor: 'green' };
    const resultMessage = `%c${message}`;
    const resultStyle = 'color:red;background-color:green';

    seogiRewireAPI.__Rewire__(fnName, () => [resultMessage, ...[resultStyle]]);

    // When
    log(message, style);
    // Then
    expect(spy).toHaveBeenCalledWith(resultMessage, resultStyle);
  });
});
