import { useLayoutEffect, useState } from 'react';
import { debounce } from '../utils/debounce';

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', debounce(updateSize, 200));
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useWindowSize;
