import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ContactForm = () => {
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
    <Form onSubmit={handleFormSubmit} className='shadow-dark bg-white p-4 p-lg-5'>
      <Row>
        <Col lg={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              onChange={handleInputChange}
              name='name'
              value={inputValues.name || ''}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              onChange={handleInputChange}
              name='lastName'
              value={inputValues.lastName || ''}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Label>E-mail *</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter e-mail'
          required
          onChange={handleInputChange}
          name='email'
          value={inputValues.email || ''}
        />
        <Form.Text className='text-muted'>
          Your personal details are not shared with third parties.
        </Form.Text>
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Label>Message *</Form.Label>
        <Form.Control
          as='textarea'
          placeholder='Enter your message'
          style={{ height: '100px' }}
          required
          onChange={handleInputChange}
          name='message'
          value={inputValues.message || ''}
        />
      </Form.Group>
      <Button type='submit' variant='primary' className='animate'>
        Send
      </Button>
    </Form>
  );
};
