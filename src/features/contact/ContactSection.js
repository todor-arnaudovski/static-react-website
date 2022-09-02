import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Supertitle from '../../Layout/Supertitle/Supertitle';
import SectionPadding from '../../Layout/SectionPadding/SectionPadding';
import ContactForm from '../../Layout/ContactForm/ContactForm';

const ContactSection = () => {
  return (
    <section>
      <SectionPadding>
        <Container>
          <div className='text-center'>
            <Supertitle text='Имате прашања?' />
            <h2 className='hero-title mb-4 mb-lg-5'>Контактирајте нè</h2>
          </div>
          <Row className='gx-5 justify-content-center'>
            <Col lg={7}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </SectionPadding>
    </section>
  );
};

export default ContactSection;
