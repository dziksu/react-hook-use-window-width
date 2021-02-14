import { act, renderHook } from '@testing-library/react-hooks';
import useWindowWidth from '../src/index';

describe('it', () => {
  it('useWindowWidth return default global innerWidth value as 1024', () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current).toBe(1024);

    global.requestAnimationFrame = jest.fn(cb => {
      cb(1);
      return 1;
    });
  });

  it('useWindowWidth return new value after change size of window', () => {
    const { result } = renderHook(() => useWindowWidth());

    act(() => {
      Object.assign(global, { innerWidth: 500 });
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.all.length).toBe(2);
    expect(result.all[0]).toBe(1024);
    expect(result.all[1]).toBe(500);
  });
});
