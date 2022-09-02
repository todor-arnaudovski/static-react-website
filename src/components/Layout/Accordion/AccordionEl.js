import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AccordionEl = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Кои се моите права?</Accordion.Header>
        <Accordion.Body>
          We are successful because we are not like other law firms. Our
          attorneys are innovators in the area of family law who understand the
          growing demand for a customized, progressive approach for our clients.
          We do not waste your time or money. As skilled negotiators inside and
          outside the courtroom, we work hard to resolve disputes early and
          amicably when possible. However our top notch trial attorneys are
          always well prepared to litigate when necessary.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Зошто би ми требало адвокат?</Accordion.Header>
        <Accordion.Body>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Зошто ние?</Accordion.Header>
        <Accordion.Body>
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximise the long tail. Keeping your eye on the ball while
          performing a deep dive on the start-up mentality to derive convergence
          on cross-platform integration.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionEl;
