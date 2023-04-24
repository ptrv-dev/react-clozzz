import React from 'react';

import useWindowSize from '../hooks/useWindowSize';

const ProductSkeleton: React.FC = () => {
  const [width] = useWindowSize();
  const imagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!imagesRef.current) return;
    imagesRef.current.style.height = imagesRef.current.clientWidth + 'px';
  }, [width]);

  return (
    <div className="lg:p-4 rounded-lg flex flex-col items-center">
      <div
        ref={imagesRef}
        className="bg-zinc-200 animate-pulse w-full rounded-full"
      ></div>
      <div className="w-3/5 h-[28px] mt-4 mb-1 bg-zinc-200 animate-pulse rounded"></div>
      <div className="w-4/5 h-[28px] mb-2 bg-zinc-200 animate-pulse rounded"></div>
      <div className="w-24 h-[28px] bg-zinc-200 animate-pulse rounded"></div>
    </div>
  );
};

export default ProductSkeleton;
