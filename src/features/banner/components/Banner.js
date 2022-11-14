import BackgroundImg from 'assets/images/backgrounds/banner-bg.jpg';

import styles from '../assets/styles/Banner.module.scss';

import { ContentSpacing } from 'components';
import { capitalizeText } from 'helpers';

export const Banner = (props) => {
  const { children } = props;

  const pageTitle = window.location.pathname.substring(1).split('-').join(' ');

  const bannerTitle = capitalizeText(pageTitle);

  return (
    <ContentSpacing
      background={BackgroundImg}
      as='section'
      variant='medium'
      className='overlay-dark'
    >
      <h2 className={`${styles.title} h2 text-center text-white mt-5`}>{bannerTitle}</h2>
      {children}
    </ContentSpacing>
  );
};
