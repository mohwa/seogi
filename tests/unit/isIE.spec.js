// eslint-disable-next-line
import { __RewireAPI__ as seogiRewireAPI } from '../../lib';
import { setMockOfWindowObject } from '../utils';

describe('_isIE', () => {
  it('should be return a false if isBrowser is false', () => {
    // Given
    const isIE = seogiRewireAPI.__get__('isIE');
    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return false;
    });
    // When
    const result = isIE();
    // Then
    expect(result).toEqual(false);
  });

  it('should be return a false if _isIE is false', () => {
    // Given
    const isIE = seogiRewireAPI.__get__('isIE');

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('_isIE', () => {
      return false;
    });
    // When
    const result = isIE();
    // Then
    expect(result).toEqual(false);
  });

  it('should be return a false if _isIE is true', () => {
    // Given
    const isIE = seogiRewireAPI.__get__('isIE');

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('_isIE', () => {
      return true;
    });
    // When
    const result = isIE();
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a true if IE5', () => {
    // Given
    setMockOfWindowObject({ navigator: { userAgent: 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 98; DigExt)' } });
    const isIE = seogiRewireAPI.__get__('isIE');

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('_isIE', () => {
      return true;
    });
    // When
    const result = isIE(5);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a true if IE9', () => {
    // Given
    setMockOfWindowObject({
      navigator: { userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; KTXN)' },
    });
    const isIE = seogiRewireAPI.__get__('isIE');

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('_isIE', () => {
      return true;
    });
    // When
    const result = isIE(9);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a false when argument value to 10 at IE9', () => {
    // Given
    setMockOfWindowObject({
      navigator: { userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; KTXN)' },
    });
    const isIE = seogiRewireAPI.__get__('isIE');

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('_isIE', () => {
      return true;
    });
    // When
    const result = isIE(10);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return a true if IE11', () => {
    // Given
    setMockOfWindowObject({
      navigator: { userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko' },
    });
    const isIE = seogiRewireAPI.__get__('isIE');

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('_isIE', () => {
      return true;
    });
    // When
    const result = isIE(11);
    // Then
    expect(result).toEqual(true);
  });
});
