import { HomePage, ContactPage, Error404Page, CheckoutPage, ReviewsPage } from './components/pages'
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
          <Route path="checkout" element={<CheckoutPage />}/>
          <Route path="reviews" element={<ReviewsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
