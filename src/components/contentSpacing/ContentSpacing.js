import styles from './ContentSpacing.module.scss';

export function ContentSpacing({ children, as, variant, background }) {
  const spacingAmount = variant ? variant : 'large';
  const backgroundImageStyle = background
  ? { backgroundImage: `url(${background})` }
  : { background: 'none' };
  
  const validElements = ['section', 'article'];
  const safeElement = as ? as.toLowerCase() : '';
  const Element = validElements.includes(safeElement) ? safeElement : 'div';

  return (
    <Element
      className={`${styles[`content-spacing-${spacingAmount}`]} ${
        background ? styles['background-img'] : ''
      }`}
      style={backgroundImageStyle}
    >
      {children}
    </Element>
  );
}
