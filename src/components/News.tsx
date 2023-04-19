import React from 'react';

interface NewsProps {
  title: string;
  image: string;
  createdAt: Date;
}

const News: React.FC<NewsProps> = ({ createdAt, image, title }) => {
  return (
    <div className="card-hover rounded-lg lg:p-4 flex flex-col">
      <img
        src={`/img/news/${image}`}
        alt={title}
        className="w-full h-[220px] md:h-[180px] xl:h-[220px] object-cover rounded-lg mb-4"
      />
      <p className="text-zinc-500">
        {createdAt.toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric',
        })}
      </p>
      <h4 className="text-lg font-medium">{title}</h4>
    </div>
  );
};

export default News;
