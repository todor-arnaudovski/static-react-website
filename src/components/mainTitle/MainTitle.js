import styles from './MainTitle.module.scss';

export function MainTitle({ children, variant }) {
  const headingLevelSize = variant ? `title-${variant}` : `title-normal`;
  let margins;

  switch (variant) {
    case 'large':
      margins = 'mb-3 mb-lg-4';
      break;
    case 'normal':
      margins = 'mb-2 mb-lg-3';
      break;
    default:
      margins = 'mb-2 mb-lg-3';
  }

  return (
    <h2 className={`${styles[headingLevelSize]} ${margins}`}>{children}</h2>
  );
}
