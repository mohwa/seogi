export const updateMockOfWindowObject = (win, v) => {
  const spy = jest.spyOn(global, 'window', 'get');
  spy.mockImplementation(() => ({
    ...win,
    ...v,
  }));
};

export const setMockOfWindowObject = v => {
  const spy = jest.spyOn(global, 'window', 'get');
  spy.mockImplementation(() => v);
};
