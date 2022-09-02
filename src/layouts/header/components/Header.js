import { useScrollPosition } from 'hooks';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from '../assets/styles/Header.module.css';

import { Brand, ContactInfo, Navigation } from 'components';

export function Header() {
  const scrollPosition = useScrollPosition(),
    isScrolled = scrollPosition > 0;

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg={`${isScrolled ? 'light' : 'transparent'}`}
        variant={`${isScrolled ? 'light' : 'dark'}`}
        fixed='top'
        className={`${styles.header} ${isScrolled && styles.scroll}`}
      >
        <Container>
          <Brand
            variant={`${isScrolled ? 'full' : 'full-light'}`}
            className='me-2 my-2'
          />
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Navigation variant='header' />
            <ContactInfo variant='inline' />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
