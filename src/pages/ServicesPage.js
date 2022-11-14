import { useRef } from 'react';

import { Services, Contact } from 'sections';
import { Banner } from 'features';

export const ServicesPage = () => {
  const contactRef = useRef(null);

  return (
    <>
      <Banner />
      <Services scrollToElement={contactRef} />
      <Contact ref={contactRef} />
    </>
  );
};
