import React from 'react';
import ProductsSection from '../components/ProductsSection';
import BrandsSection from '../components/BrandsSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <ProductsSection />
      <BrandsSection />
    </div>
  );
};

export default HomePage;
