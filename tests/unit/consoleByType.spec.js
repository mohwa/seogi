// // eslint-disable-next-line
// import { __RewireAPI__ as leaveRewireAPI } from '../../lib/index';
//
// describe('consoleByType', () => {
//   const spy = jest.fn();
//   const consoleByType = leaveRewireAPI.__get__('consoleByType');
//
//   it('should be call log function with arguments', () => {
//     // Given
//     const type = 'log';
//     const msg = 'test';
//     const style = { color: 'red' };
//
//     leaveRewireAPI.__Rewire__(type, spy);
//
//     // When
//     consoleByType(type, msg, style);
//
//     // Then
//     expect(spy).toHaveBeenCalledWith(msg, style);
//   });
//
//   it('should be call error function with arguments', () => {
//     // Given
//     const type = 'error';
//     const msg = 'test';
//     const style = { color: 'red' };
//
//     leaveRewireAPI.__Rewire__(type, spy);
//
//     // When
//     consoleByType(type, msg, style);
//
//     // Then
//     expect(spy).toHaveBeenCalledWith(msg, style);
//   });
//
//   it('should be call info function with arguments', () => {
//     // Given
//     const type = 'info';
//     const msg = 'test';
//     const style = { color: 'red' };
//
//     leaveRewireAPI.__Rewire__(type, spy);
//
//     // When
//     consoleByType(type, msg, style);
//
//     // Then
//     expect(spy).toHaveBeenCalledWith(msg, style);
//   });
//
//   it('should be call warn function with arguments', () => {
//     // Given
//     const type = 'warn';
//     const msg = 'test';
//     const style = { color: 'red' };
//
//     leaveRewireAPI.__Rewire__(type, spy);
//
//     // When
//     consoleByType(type, msg, style);
//
//     // Then
//     expect(spy).toHaveBeenCalledWith(msg, style);
//   });
// });
