import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/global.scss';

import { Routes, Route } from 'react-router-dom';

import { Layout } from 'layouts';
import { HomePage, ServicesPage, AboutPage, ContactPage } from 'pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
          <Route path='/about-us' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
