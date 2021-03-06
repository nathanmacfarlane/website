import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { width, height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions =() => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}