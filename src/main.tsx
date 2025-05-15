import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'

import { BrowserRouter, Route, Routes } from "react-router";

import OrderDetails from './pages/OrderDetails.tsx';
import Header from './components/Header.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<App />} />
        <Route path=":orderID" element={<OrderDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
