import {useEffect, useRef} from 'react';

export const useInterval = (callback, intervalTime) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (intervalTime !== null) {
      const id = setInterval(tick, intervalTime);
      return () => clearInterval(id);
    }
  }, [intervalTime]);
};
