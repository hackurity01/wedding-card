import { useEffect, useCallback, useState } from 'react';

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollTop(window.pageYOffset);
    // setScrollY(entry.intersectionRatio);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(handleScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    scrollTop,
  };
};
