import styles from '../assets/styles/Footer.module.css';

export function Copyright() {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.copyright} text-center text-white`}>
      <span>Copyright © {year} Arnaudovski. All rights reserved.</span>
    </div>
  );
}
