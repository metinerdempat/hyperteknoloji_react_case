import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import 'swiper/swiper-bundle.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage, BasketPage, NotFoundPage, ProductsPage, Version2Page } from './pages/index';
import Layout from '@/components/layout';


const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/v2' element={<Version2Page />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
