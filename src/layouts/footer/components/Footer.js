import { Link } from 'react-router-dom';
import BackgroundImg from '../assets/images/background.jpg';
import LogoLetterImg from 'assets/logo-letter.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/Footer.module.scss';

import { ContentSpacing } from 'components';

import { contact, navigation } from 'data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <ContentSpacing>
        <Container>
          <Row className='justify-content-around'>
            <Col lg={3}>
              <div className={`${styles.logo} mb-2 mb-lg-3`}>
                <Link to='/'>
                  <img
                    src={LogoLetterImg}
                    className='img-fluid'
                    alt='Арнаудовски'
                  />
                </Link>
              </div>
              <div className='text-light'>
                <h2 className='h4 mb-2 mb-lg-3'>Арнаудовски</h2>
                <p>
                  We actively share our knowledge and pass down years of
                  experience to maintain excellence throughout the firm.
                </p>
              </div>
            </Col>
            <Col lg={3} className='text-light'>
              <h2 className='h5 border-bottom border-2 pb-2 pb-lg-3 mb-2 mb-lg-3'>
                Контактирајте нè
              </h2>
              <p>
                We are diligent and determined because we care about the success
                of our clients.
              </p>
              <ul className='list-unstyled mb-0'>
                {contact.map((contact, i) => {
                  return (
                    <li className='mb-2' key={i}>
                      <a
                        href={`${contact.type}${contact.contact}`}
                        className='link-light text-decoration-none'
                      >
                        {contact.icon}
                        <span className='ms-2'>{contact.contact}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col lg={3} className='text-light'>
              <h2 className='h5 border-bottom border-2 pb-2 pb-lg-3 mb-2 mb-lg-3'>
                Арнаудовски
              </h2>
              <ul className='list-unstyled'>
                {navigation &&
                  navigation.map((link, i) => {
                    return (
                      <li className='mb-2' key={i}>
                        <Link
                          to={`/${link.slug}`}
                          key={i}
                          className='link-light text-decoration-none'
                        >
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </Col>
          </Row>
        </Container>
      </ContentSpacing>
      <div className={`${styles.copyright} text-center text-light`}>
        <span>Copyright © {year} Arnaudovski. All rights reserved.</span>
      </div>
    </footer>
  );
}
