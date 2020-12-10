// eslint-disable-next-line
import { __RewireAPI__ as seogiRewireUtils } from '../../src/utils';
import { setMockOfWindowObject } from '../utils';

describe('isBrowser', () => {
  it('should be return a true', () => {
    // Given
    setMockOfWindowObject({});
    const isBrowser = seogiRewireUtils.__get__('isBrowser');
    // When
    const result = isBrowser();
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a false', () => {
    // Given
    setMockOfWindowObject(undefined);
    const isBrowser = seogiRewireUtils.__get__('isBrowser');
    // When
    const result = isBrowser();
    // Then
    expect(result).toEqual(false);
  });
});
