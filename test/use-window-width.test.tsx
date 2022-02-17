import { renderHook } from '@testing-library/react-hooks';
import useWindowWidth from '../src/index';

beforeAll(() => {
  global.ResizeObserver = require('resize-observer-polyfill');
  window.ResizeObserver = require('resize-observer-polyfill');
});

describe('it', () => {
  it('useWindowWidth return default global innerWidth value as 1024', () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current).toBe(1024);
  });

  // TODO: handle resize observer in tests
  // it('useWindowWidth return new value after change size of window', () => {
  //   const { result } = renderHook(() => useWindowWidth());
  //   act(() => {
  //     Object.assign(global, { innerWidth: 500 });
  //     const element = document.querySelector('html');
  //     if(element){
  //       element.dispatchEvent(new CustomEvent('update'));
  //     }
  //     global.dispatchEvent(new Event('resize'));
  //   });
  //
  //   expect(result.all.length).toBe(2);
  //   expect(result.all[0]).toBe(1024);
  //   expect(result.all[1]).toBe(500);
  // });
});
