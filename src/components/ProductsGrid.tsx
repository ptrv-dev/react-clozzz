import React from 'react';
import { IProduct } from '../@types/custom';
import axios from 'axios';
import ProductSkeleton from './ProductSkeleton';
import Product from './Product';

interface ProductsGridProps {
  page?: number;
  limit?: number;
  sortBy?: keyof IProduct;
  order?: 'asc' | 'desc';
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  limit = 10,
  order = 'desc',
  page = 1,
  sortBy = 'createdAt',
}) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get<IProduct[]>(
        `https://643e569dc72fda4a0bf388cf.mockapi.io/products?page=${page}&limit=${limit}&sortBy=${sortBy}&order=${order}`
      );
      setProducts(data);
      setLoading(false);
      window.scrollTo(0, 0);
    } catch (error) {
      setProducts([]);
      setLoading(true);
      console.error(error);
      alert('Product fetch error!');
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, [page, limit, order, sortBy]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
      {loading
        ? [...Array(8)].map((_, idx) => <ProductSkeleton key={idx} />)
        : products.map((product) => <Product key={product._id} {...product} />)}
    </div>
  );
};

export default ProductsGrid;
