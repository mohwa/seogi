// eslint-disable-next-line
import { __RewireAPI__ as seogiRewireUtils } from '../../lib/utils';

describe('toColorName', () => {
  it('should be return a `Red` if `red`', () => {
    // Given
    const value = 'red';
    const toColorName = seogiRewireUtils.__get__('toColorName');
    // When
    const result = toColorName(value);
    // Then
    expect(result).toEqual('Red');
  });

  it('should be return a `Blue` if `blue`', () => {
    // Given
    const value = 'blue';
    const toColorName = seogiRewireUtils.__get__('toColorName');
    // When
    const result = toColorName(value);
    // Then
    expect(result).toEqual('Blue');
  });
});
