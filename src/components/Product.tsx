import React from 'react';
import { Link } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';

import { IProduct } from '../@types/custom';

type ProductProps = Pick<IProduct, 'title' | 'images' | 'price'>;

const Product: React.FC<ProductProps> = ({ title, images, price }) => {
  const [width] = useWindowSize();
  const imagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!imagesRef.current) return;
    imagesRef.current.style.height = imagesRef.current.clientWidth + 'px';
  }, [width]);

  return (
    <Link
      to="/catalog/5"
      className="flex flex-col pt-[5px] pl-[5px] lg:p-4 text-center card-hover rounded-lg group overflow-hidden"
    >
      <div
        ref={imagesRef}
        className="relative h-[280px] rounded-lg overflow-hidden"
      >
        <img
          src={`/img/products${images[0]}`}
          alt=""
          className="object-cover absolute z-10 h-full w-full"
        />
        {images.length > 2 && (
          <img
            src={`/img/products/${images[1]}`}
            alt=""
            className="object-cover absolute z-20 h-full w-full transition-opacity opacity-0 group-hover:opacity-100"
          />
        )}
      </div>
      <h5 className="text-xl font-medium mt-4 mb-2">{title}</h5>
      <p className="text-lg text-zinc-800">
        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
    </Link>
  );
};

export default Product;
