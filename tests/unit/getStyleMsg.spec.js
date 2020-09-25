// eslint-disable-next-line
import { getStyleMsg, __RewireAPI__ as leaveRewireAPI } from '../../lib/index';

describe('getStyleMsg', () => {
  it('should be return message of string type', () => {
    // Given
    const message = 'test';

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of number type', () => {
    // Given
    const message = 1;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of boolean type', () => {
    // Given
    const message = true;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of function type', () => {
    // Given
    const message = () => {};

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of object type', () => {
    // Given
    const message = {};

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of null type', () => {
    // Given
    const message = null;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of undefined type', () => {
    // Given
    const message = undefined;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of string type', () => {
    // Given
    const message = 'test';
    const style = 'color:red';

    // When
    const result = getStyleMsg(message, style);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return message of string type and style of string type', () => {
    // Given
    const message = 'test';
    const style = { color: 'red', fontSize: '17px' };
    const mockFnName = 'getConsoleStyle';
    const resultStyle = 'color:red;fontSize:17px';

    leaveRewireAPI.__Rewire__(mockFnName, () => {
      return resultStyle;
    });

    // When
    const result = getStyleMsg(message, style);

    // Then
    expect(result).toEqual([`%c${message}`, resultStyle]);

    leaveRewireAPI.__ResetDependency__(mockFnName);
  });

  it('should be return message of string type and style of array type', () => {
    // Given
    const messages = ['test1', 'test2'];
    const styles = [
      { color: 'red', fontSize: '17px' },
      { color: 'blue', fontSize: '20px' },
    ];
    const mockFnName = 'getConsoleStyle';
    const resultMessages = ['%ctest1', '%ctest2'];

    leaveRewireAPI.__Rewire__(mockFnName, v => {
      return v;
    });

    // When
    const result = getStyleMsg(messages, styles);

    // Then
    expect(result).toEqual([resultMessages.join(' '), ...styles]);

    leaveRewireAPI.__ResetDependency__(mockFnName);
  });
});
