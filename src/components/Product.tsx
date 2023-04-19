import React from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const Product: React.FC = () => {
  const [width] = useWindowSize();
  const imagesRef = React.useRef<HTMLDivElement>(null);
  let price = 397.99;

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
          src="/img/products/1/2.webp"
          alt=""
          className="object-cover absolute z-20 group-hover:opacity-0 transition-opacity h-full w-full"
        />
        <img
          src="/img/products/1/3.webp"
          alt=""
          className="object-cover absolute z-10 h-full w-full"
        />
      </div>
      <h5 className="text-xl font-medium mt-4 mb-2">
        Celine Tracksuit (Both Top and Bottom)
      </h5>
      <p className="text-lg text-zinc-800">
        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
    </Link>
  );
};

export default Product;
