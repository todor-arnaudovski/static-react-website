import { useScrollPosition, useWindowSize } from 'hooks';
import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import LogoLight from 'assets/logo-light.png';
import LogoDark from 'assets/logo-dark.png';

import { navigation } from 'data/navigation';
import { contact } from 'data/contact';

export function Header() {
  const location = useLocation();
  const currentSlug = location.pathname;

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  const windowWidth = useWindowSize().width;
  const windowIsLarge = windowWidth > 992;

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
            <Image
              fluid
              src={
                windowIsLarge ? (isScrolled ? LogoDark : LogoLight) : LogoDark
              }
              width='180'
              className='d-inline-block align-top'
              alt='Арнаудовски'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              defaultActiveKey={navigation[0].slug}
              activeKey={currentSlug}
              className='mx-auto'
            >
              {navigation &&
                navigation.map((item, i) => {
                  return (
                    <Nav.Link
                      as={Link}
                      to={`/${item.slug}`}
                      eventKey={`/${item.slug}`}
                      key={i}
                    >
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
