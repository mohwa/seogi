// eslint-disable-next-line
import { groupCollapsed, __RewireAPI__ as leaveRewireAPI } from '../../lib';

describe('groupCollapsed', () => {
  const groupCollapsedSpy = jest.spyOn(console, 'groupCollapsed');
  groupCollapsedSpy.mockImplementation();

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
    groupCollapsed(v, label, style);

    // Then
    expect(groupCollapsedSpy).toHaveBeenCalled();
    expect(getStyleMsgSpy).toHaveBeenCalled();
    expect(reportSpy).toHaveBeenCalled();
    expect(groupEndSpy).toHaveBeenCalled();
  });
});
