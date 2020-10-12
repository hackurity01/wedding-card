import { useEffect } from 'react';
import { preloadImages } from 'src/lib/helper';

export function usePreloadImages(images: string[]) {
  useEffect(() => {
    preloadImages(images);
  }, [images]);
}
