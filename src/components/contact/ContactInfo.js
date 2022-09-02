import { AiFillPhone, AiFillMail } from 'react-icons/ai';

const DUMMY_CONTACT = [
  {
    type: 'tel:',
    contact: '+389 70 123 456',
    icon: <AiFillPhone />,
  },
  {
    type: 'mailto:',
    contact: 'dushko@arnaudovski.com',
    icon: <AiFillMail />,
  },
];

export function ContactInfo({ variant }) {
  let isInline, isColumn;

  switch (variant) {
    case 'inline':
      isInline = true;
      break;
    case 'column':
      isColumn = true;
      break;
    default:
      isInline = false;
      isColumn = true;
  }

  return (
    <ul className={`list-unstyled mb-0 ${isInline ? 'ms-auto d-lg-flex' : ''}`}>
      {DUMMY_CONTACT.map((contact, i) => {
        return (
          <li
            className={`${isInline ? 'me-3' : ''} ${isColumn ? 'mb-2' : ''}`}
            key={i}
          >
            <a
              href={`${contact.type}${contact.contact}`}
              className={`link ${
                isInline ? 'link-hover-primary' : ''
              } ${isColumn ? 'link-white link-hover-dark' : ''}`}
            >
              {contact.icon}
              <span className='ms-2'>{contact.contact}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
