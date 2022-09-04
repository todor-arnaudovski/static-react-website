import 'bootstrap/dist/css/bootstrap.min.css';
// import 'assets/styles/custom.scss';
import 'assets/styles/global.scss';
import 'assets/styles/variables.css';
// import 'assets/styles/global.css';

import { Routes, Route } from 'react-router-dom';
import { Header } from 'layouts/header';
import { Footer } from 'layouts/footer';
import { Home, Services, About, Contact } from 'pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/uslugi' element={<Services />}></Route>
        <Route path='/za-nas' element={<About />}></Route>
        <Route path='/kontakt' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
