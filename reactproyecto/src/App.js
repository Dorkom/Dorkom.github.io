import { HomePage, ContactPage, Error404Page, CheckoutPage, ReviewsPage, LoginPage, CrearPage, RankingPage, TypeUsePage, SupportPage, AboutPage, GuidesPage, QuestionsPage, VendedoresPage, PerfilPage, TicketPage, InfluencerPage, PagoPage } from './components/pages'
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
          <Route path="login" element={<LoginPage />}/>
          <Route path="crear" element={<CrearPage />}/>
          <Route path="ranking" element={<RankingPage />}/>
          <Route path="typeuse" element={<TypeUsePage />}/>
          <Route path="support" element={<SupportPage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="guides" element={<GuidesPage />}/>
          <Route path="questions" element={<QuestionsPage />}/>
          <Route path="vendedores" element={<VendedoresPage />}/>
          <Route path="perfil" element={<PerfilPage />}/>
          <Route path="Ticket" element={<TicketPage />}/>

          <Route path="Influencer" element={<InfluencerPage />}/>

          <Route path="Pago" element={<PagoPage />}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
