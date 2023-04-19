import React from 'react';
import { Link } from 'react-router-dom';

interface BrandProps {
  title: string;
  image: string;
  url: string;
}

const Brand: React.FC<BrandProps> = ({ image, title, url }) => {
  return (
    <Link
      to={`/brand/${url}`}
      className="p-4 rounded-lg card-hover flex flex-col items-center"
    >
      <img src={`/img/brands/${image}`} alt={title} />
    </Link>
  );
};

export default Brand;
