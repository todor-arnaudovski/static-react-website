import { useRef } from 'react';

import { Hero, About, Services, Contact } from 'sections';
import { FieldsSlider } from 'features';

import { Intro } from 'sections/intro/components/Intro';

export const HomePage = () => {
  const contactRef = useRef(null);

  return (
    <>
      <Hero>
        <FieldsSlider />
      </Hero>
      <Intro />
      <About />
      <Services scrollToElement={contactRef} />
      <Contact ref={contactRef} />
    </>
  );
};
