import { useScrollPosition, useWindowSize } from 'hooks';
import { Link, useLocation } from 'react-router-dom';

import styles from '../assets/styles/Header.module.scss';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import Logo from 'assets/logo.svg';

import { navigation } from 'data/navigation';
import { contact } from 'data/contact';

export function Header() {
  const location = useLocation();
  const currentSlug = location.pathname;

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  const windowWidth = useWindowSize().width;
  const windowIsLarge = windowWidth > 992;

  const logoClassNames = [
    styles['logo'],
    windowIsLarge ? (isScrolled ? null : styles['invert']) : null,
    'd-inline-block',
    'align-top',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg={windowIsLarge ? (isScrolled ? 'light' : 'transparent') : 'light'}
        variant={windowIsLarge ? (isScrolled ? 'light' : 'dark') : 'light'}
        fixed='top'
        className={isScrolled ? 'scroll' : ''}
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <Image fluid src={Logo} width='180' className={logoClassNames} alt='Lorem Ipsum Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav defaultActiveKey={navigation[0].slug} activeKey={currentSlug} className='mx-auto'>
              {navigation &&
                navigation.map((item, i) => {
                  return (
                    <Nav.Link as={Link} to={`/${item.slug}`} eventKey={`/${item.slug}`} key={i}>
                      {item.title}
                    </Nav.Link>
                  );
                })}
            </Nav>
            <Nav activeKey='none'>
              {contact &&
                contact.map((item, i) => {
                  return (
                    <Nav.Link href={`${item.type}${item.contact}`} key={i}>
                      {item.icon}
                      <span className='ms-2'>{item.contact}</span>
                    </Nav.Link>
                  );
                })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
