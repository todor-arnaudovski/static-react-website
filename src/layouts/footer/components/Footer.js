import BackgroundImg from '../assets/images/background.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/Footer.module.css';

import {
  ContentSpacing,
  Brand,
  ContactInfo,
  Navigation,
} from 'components';
import { Copyright } from './Copyright';

export function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <ContentSpacing>
        <Container>
          <Row className='justify-content-around'>
            <Col lg={3}>
              <Brand variant='small' className='mb-3 mb-lg-4' />
              <div className='text-white'>
                <h2 className='h4 mb-2 mb-lg-3'>Арнаудовски</h2>
                <p>
                  We actively share our knowledge and pass down years of
                  experience to maintain excellence throughout the firm.
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className='text-white'>
                <h2 className='h5 border-bottom border-2 pb-2 pb-lg-3 mb-2 mb-lg-3'>
                  Контактирајте нè
                </h2>
                <p>
                  We are diligent and determined because we care about the
                  success of our clients.
                </p>
                <ContactInfo variant='column' />
              </div>
            </Col>
            <Col lg={3}>
              <div className='text-white'>
                <h2 className='h5 border-bottom border-2 pb-2 pb-lg-3 mb-2 mb-lg-3'>
                  Арнаудовски
                </h2>
                <Navigation />
              </div>
            </Col>
          </Row>
        </Container>
      </ContentSpacing>
      <Copyright />
    </footer>
  );
}
