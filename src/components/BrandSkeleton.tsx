import React from 'react';

const BrandSkeleton: React.FC = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col items-center">
      <div className="bg-zinc-200 animate-pulse w-36 h-36 rounded-full"></div>
    </div>
  );
};

export default BrandSkeleton;
