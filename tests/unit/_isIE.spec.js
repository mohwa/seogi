// eslint-disable-next-line
import { __RewireAPI__ as seogiRewireAPI } from '../../lib';
import { setMockOfWindowObject } from '../utils';

describe('_isIE', () => {
  it('should be return a true if IE5 user agent', () => {
    // Given
    setMockOfWindowObject({ navigator: { userAgent: 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)' } });
    const _isIE = seogiRewireAPI.__get__('_isIE');
    // When
    const result = _isIE();
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a true if IE11 user agent.', () => {
    // Given
    setMockOfWindowObject({
      navigator: { userAgent: 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko' },
    });
    const _isIE = seogiRewireAPI.__get__('_isIE');
    // When
    const result = _isIE();
    // Then
    expect(result).toEqual(true);
  });

  it('should be return a false if IE is not', () => {
    // Given
    setMockOfWindowObject({
      navigator: {
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
      },
    });
    const _isIE = seogiRewireAPI.__get__('_isIE');
    // When
    const result = _isIE();
    // Then
    expect(result).toEqual(false);
  });
});
