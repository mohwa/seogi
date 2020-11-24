import { dir } from '../../lib';

describe('dir', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'dir');
    spy.mockImplementation();
  });

  it('should be have message argument of string type when call to dir method', () => {
    // Given
    const message = 'test';
    // When
    dir(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of object type when call to dir method', () => {
    // Given
    const message = { x: 1, y: 2 };
    // When
    dir(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });
});
