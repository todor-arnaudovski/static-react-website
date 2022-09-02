import LogoLightImg from 'assets/logo-light.png';
import LogoDarkImg from 'assets/logo-dark.png';
import LogoLetterImg from 'assets/logo-letter.png';

import styles from './Brand.module.css';
import { Link } from 'react-router-dom';

export function Brand({ className, variant }) {
  let isFull, isLight;

  switch (variant) {
    case 'full':
      isFull = true;
      isLight = false;
      break;
    case 'full-light':
      isFull = true;
      isLight = true;
      break;
    case 'small':
      isFull = false;
      isLight = false;
      break;
    default:
      isFull = false;
      isLight = false;
  }

  return (
    <div
      className={`${
        isFull ? styles['logo-full'] : styles['logo-small']
      } ${className}`}
    >
      <Link to='/'>
        <img
          src={`${
            isFull ? (isLight ? LogoLightImg : LogoDarkImg) : LogoLetterImg
          }`}
          className='img-fluid'
          alt='Арнаудовски'
        />
      </Link>
    </div>
  );
}
