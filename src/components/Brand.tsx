import React from 'react';
import { Link } from 'react-router-dom';

import { IBrand } from '../@types/custom';

const Brand: React.FC<IBrand> = ({ _id, image, title, url }) => {
  return (
    <Link
      to={`/catalog?brandId=${_id}`}
      className="p-4 rounded-lg card-hover flex flex-col items-center"
    >
      <img src={`/img/brands/${image}`} alt={title} />
    </Link>
  );
};

export default Brand;
