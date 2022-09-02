import BackgroundImg from '../assets/images/image-1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/About.module.css';

import { ContentSpacing } from '../../../components/index';
// import Supertitle from '../../Layout/Supertitle/Supertitle';

export function About() {
  return (
    <section>
      <Container fluid>
        <Row>
          <Col
            lg={5}
            className={`${styles.background} position-relative overlay-dark border-bottom-primary`}
            style={{ backgroundImage: `url(${BackgroundImg})` }}
          >
            <div
              className={`${styles.blockquote} h-100 d-flex align-items-end mb-lg-0`}
            >
              <figure className='ps-lg-4'>
                <blockquote className='blockquote text-white'>
                  <p>
                    Сите животни се еднакви, но некои животни се поеднакви од
                    другите.
                  </p>
                </blockquote>
                <figcaption className='blockquote-footer text-white'>
                  Џорџ Орвел во{' '}
                  <cite title='Source Title'>Животинска Фарма</cite>
                </figcaption>
              </figure>
            </div>
          </Col>
          <Col lg={6}>
            <ContentSpacing className='ms-lg-5'>
              <div>
                {/* <Supertitle text='Биографија' align='left' /> */}
                <h2 className='hero-title mb-4 mb-lg-5'>
                  За Адвокатска канцеларија Арнаудовски
                </h2>
              </div>
              <p>
                If you are facing criminal charges, it is crucial to have
                effective representation immediately. Not only during trial, but
                also during the pretrial phase as well. At Bernstein Attorneys,
                our London criminal defense lawyer give your case our full time
                and attention, to ensure you are treated fairly under the
                justice system.
              </p>
            </ContentSpacing>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
