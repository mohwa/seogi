// eslint-disable-next-line
import { getCreatorColorsMsg } from '../../lib/utils';

describe('getCreatorColorsMsg', () => {
  it('should be return undefined when not there is some style attributes', () => {
    // Given
    const style = { fontSize: '17px' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toEqual(undefined);
  });

  it('should be return creator function that with italic attributes', () => {
    // Given
    const style = { fontStyle: 'italic' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with bold attributes', () => {
    // Given
    const style = { fontWeight: 'bold' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with underline attributes', () => {
    // Given
    const style = { textDecoration: 'underline' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with strikethrough attributes', () => {
    // Given
    const style = { textDecoration: 'line-through' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with hidden attributes', () => {
    // Given
    const style = { visibility: 'hidden' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with bgColor attributes', () => {
    // Given
    const style = { backgroundColor: 'red' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with bgColorBright attributes', () => {
    // Given
    const style = { backgroundColor: 'red', backgroundColorBright: true };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with color attributes', () => {
    // Given
    const style = { color: 'red' };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });

  it('should be return creator function that with colorBright attributes', () => {
    // Given
    const style = { color: 'red', colorBright: true };

    // When
    const result = getCreatorColorsMsg(style);

    // Then
    expect(result).toBeInstanceOf(Function);
  });
});
