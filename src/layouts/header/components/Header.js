import { useScrollPosition } from 'hooks';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from 'data';
import { contact } from 'data';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import LogoLight from 'assets/logo-light.png';
import LogoDark from 'assets/logo-dark.png';

export function Header() {
  const location = useLocation();
  const currentSlug = location.pathname;

  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg={isScrolled ? 'light' : 'transparent'}
        variant={isScrolled ? 'light' : 'dark'}
        fixed='top'
        className={isScrolled ? 'scroll' : ''}
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={isScrolled ? LogoDark : LogoLight}
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
                      className='mx-xl-2'
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
                    <Nav.Link
                      href={`${item.type}${item.contact}`}
                      className='mx-xl-2'
                      key={i}
                    >
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
