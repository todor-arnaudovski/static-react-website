import { Link } from 'react-router-dom';

import HeroImg from 'assets/images/backgrounds/hero-bg.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../assets/styles/Hero.module.scss';

import { hero } from 'data/homePage';

export const Hero = ({ children }) => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroImg})` }}
      className={`${styles.hero} d-flex flex-column justify-content-evenly overlay-dark border-bottom-primary text-light`}
    >
      <Container className='position-relative mb-3 mb-lg-4'>
        <Row>
          <Col xl={10}>
            <h2 className='display-3 mb-3 mb-lg-4'>{hero.title}</h2>
            <Row className='align-items-center'>
              <Col lg={8} xxl={9}>
                <p className='mb-3 mb-lg-0'>{hero.text}</p>
              </Col>
              <Col lg={4} xxl={3}>
                <Button
                  as={Link}
                  to='/contact'
                  variant='primary'
                  className='animate'
                >
                  {hero.button}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className='position-relative'>{children}</Container>
    </section>
  );
}
