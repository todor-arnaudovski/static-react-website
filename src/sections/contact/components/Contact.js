import React, { forwardRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ContentSpacing, Supertitle } from 'components';
import { ContactForm } from './ContactForm';

export const Contact = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} />
      <ContentSpacing>
        <Container>
          <div className='text-center'>
            <Supertitle>Faucibus scelerisque?</Supertitle>
            <h2 className='hero-title mb-4 mb-lg-5'>Pretium vulputate</h2>
          </div>
          <Row className='justify-content-center'>
            <Col lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </ContentSpacing>
    </>
  );
});
