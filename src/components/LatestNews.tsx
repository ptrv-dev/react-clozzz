import React from 'react';
import { Link } from 'react-router-dom';

import { INews } from '../@types/custom';
import News from './News';

const LatestNews: React.FC = () => {
  const [news, setNews] = React.useState<INews[]>([
    {
      _id: 1,
      title:
        'From Heel to Toe, the Air Max 270 Go is Designed for Kids at Every Stage and Age',
      image: '01.png',
      createdAt: new Date(2023, 2, 17, 17, 30, 39),
    },
    {
      _id: 2,
      title:
        'Michael Jordan and Jordan Brand Award $2.3M in New Black Community Commitment Grants',
      image: '02.png',
      createdAt: new Date(2023, 2, 14, 18, 22, 5),
    },
    {
      _id: 3,
      title: 'Guram Gvasalia Gets a New Job at Vetements',
      image: '03.png',
      createdAt: new Date(2023, 2, 29, 9, 45, 37),
    },
  ]);
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-3xl capitalize">Latest news</h3>
          <Link
            to="/news"
            className="inline-flex gap-2 items-center text-lg text-zinc-800"
          >
            View All{' '}
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
          {news.map(({ _id, createdAt, image, title }) => (
            <News key={_id} title={title} image={image} createdAt={createdAt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
