import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

const DUMMY_LINKS = [
  {
    slug: '',
    title: 'Почетна',
  },
  {
    slug: 'uslugi',
    title: 'Услуги',
  },
  {
    slug: 'za-nas',
    title: 'За нас',
  },
  {
    slug: 'kontakt',
    title: 'Контак',
  },
];

function HeaderNav() {
  const location = useLocation(),
    currentSlug = location.pathname;

  return (
    <Nav
      defaultActiveKey={DUMMY_LINKS[0].slug}
      activeKey={currentSlug}
      className='ms-auto'
    >
      {DUMMY_LINKS &&
        DUMMY_LINKS.map((link, i) => {
          return (
            <Nav.Link
              as={Link}
              to={`/${link.slug}`}
              eventKey={`/${link.slug}`}
              key={i}
              className='mx-2'
            >
              {link.title}
            </Nav.Link>
          );
        })}
    </Nav>
  );
}

function ColumnNav() {
  return (
    <ul className='list-unstyled'>
      {DUMMY_LINKS &&
        DUMMY_LINKS.map((link, i) => {
          return (
            <li className='mb-2' key={i}>
              <Link
                to={`/${link.slug}`}
                key={i}
                className='link link-white link-hover-dark'
              >
                {link.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export function Navigation({ variant }) {
  let isHeader;

  switch (variant) {
    case 'header':
      isHeader = true;
      break;
    default:
      isHeader = false;
  }

  return isHeader ? <HeaderNav /> : <ColumnNav />;
}
