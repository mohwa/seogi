// eslint-disable-next-line
import { getStyleMsg, __RewireAPI__ as seogiRewireAPI } from '../../lib';

describe('getStyleMsg', () => {
  it('should be return a message of the string type', () => {
    // Given
    const message = 'test';

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the number type', () => {
    // Given
    const message = 1;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the boolean type', () => {
    // Given
    const message = true;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the function type', () => {
    // Given
    const message = () => {};

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the object type', () => {
    // Given
    const message = {};

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the null type', () => {
    // Given
    const message = null;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the undefined type', () => {
    // Given
    const message = undefined;

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the string type', () => {
    // Given
    const message = ['test', 'test2'];

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([`${message[0]} ${message[1]}`]);
  });

  it('should be return a message of the string type', () => {
    // Given
    const message = 'test';
    const style = 'color:red';

    // When
    const result = getStyleMsg(message, style);

    // Then
    expect(result).toEqual([message]);
  });

  it('should be return a message of the string type when isIE9ToIE11 is true at the style of object type', () => {
    // Given
    const message = 'test';

    seogiRewireAPI.__Rewire__('isObject', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isIE9ToIE11', () => {
      return true;
    });

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);

    seogiRewireAPI.__ResetDependency__('isObject');
    seogiRewireAPI.__ResetDependency__('isBrowser');
    seogiRewireAPI.__ResetDependency__('isIE9ToIE11');
  });

  it('should be return a message and style of the string type when isIE9ToIE11 is false at the style of object type', () => {
    // Given
    const message = 'test';
    const returnedStyle = 'color:red;fontSize:17px';

    seogiRewireAPI.__Rewire__('isObject', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isIE9ToIE11', () => {
      return false;
    });

    seogiRewireAPI.__Rewire__('getStyleInfo', () => {
      return returnedStyle;
    });

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([`%c${message}`, returnedStyle]);

    seogiRewireAPI.__ResetDependency__('isObject');
    seogiRewireAPI.__ResetDependency__('isBrowser');
    seogiRewireAPI.__ResetDependency__('isIE9ToIE11');
    seogiRewireAPI.__ResetDependency__('getStyleInfo');
  });

  it('should be return a message of the string type when isBrowser is false at the style of object type', () => {
    // Given
    const message = 'test';

    seogiRewireAPI.__Rewire__('isObject', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return false;
    });

    seogiRewireAPI.__Rewire__('getCreatorChalkMsg', () => {
      return () => message;
    });

    // When
    const result = getStyleMsg(message);

    // Then
    expect(result).toEqual([message]);

    seogiRewireAPI.__ResetDependency__('isObject');
    seogiRewireAPI.__ResetDependency__('isBrowser');
    seogiRewireAPI.__ResetDependency__('getCreatorChalkMsg');
  });

  it('should be return a message of the string type when isIE9ToIE11 is true at a message and style of the array type', () => {
    // Given
    const message = ['test', 'test'];
    const style = [{ color: 'red' }];

    seogiRewireAPI.__Rewire__('isObject', () => {
      return false;
    });

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isIE9ToIE11', () => {
      return true;
    });

    // When
    const result = getStyleMsg(message, style);

    // Then
    expect(result).toEqual([`${message[0]} ${message[1]}`]);

    seogiRewireAPI.__ResetDependency__('isObject');
    seogiRewireAPI.__ResetDependency__('isBrowser');
    seogiRewireAPI.__ResetDependency__('isIE9ToIE11');
  });

  it('should be return a message of the string type when isIE9ToIE11 is false at a message and style of the array type', () => {
    // Given
    const message = ['test1', 'test2', 'test3'];
    const style = { color: 'red' };

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return true;
    });

    seogiRewireAPI.__Rewire__('isIE9ToIE11', () => {
      return false;
    });

    seogiRewireAPI.__Rewire__('getStyleInfo', () => {
      return 'color:red';
    });

    // When
    const result = getStyleMsg(message, style);

    // Then
    expect(result).toEqual([`%c${message[0]} ${message[1]} ${message[2]}`, 'color:red']);

    seogiRewireAPI.__ResetDependency__('isBrowser');
    seogiRewireAPI.__ResetDependency__('isIE9ToIE11');
    seogiRewireAPI.__ResetDependency__('getStyleInfo');
  });

  it('should be return a message of the string type when isBrowser is false at a message and style of the array type', () => {
    // Given
    const message = ['test1', 'test2'];
    const style = [{ color: 'red' }, { color: 'red' }];

    seogiRewireAPI.__Rewire__('isBrowser', () => {
      return false;
    });

    seogiRewireAPI.__Rewire__('getCreatorChalkMsg', () => {
      return () => message[0];
    });

    // When
    const result = getStyleMsg(message, style);

    // Then
    expect(result).toEqual([`${message[0]} ${message[0]}`]);

    seogiRewireAPI.__ResetDependency__('isBrowser');
    seogiRewireAPI.__ResetDependency__('getCreatorChalkMsg');
  });
});
