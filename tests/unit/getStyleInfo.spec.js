// eslint-disable-next-line
import { getStyleInfo } from '../../lib/utils';

describe('getStyleInfo', () => {
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
