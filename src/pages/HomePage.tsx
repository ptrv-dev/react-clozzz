import React from 'react';

import ProductsSection from '../components/ProductsSection';
import BrandsSection from '../components/BrandsSection';
import SubscribeSection from '../components/SubscribeSection';
import LatestNews from '../components/LatestNews';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <ProductsSection />
      <BrandsSection />
      <SubscribeSection />
      <LatestNews />
    </div>
  );
};

export default HomePage;
