import { useEffect, useRef } from 'react';
import { bus as busPeople } from './bus.people';

export function useEventBus() {
  const unListeners = useRef<(() => void)[]>([]);

  useEffect(() => {
    unListeners.current.push(busPeople());

    return () => {
      unListeners.current.forEach((unlisten) => unlisten);
      unListeners.current = [];
    };
  }, []);
}
