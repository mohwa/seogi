// eslint-disable-next-line
import { group, __RewireAPI__ as leaveRewireAPI } from '../../lib/index';

describe('group', () => {
  const groupSpy = jest.spyOn(console, 'group');
  groupSpy.mockImplementation();

  const groupEndSpy = jest.spyOn(console, 'groupEnd');

  it('should be call each methods', () => {
    // Given
    const v = ['test'];
    const label = 'label';
    const style = { color: 'red' };

    const getStyleMsgSpy = jest.fn(() => v);
    const reportSpy = jest.fn();

    leaveRewireAPI.__Rewire__('getStyleMsg', getStyleMsgSpy);
    leaveRewireAPI.__Rewire__('report', reportSpy);

    // When
    group(v, label, style);

    // Then
    expect(groupSpy).toHaveBeenCalled();
    expect(getStyleMsgSpy).toHaveBeenCalled();
    expect(reportSpy).toHaveBeenCalled();
    expect(groupEndSpy).toHaveBeenCalled();
  });
});
