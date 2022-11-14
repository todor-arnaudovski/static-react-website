import { Link } from 'react-router-dom';
import BackgroundImg from '../assets/images/background.jpg';
import Logo from 'assets/logo.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styles from '../assets/styles/Footer.module.scss';

import { ContentSpacing } from 'components';

import { navigation } from 'data/navigation';
import { contact } from 'data/contact';
import { footer } from 'data/footer';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <ContentSpacing>
        <Container>
          <Row className='justify-content-around'>
            <Col lg={3} className='mb-3 mb-lg-0'>
              <div className={`${styles.logo} ${styles.invert} mb-2 mb-lg-3`}>
                <Link to='/'>
                  <Image fluid src={Logo} alt='Lorem Ipsum Logo' className='w-100' />
                </Link>
              </div>
              <div className='text-light'>
                <h2 className='h4 mb-2 mb-lg-3'>{footer.col_1.title}</h2>
                <p>{footer.col_1.text}</p>
              </div>
            </Col>
            <Col lg={3} className='text-light mb-3 mb-lg-0'>
              <h2 className='h5 border-bottom border-2 pb-2 pb-lg-3 mb-2 mb-lg-3'>
                {footer.col_2.title}
              </h2>
              <p>{footer.col_2.text}</p>
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
                {footer.col_3.title}
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
      <div className={`${styles.copyright} text-center text-light pt-0`}>
        <span>Copyright © {year} Lorem Ipsum. All rights reserved.</span>
      </div>
    </footer>
  );
}
