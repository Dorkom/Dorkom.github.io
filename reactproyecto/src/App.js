import { HomePage, ContactPage, Error404Page, Checkout, Reviews } from './components/pages'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="contact" element={<ContactPage />}/>
          <Route path="*" element={<Error404Page />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
