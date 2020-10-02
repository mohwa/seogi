// eslint-disable-next-line
import { __RewireAPI__ as leaveRewireAPI } from '../../lib';

describe('getStyleInfo', () => {
  const getStyleInfo = leaveRewireAPI.__get__('getStyleInfo');

  it('should be return style with one property', () => {
    // Given
    const style = { color: 'red' };

    // When
    const result = getStyleInfo(style);

    // Then
    expect(result).toBe('color:red');
  });

  it('should be return style with two property', () => {
    // Given
    const style = { color: 'red', backgroundColor: 'white' };

    // When
    const result = getStyleInfo(style);

    // Then
    expect(result).toBe('color:red;background-color:white');
  });
});
