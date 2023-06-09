import React from 'react';
import { Link } from 'react-router-dom';

import ProductsGrid from './ProductsGrid';

const ProductsSection: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ">
          <h3 className="font-semibold text-3xl capitalize ">People choose</h3>
          <Link
            to="/catalog"
            className="inline-flex gap-2 items-center text-lg text-zinc-800"
          >
            Go to catalog{' '}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <ProductsGrid limit={8} sortBy="rating" />
      </div>
    </section>
  );
};

export default ProductsSection;
