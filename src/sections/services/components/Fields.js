import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { fields } from 'data/fields';

export const Fields = () => {
  return fields.map((field, i) => {
    return (
      <Col lg={4} xl={3} key={i} className='mb-3 mb-lg-4'>
        <Card className='bg-dark text-light text-center h-100 border-0 rounded-0 p-2 p-lg-3 mb-3 mb-lg-4'>
          <div className='icon-lg text-primary'>{field.icon}</div>
          <Card.Body>
            <Card.Title>{field.title}</Card.Title>
            <Card.Text>{field.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
};
