import React from 'react';
import styles from './Supertitle.module.css';

export function Supertitle({ children, align }) {
  const alignStyle = align ? align : 'center';

  return (
    <span
      className={`${styles.supertitle} ${styles[alignStyle]} text-uppercase mb-lg-1 mb-lg-2`}
    >
      {children}
    </span>
  );
}

export default Supertitle;
