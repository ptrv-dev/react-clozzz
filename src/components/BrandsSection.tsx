import React from 'react';
import { Link } from 'react-router-dom';
import { IBrand } from '../@types/custom';
import Brand from './Brand';

const BrandsSection: React.FC = () => {
  const [brands, setBrands] = React.useState<IBrand[]>([
    {
      _id: 1,
      title: 'Louis Vuitton',
      url: 'louis-vuitton',
      image: 'louis-vuitton.svg',
    },
    {
      _id: 2,
      title: 'CELINE',
      url: 'celine',
      image: 'celine.svg',
    },
    {
      _id: 3,
      title: 'Balenciaga',
      url: 'balenciaga',
      image: 'balenciaga.svg',
    },
    {
      _id: 4,
      title: 'Moncler',
      url: 'moncler',
      image: 'moncler.svg',
    },
    {
      _id: 5,
      title: 'Nike',
      url: 'nike',
      image: 'nike.svg',
    },
    {
      _id: 6,
      title: 'Air Jordan',
      url: 'air-jordan',
      image: 'air-jordan.svg',
    },
    {
      _id: 7,
      title: 'Rick Owens',
      url: 'rick-owens',
      image: 'rick-owens.svg',
    },
    {
      _id: 8,
      title: 'VETEMENTS',
      url: 'vetements',
      image: 'vetements.svg',
    },
  ]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-3xl capitalize">Brands for sale</h3>
          <Link
            to="/brand"
            className="inline-flex gap-2 items-center text-lg text-zinc-800"
          >
            View All{' '}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
          {brands.map((brand) => (
            <Brand key={brand._id} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
