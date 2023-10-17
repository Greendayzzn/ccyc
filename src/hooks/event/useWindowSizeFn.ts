/*
 * @Author: 张卓南
 * @Date: 2023-10-18 00:35:44
 * @LastEditTime: 2023-10-18 00:38:40
 * @Description: 
 */
import { tryOnMounted, tryOnUnmounted } from '@vueuse/core';
import { useDebounceFn } from '@vueuse/core';

interface WindowSizeOptions {
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}

export function useWindowSizeFn<T>(fn, wait = 150, options?: WindowSizeOptions) {
  let handler = () => {
    fn();
  };
  const handleSize = useDebounceFn(handler, wait);
  handler = handleSize;

  const start = () => {
    if (options && options.immediate) {
      handler();
    }
    window.addEventListener('resize', handler);
  };

  const stop = () => {
    window.removeEventListener('resize', handler);
  };

  tryOnMounted(() => {
    start();
  });

  tryOnUnmounted(() => {
    stop();
  });
  return [start, stop];
}
