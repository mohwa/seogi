// eslint-disable-next-line
import { table } from '../../lib/index';

describe('table', () => {
  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'table');
    spy.mockImplementation();
  });

  it('should be have message argument of string type when call to table method', () => {
    // Given
    const message = 'test';
    // When
    table(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });

  it('should be have message argument of object type when call to table method', () => {
    // Given
    const message = { x: 1, y: 2 };
    // When
    table(message);
    // Then
    expect(spy).toHaveBeenCalledWith(message);
  });
});
