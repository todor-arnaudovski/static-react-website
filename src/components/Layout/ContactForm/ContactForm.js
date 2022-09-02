import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Row>
        <Col lg={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Име</Form.Label>
            <Form.Control
              type='text'
              placeholder='Внесете го Вашето име'
              onChange={handleInputChange}
              name='name'
              value={inputValues.name || ''}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Презиме</Form.Label>
            <Form.Control
              type='text'
              placeholder='Внесете го Вашето презиме'
              onChange={handleInputChange}
              name='lastName'
              value={inputValues.lastName || ''}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Label>Е-mail адреса *</Form.Label>
        <Form.Control
          type='email'
          placeholder='Вашата ја Вашата Е-mail адреса'
          required
          onChange={handleInputChange}
          name='email'
          value={inputValues.email || ''}
        />
        <Form.Text className='text-muted'>
          Вашите податоци нема никогаш да бидат споделени.
        </Form.Text>
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Порака *</Form.Label>
        <Form.Control
          as='textarea'
          placeholder='Напишете ја Вашата порака тука'
          style={{ height: '100px' }}
          required
          onChange={handleInputChange}
          name='message'
          value={inputValues.message || ''}
        />
      </Form.Group>
      <Button variant='primary' type='submit' className='btn-style-1'>
        Испрати
      </Button>
    </Form>
  );
};

export default ContactForm;
