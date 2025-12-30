import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PriceList from './pages/PriceList';
import BookNow from './pages/BookNow';
import NewGel from './pages/NewGel';
import ContactUs from './pages/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-x-hidden">
      <Header />
      <div className='h-15'></div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pricelist' element={<PriceList />} />
        <Route path='/booknow' element={<BookNow />} />
        <Route path='/newgel' element={<NewGel />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
