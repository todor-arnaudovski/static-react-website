import backgroundImg from 'assets/images/backgrounds/background-1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import { ContentSpacing, Supertitle } from 'components';

import { section_1 } from 'data/homePage';

export const Intro = () => {
  return (
    <ContentSpacing as='section' variant='large' background={backgroundImg}>
      <Container>
        <div className='text-center mb-4 mb-lg-5'>
          <Supertitle align='center'>{section_1.supertitle}</Supertitle>
          <h2 className='display-5'>{section_1.title}</h2>
        </div>
        <Row className='gx-lg-5'>
          <Col lg={6}>
            {section_1.text &&
              section_1.text.map((item, i) => {
                return <p key={i}>{item.text}</p>;
              })}
          </Col>
          <Col lg={6}>
            <h3 className='h3 mb-2 mb-lg-3'>{section_1.accordion.title}</h3>
            <p>{section_1.accordion.text}</p>
            <Accordion>
              {section_1.accordion.items &&
                section_1.accordion.items.map((item, i) => {
                  return (
                    <Accordion.Item eventKey={i} key={i}>
                      <Accordion.Header className='font-secondary accordion-header-bold'>
                        {item.title}
                      </Accordion.Header>
                      <Accordion.Body>{item.text}</Accordion.Body>
                    </Accordion.Item>
                  );
                })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </ContentSpacing>
  );
};
