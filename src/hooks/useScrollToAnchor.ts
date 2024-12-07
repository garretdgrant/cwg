import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
      }
    }
  }, [hash]);
}

export default useScrollToAnchor;
