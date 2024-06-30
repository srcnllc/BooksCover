import { useEffect, useState } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return scroll;
}
