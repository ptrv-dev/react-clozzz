import React from 'react';
import { Link } from 'react-router-dom';
import { IBrand } from '../@types/custom';
import Brand from './Brand';
import axios from 'axios';
import BrandSkeleton from './BrandSkeleton';

const BrandsSection: React.FC = () => {
  const [brands, setBrands] = React.useState<IBrand[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchBrands = async () => {
    try {
      const { data } = await axios.get<IBrand[]>(
        `https://643e569dc72fda4a0bf388cf.mockapi.io/brands?page=1&limit=8`
      );
      setBrands(data);
      setLoading(false);
    } catch (error) {
      setBrands([]);
      console.error(error);
      alert('Fetch brands error!');
    }
  };

  React.useEffect(() => {
    fetchBrands();
  }, []);

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
          {loading
            ? [...Array(8)].map((_, idx) => <BrandSkeleton key={idx} />)
            : brands.map((brand) => <Brand key={brand._id} {...brand} />)}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
