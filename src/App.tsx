import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { useAppSelector } from './store';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  const { noScroll } = useAppSelector((state) => state.bodySlice);

  React.useEffect(() => {
    document.body.classList[noScroll ? 'add' : 'remove']('overflow-hidden');
  }, [noScroll]);

  return (
    <>
      <Header />
      <main className="flex-1 mt-[84px] sm:mt-[108px]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
