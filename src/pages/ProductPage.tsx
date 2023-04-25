import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { setScroll } from '../store/slices/body.slice';
import { increase } from '../store/slices/cart.slice';
import { useAppDispatch } from '../store';

import { IBrand, IProduct } from '../@types/custom';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [data, setData] = React.useState<IProduct | null>(null);
  const [brand, setBrand] = React.useState<IBrand | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

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

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get<IProduct>(
        `https://643e569dc72fda4a0bf388cf.mockapi.io/products/${id}`
      );
      setData(data);
      setLoading(false);
      fetchBrand(data.brandId);
    } catch (error) {
      setData(null);
      setLoading(true);
      console.error(error);
      alert('Fetch product error');
    }
  };

  React.useEffect(() => {
    fetchProduct();
  }, [id]);

  const [image, setImage] = React.useState<number | null>(null);
  const [size, setSize] = React.useState<string>('default');

  const handleBuy = () => {};

  const handleAddToCart = () => {
    if (!id) return;
    if (data?.sizes?.length && size === 'default')
      return alert('Please select the size!');

    if (!data?.sizes?.length) {
      dispatch(increase({ _id: id }));
    } else {
      dispatch(increase({ _id: id, size }));
    }
  };

  const hugeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (image === null) {
      dispatch(setScroll(false));
      return;
    }
    const node = hugeRef.current?.childNodes[image + 1] as HTMLElement;
    hugeRef.current?.scrollTo(0, node.offsetTop);
    dispatch(setScroll(true));
  }, [image]);

  return (
    <div className="pt-10">
      {image !== null && (
        <div
          className="fixed top-0 left-0 w-full h-full z-50 overflow-scroll flex flex-col items-center gap-4 xl:gap-8 bg-white"
          ref={hugeRef}
        >
          <button
            className="fixed top-4 right-4 rounded-full bg-white p-2"
            onClick={() => setImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {data?.images.map((image, idx) => (
            <img
              key={idx}
              src={`/img/products${image}`}
              onClick={() => setImage(null)}
              className="cursor-zoom-out"
            />
          ))}
        </div>
      )}
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex flex-col flex-1 gap-5">
          <div
            className="w-full h-[calc(100vw-2rem)] md:h-[calc(50vw-1.5rem)] lg:h-[486px] xl:h-[624px] cursor-zoom-in"
            onClick={() => setImage(0)}
          >
            <img
              src={`/img/products/${data?.images[0]}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            {data?.images.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="cursor-zoom-in h-[calc(50vw-1.5rem)] md:h-[calc(25vw-1.5rem)] lg:h-[233px] xl:h-[297px]"
                onClick={() => setImage(idx + 1)}
              >
                <img
                  src={`/img/products/${img}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-800 flex-wrap">
            <Link to="/">Home</Link>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.14645 2.64645C5.34171 2.45118 5.65829 2.45118 5.85355 2.64645L10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L5.85355 13.3536C5.65829 13.5488 5.34171 13.5488 5.14645 13.3536C4.95118 13.1583 4.95118 12.8417 5.14645 12.6464L9.79289 8L5.14645 3.35355C4.95118 3.15829 4.95118 2.84171 5.14645 2.64645Z"
                fill="currentColor"
              />
            </svg>
            <Link to={`/catalog?brandId=${data?.brandId}`}>{brand?.title}</Link>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.14645 2.64645C5.34171 2.45118 5.65829 2.45118 5.85355 2.64645L10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L5.85355 13.3536C5.65829 13.5488 5.34171 13.5488 5.14645 13.3536C4.95118 13.1583 4.95118 12.8417 5.14645 12.6464L9.79289 8L5.14645 3.35355C4.95118 3.15829 4.95118 2.84171 5.14645 2.64645Z"
                fill="currentColor"
              />
            </svg>
            <span>{data?.title}</span>
          </div>
          <h1 className="text-3xl font-medium">{data?.title}</h1>
          <p className="text-2xl font-medium">
            {data?.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
          {data?.sizes?.length && (
            <div className="inline-flex flex-col gap-1 max-w-xs">
              <label htmlFor="size" className="text-sm text-zinc-800">
                Size
              </label>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="border-b border-zinc-900 px-4 py-2 bg-transparent"
              >
                <option value={'default'} disabled>
                  CHOOSE
                </option>
                {data.sizes.map((size, idx) => (
                  <option key={idx}>{size}</option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-center gap-4">
            <button
              className="bg-zinc-800 text-white text-center w-40 h-[44px] text-lg font-medium"
              onClick={handleBuy}
            >
              Buy it now
            </button>
            <button
              className="border border-zinc-800 text-zinc-800 text-center w-40 h-[44px] text-lg font-medium"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
          {data?.description && (
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="text-lg">Description</h5>
              <p className="whitespace-pre-wrap">{data?.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
