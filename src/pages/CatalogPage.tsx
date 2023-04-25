import React from 'react';
import { useSearchParams } from 'react-router-dom';

import ProductsGrid from '../components/ProductsGrid';
import Pagination from '../components/Pagination';

import { IBrand, IProduct } from '../@types/custom';
import axios from 'axios';

interface ISort {
  sortBy: keyof IProduct;
  order: 'asc' | 'desc';
}

interface ISortA extends ISort {
  title: string;
}

const availableSort: ISortA[] = [
  {
    title: 'new',
    sortBy: 'createdAt',
    order: 'desc',
  },
  {
    title: 'rating',
    sortBy: 'rating',
    order: 'desc',
  },
  {
    title: 'price (to low)',
    sortBy: 'price',
    order: 'desc',
  },
  {
    title: 'price (to high)',
    sortBy: 'price',
    order: 'asc',
  },
];

const CatalogPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [sort, setSort] = React.useState<ISort>({
    sortBy: 'createdAt',
    order: 'desc',
  });
  const [page, setPage] = React.useState<number>(1);
  const [brand, setBrand] = React.useState<IBrand | null>(null);

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSort(availableSort[Number(e.target.value)]);

  const brandId = searchParams.get('brandId');

  const fetchBrand = async (id: number) => {
    try {
      const { data } = await axios.get<IBrand>(
        `https://643e569dc72fda4a0bf388cf.mockapi.io/brands/${id}`
      );
      setBrand(data);
    } catch (error) {
      setBrand(null);
      console.error(error);
      alert('Fetch brand error');
    }
  };

  React.useEffect(() => {
    if (brandId) fetchBrand(Number(brandId));
  }, [brandId]);

  return (
    <div className="pt-10">
      <div className="container">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between ">
          <h3 className="font-semibold text-3xl capitalize ">
            {brand ? brand.title : 'Catalog'}
          </h3>
          <div className="inline-flex gap-1 items-center">
            <label htmlFor="sort">Sort by:</label>
            <select
              onChange={onSortChange}
              id="sort"
              className="px-2 py-1 border-zinc-900 border-b outline-none focus:border-b-2 bg-transparent"
            >
              {availableSort.map((sort, idx) => (
                <option key={idx} value={idx}>
                  {sort.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ProductsGrid
          limit={20}
          page={page}
          sortBy={sort.sortBy}
          order={sort.order}
          brandId={Number(brandId)}
        />
        <Pagination className="mt-8" pages={2} page={page} onChange={setPage} />
      </div>
    </div>
  );
};

export default CatalogPage;
