import backgroundImg from 'assets/images/backgrounds/background-1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ContentSpacing } from 'components';
import { Hero, FieldsList, About } from 'features';
// import BiographySection from './Components/Sections/BiographySection/BiographySection';
// import WorkFieldSection from './Components/Sections/WorkFieldsSection/WorkFieldsSection';
// import ContactSection from './Components/Sections/ContactSection/ContactSection';

export function Home() {
  return (
    <>
      <Hero>
        <FieldsList />
      </Hero>
      <ContentSpacing as='section' variant='large' background={backgroundImg}>
        <Container>
          <div className='text-center'>
            {/* <Supertitle text='Тука сме за вас' /> */}
            <h2 className='hero-title mb-4 mb-lg-5'>Знајте ги Вашите права</h2>
          </div>
          <Row className='gx-5'>
            <Col lg={6}>
              <p>
                If you are facing criminal charges, it is crucial to have
                effective representation immediately. Not only during trial, but
                also during the pretrial phase as well. At Bernstain Attorneys,
                our London City criminal defense lawyer give your case our full
                time and attention, to ensure you are treated fairly under the
                criminal justice system, and you have all the information
                necessary.
              </p>
              <p>
                Even if you think the facts of the case aren’t in your favor,
                having the best possible criminal representation can be the
                difference between jail time and probation, or having your
                record destroyed with an avoidable felony or misdemeanor
                conviction.
              </p>
              <p>
                The implications of any type of criminal charge can affect
                multiple facets of your life. You likely have important concerns
                over issues ranging from how to confront the case against you to
                how to minimize the impact of a conviction.
              </p>
            </Col>
            <Col lg={6}>
              <h4 className='h4 mb-3 mb-lg-4'>Тука сме за сите Ваши грижи</h4>
              <p>
                Even if you think the facts of the case aren’t in your favor,
                having the best possible criminal representation can be.
              </p>
              {/* <AccordionEl /> */}
            </Col>
          </Row>
        </Container>
      </ContentSpacing>
      {/* <About /> */}
      <ContentSpacing as='section'>{/* <FieldsCards /> */}</ContentSpacing>
    </>
  );
}
