import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';

import Header from './components/Header';
import Footer from './components/Footer';

import { useAppDispatch, useAppSelector } from './store';
import { clearCart, setCart } from './store/slices/cart.slice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { noScroll } = useAppSelector((state) => state.bodySlice);
  const cart = useAppSelector((state) => state.cartSlice);

  React.useEffect(() => {
    document.body.classList[noScroll ? 'add' : 'remove']('overflow-hidden');
  }, [noScroll]);

  React.useEffect(() => {
    const LS = JSON.parse(localStorage.getItem('cart') || '[]');
    if (LS && LS.length) {
      dispatch(setCart(LS));
    }
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 mt-[84px] sm:mt-[108px]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
