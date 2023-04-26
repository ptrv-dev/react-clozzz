import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { decrease, increase, remove } from '../store/slices/cart.slice';
import { useAppDispatch, useAppSelector } from '../store';

import { IProduct } from '../@types/custom';

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cartSlice);
  const [total, setTotal] = React.useState<number>(0);
  const [products, setProducts] = React.useState<IProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        'https://643e569dc72fda4a0bf388cf.mockapi.io/products'
      );
      setProducts(data);
    } catch (error) {
      setProducts([]);
      console.error(error);
      alert('Products fetch error!');
    }
  };

  const calculateTotal = () => {
    if (!cart.length || !products.length) return;
    setTotal(
      cart.reduce((acc, val, idx) => {
        const product = products.find((p) => p._id === val._id);
        return (acc += val.count * (product?.price || 0));
      }, 0)
    );
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    calculateTotal();
  }, [cart, products]);

  return (
    <div className="pt-10">
      <div className="container">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-3xl capitalize">Your cart</h3>
          {cart.length ? (
            <Link to="/catalog" className="underline text-lg">
              Continue shopping
            </Link>
          ) : (
            ''
          )}
        </div>
        {!cart.length ? (
          <div className="py-32 flex flex-col items-center">
            <h4 className="text-2xl font-semibold text-center">
              Your cart is empty right now...
            </h4>
            <Link
              to="/catalog"
              className="border border-zinc-800 text-zinc-800 text-center py-2 px-8 text-lg font-medium inline-flex mt-8"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col mt-9 overflow-auto">
              {cart.map((item) => {
                const product = products.find((p) => p._id === item._id);
                if (!product)
                  return <p key={`${item._id}${item.size}`}>Error</p>;
                return (
                  <div
                    key={`${item._id}${item.size}`}
                    className="flex items-center gap-5 py-4 border-b last-of-type:border-none border-zinc-200 w-full"
                  >
                    <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0">
                      <img
                        src={`/img/products${product.images[0]}`}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="inline-flex flex-col min-w-[180px] max-w-[480px] mr-auto">
                      <h4 className="text-2xl font-medium">
                        {product.title}
                        {item.size && (
                          <span className="text-lg font-normal">
                            {' '}
                            / {item.size}
                          </span>
                        )}
                      </h4>
                    </div>
                    <div className="inline-flex flex-col">
                      <div className="flex p-1 border-zinc-900 border-b w-32">
                        <button
                          onClick={() =>
                            dispatch(
                              decrease({ _id: item._id, size: item.size })
                            )
                          }
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.625 9H3.375"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <p className="flex-1 text-center text-lg">
                          {item.count}
                        </p>
                        <button
                          onClick={() =>
                            dispatch(
                              increase({ _id: item._id, size: item.size })
                            )
                          }
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9 2.8125C9.31066 2.8125 9.5625 3.06434 9.5625 3.375V8.4375H14.625C14.9357 8.4375 15.1875 8.68934 15.1875 9C15.1875 9.31066 14.9357 9.5625 14.625 9.5625H9.5625V14.625C9.5625 14.9357 9.31066 15.1875 9 15.1875C8.68934 15.1875 8.4375 14.9357 8.4375 14.625V9.5625H3.375C3.06434 9.5625 2.8125 9.31066 2.8125 9C2.8125 8.68934 3.06434 8.4375 3.375 8.4375H8.4375V3.375C8.4375 3.06434 8.68934 2.8125 9 2.8125Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="inline-flex flex-col">
                      <p className="text-2xl font-medium">
                        {(product.price * item.count).toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </p>
                    </div>
                    <div className="inline-flex flex-col">
                      <button
                        className="text-zinc-700"
                        onClick={() =>
                          window.confirm(
                            'Do you really want to delete a product from your cart?'
                          ) &&
                          dispatch(remove({ _id: item._id, size: item.size }))
                        }
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.33">
                            <path
                              d="M14.74 9L14.394 18M9.606 18L9.26 9M19.228 5.79C19.57 5.842 19.91 5.897 20.25 5.956M19.228 5.79L18.16 19.673C18.1164 20.2382 17.8611 20.7662 17.445 21.1512C17.029 21.5363 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5363 6.55498 21.1512C6.13894 20.7662 5.88359 20.2382 5.84 19.673L4.772 5.79M19.228 5.79C18.0739 5.61552 16.9138 5.4831 15.75 5.393M4.772 5.79C4.43 5.841 4.09 5.896 3.75 5.955M4.772 5.79C5.92613 5.61552 7.08623 5.4831 8.25 5.393M15.75 5.393V4.477C15.75 3.297 14.84 2.313 13.66 2.276C12.5536 2.24064 11.4464 2.24064 10.34 2.276C9.16 2.313 8.25 3.298 8.25 4.477V5.393M15.75 5.393C13.2537 5.20008 10.7463 5.20008 8.25 5.393"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-16 max-w-xs self-end w-full gap-4">
              <h4 className="text-3xl font-medium">
                Total:{' '}
                {total.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </h4>
              <input
                type="text"
                placeholder="Promo code"
                className="py-2 px-4 border-zinc-900 border-b rounded-none"
              />
              <button className="bg-zinc-800 text-white text-center w-full py-2 text-lg font-medium">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
