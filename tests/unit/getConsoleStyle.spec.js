// eslint-disable-next-line
import { __RewireAPI__ as leaveRewireAPI } from '../../lib/index';

describe('getConsoleStyle', () => {
  const getConsoleStyle = leaveRewireAPI.__get__('getConsoleStyle');

  it('should be return style with one property', () => {
    // Given
    const style = { color: 'red' };

    // When
    const result = getConsoleStyle(style);

    // Then
    expect(result).toBe('color:red');
  });

  it('should be return style with two property', () => {
    // Given
    const style = { color: 'red', backgroundColor: 'white' };

    // When
    const result = getConsoleStyle(style);

    // Then
    expect(result).toBe('color:red;background-color:white');
  });
});
