import './styles/index.css';
import { useEffect } from 'react';
import { Footer, Navbar } from './components';
import {Routes, Route} from 'react-router-dom/index';
import { Homepage, Country, Contact, Services, News, StudyPromo, Multimedia} from './pages'
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
    <Route path='/contact' element={<Contact />} />
    <Route path='/services' element={<Services />} />
   <Route path='/News' element={<News />} />
   <Route path='/StudyPromo' element={<StudyPromo />} />
   <Route path='/Multimedia' element={<Multimedia />} />
  </Routes>
      <Footer/>
      </>
  );
}

export default App;
