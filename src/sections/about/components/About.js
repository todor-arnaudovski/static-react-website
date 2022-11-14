import BackgroundImg from '../assets/images/image-1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/About.module.css';

import { ContentSpacing, Supertitle } from 'components/index';

import { section_2 } from 'data/homePage';

export const About = () => {
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
              className={`${styles.blockquote} h-100 d-flex align-items-end mb-lg-0 pt-5 pt-lg-0`}
            >
              <figure className='ps-lg-4 text-light'>
                <blockquote className='blockquote'>
                  <p>{section_2.quote.text}</p>
                </blockquote>
                <figcaption className='blockquote-footer text-muted'>
                  {section_2.quote.author} во{' '}
                  <cite title={section_2.quote.place}>{section_2.quote.place}</cite>
                </figcaption>
              </figure>
            </div>
          </Col>
          <Col lg={6}>
            <ContentSpacing className='ms-lg-5'>
              <div className='mb-4 mb-lg-5'>
                <Supertitle align='left'>{section_2.supertitle}</Supertitle>
                <h2 className='display-5'>{section_2.title}</h2>
              </div>
              {section_2.text
                ? section_2.text.map((item, i) => {
                    const isLastElement = i === section_2.text.length - 1;

                    return (
                      <p key={i} className={isLastElement ? 'mb-0' : null}>
                        {item}
                      </p>
                    );
                  })
                : null}
            </ContentSpacing>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
