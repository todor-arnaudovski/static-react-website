import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionPadding from '../../Layout/SectionPadding/SectionPadding';
import CustomCard from '../../Layout/CustomCard/CustomCard';

import { GiPoliceCar } from 'react-icons/gi';
import { BsPeople } from 'react-icons/bs';
import { BsBriefcase } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';

const WorkFieldsSection = () => {
  const CARDS = [
    {
      icon: <GiPoliceCar className='me-3 color-primary' />,
      title: 'Казнено право',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      icon: <BsPeople className='me-3 color-primary' />,
      title: 'Граѓанско право',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      icon: <BsBriefcase className='me-3 color-primary' />,
      title: 'Деловно право',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      icon: <FaRegHandshake className='me-3 color-primary' />,
      title: 'Трговско право',
      text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
  ];

  return (
    <section>
      <SectionPadding className='pb-0'>
        <Container>
          <Row>
            {CARDS.map((card, i) => {
              return (
                <Col xl={3} key={i}>
                  <CustomCard
                    cardData={{
                      icon: card.icon,
                      title: card.title,
                      text: card.text,
                    }}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </SectionPadding>
    </section>
  );
};

export default WorkFieldsSection;
