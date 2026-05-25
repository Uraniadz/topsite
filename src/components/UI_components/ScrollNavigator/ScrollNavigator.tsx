import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './ScrollNavigator.module.css';

const ScrollNavigator = () => {
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const windowHeight = window.innerHeight;

      const documentHeight = document.documentElement.scrollHeight;

      setIsTop(scrollTop < 50);

      setIsBottom(scrollTop + windowHeight >= documentHeight - 50);

      setIsScrolling(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);

      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${styles.navigator} ${
        isScrolling ? styles.navigator__hidden : ''
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`${styles.navigator__button} ${
          isTop ? styles.navigator__buttonInactive : ''
        }`}
      >
        <ChevronUp size={20} />
      </button>

      <div className={styles.navigator__divider} />

      <button
        type="button"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className={`${styles.navigator__button} ${
          isBottom ? styles.navigator__buttonInactive : ''
        }`}
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
};

export default ScrollNavigator;
