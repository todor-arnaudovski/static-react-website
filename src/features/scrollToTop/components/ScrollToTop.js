import { useScrollPosition } from 'hooks';

import Button from 'react-bootstrap/Button';

import { BsChevronCompactUp } from 'react-icons/bs';

import styles from '../assets/ScrollToTop.module.scss';

export const ScrollToTop = () => {
  const scrollPosition = useScrollPosition();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const classNames = [styles['scroll-to-top'], scrollPosition > 0 ? styles['show'] : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <Button variant='dark' onClick={handleScrollToTop}>
        <BsChevronCompactUp />
      </Button>
    </div>
  );
};
