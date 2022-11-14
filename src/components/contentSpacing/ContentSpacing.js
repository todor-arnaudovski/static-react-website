import styles from './ContentSpacing.module.scss';

export function ContentSpacing({ children, className, as, variant, background }) {
  const spacingAmount = variant ? variant : 'large';
  const backgroundImageStyle = background
    ? { backgroundImage: `url(${background})` }
    : { background: 'none' };

  const validElements = ['section', 'article'];
  const safeElement = as ? as.toLowerCase() : '';
  const Element = validElements.includes(safeElement) ? safeElement : 'div';

  const classNames = [
    styles[`content-spacing-${spacingAmount}`],
    background ? styles['background-img'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Element className={classNames} style={backgroundImageStyle}>
      {children}
    </Element>
  );
}
