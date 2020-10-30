// eslint-disable-next-line
import { __RewireAPI__ as seogiRewireAPI } from '../../lib';
import { setMockOfWindowObject } from '../utils';

describe('isBrowser', () => {
  it('should be return a true', () => {
    // Given
    setMockOfWindowObject({});
    const isBrowser = seogiRewireAPI.__get__('isBrowser');
    // When
    const result = isBrowser();
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a false', () => {
    // Given
    setMockOfWindowObject(undefined);
    const isBrowser = seogiRewireAPI.__get__('isBrowser');
    // When
    const result = isBrowser();
    // Then
    expect(result).toEqual(false);
  });
});
