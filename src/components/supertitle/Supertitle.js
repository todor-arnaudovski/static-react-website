import React from 'react';
import styles from './Supertitle.module.css';

export function Supertitle({ children, align }) {
  const alignStyle = align ? align : 'center';

  return (
    <span
      className={`${styles.supertitle} ${styles[alignStyle]} text-uppercase mb-lg-2 mb-lg-3`}
    >
      {children}
    </span>
  );
}

export default Supertitle;
