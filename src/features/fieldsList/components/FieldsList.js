import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../assets/styles/FieldsList.module.css';

import { GiPoliceCar } from 'react-icons/gi';
import { BsPeople, BsBriefcase } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';

const DUMMY_FIELDS = [
  {
    icon: <GiPoliceCar />,
    title: 'Казнено право',
  },
  {
    icon: <BsPeople />,
    title: 'Граѓанско право',
  },
  {
    icon: <BsBriefcase />,
    title: 'Деловно право',
  },
  {
    icon: <FaRegHandshake />,
    title: 'Трговско право',
  },
];

export function FieldsList() {
  return (
    <Row className='position-relative'>
      {DUMMY_FIELDS &&
        DUMMY_FIELDS.map((card, i) => {
          return (
            <Col sm='6' lg='3' key={i}>
              <div
                className={`${styles['list-item']} pt-4 pt-lg-5 mb-4 mb-lg-0`}
              >
                <div className='d-flex align-items-center justify-content-around'>
                  <div
                    className={`${styles['icon-wrapper']} color-primary me-2`}
                  >
                    {card.icon}
                  </div>
                  <h3 className={`h3 font-secondary text-light m-0`}>
                    {card.title}
                  </h3>
                </div>
              </div>
            </Col>
          );
        })}
    </Row>
  );
}
