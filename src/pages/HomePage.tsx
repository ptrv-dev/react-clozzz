import React from 'react';
import ProductsSection from '../components/ProductsSection';
import BrandsSection from '../components/BrandsSection';
import SubscribeSection from '../components/SubscribeSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <ProductsSection />
      <BrandsSection />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;
