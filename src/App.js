import './styles/index.css';
import { useEffect } from 'react';
import { Footer, Navbar } from './components';
import {Routes, Route} from 'react-router-dom/index';
import { Homepage, Country, Contact, Services, About} from './pages'
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useEffect(()=>{
        Aos.init({
          duration: 1500
        });
        Aos.refresh();
  },[])
  return (
    <>
      <Navbar />
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/country/:countryId' element={<Country />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Services />} />
  </Routes>
      <Footer/>
      </>
  );
}

export default App;
