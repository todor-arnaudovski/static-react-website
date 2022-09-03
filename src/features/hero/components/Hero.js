import HeroImg from '../assets/images/hero-bg.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../assets/styles/Hero.module.css';

import { MainTitle } from 'components';

export function Hero({ children }) {
  return (
    <section className='position-relative h-100'>
      <div
        className={`${styles.background} overlay-dark border-bottom-primary`}
      >
        <img src={HeroImg} className='img-fluid' alt='Арнаудовски' />
      </div>
      <Container>
        <div
          className={`${styles['content-wrapper']} d-flex flex-column justify-content-evenly`}
        >
          <Row>
            <Col lg={10}>
              <div className={`${styles.content} text-light`}>
                <MainTitle variant='large'>
                  Една од водечките
                  <br />
                  Адвокатски канцеларии во Македонија
                </MainTitle>
                <Row className='d-flex align-items-center'>
                  <Col lg={8}>
                    <p className='mb-0'>
                      Адвокатска канцеларија Арнаудовски на своите клиенти им
                      овозможува ефективни и високо квалитетни правни и
                      консултантски услуги. Високиот степен на посветеност,
                      правната експертиза и креативното размислување секогаш ги
                      носи резултатите кои нашите клиенти ги очекуваат.
                    </p>
                  </Col>
                  <Col lg={4}>
                    <Button href='#' variant='primary' className='animate'>Побарај консултација</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {children}
        </div>
      </Container>
    </section>
  );
}
