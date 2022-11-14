import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { ContentSpacing } from 'components';

import { Fields } from './Fields';

export const Services = (props) => {
  const { scrollToElement } = props;

  const handleScrollToSection = () => {
    scrollToElement.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ContentSpacing className='bg-light'>
      <Container>
        <Row>
          <Fields />
          <Col lg={4} xl={3} className='mb-3 mb-lg-4'>
            <Card className='text-primary text-center h-100 border-0 shadow-dark p-2 p-lg-3'>
              <Card.Body className='d-flex flex-column justify-content-center'>
                <h3 className='h3 mb-3'>Faucibus scelerisque?</h3>
                <Button variant='dark' onClick={handleScrollToSection}>
                  Pretium vulputate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </ContentSpacing>
  );
};
