import React from 'react';

interface PaginationProps {
  pages: number;
  page: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  className,
  pages,
  page,
  onChange,
}) => {
  return (
    <div className={`flex justify-center gap-2 ${className ? className : ''}`}>
      <button
        disabled={page < 2}
        className={`inline-flex w-6 h-8 items-center justify-center border-zinc-900 ${
          page < 2 ? 'opacity-20' : 'cursor-pointer hover:border-b'
        }`}
        onClick={() => onChange((prev) => prev - 1)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8536 2.64645C11.0488 2.84171 11.0488 3.15829 10.8536 3.35355L6.20711 8L10.8536 12.6464C11.0488 12.8417 11.0488 13.1583 10.8536 13.3536C10.6583 13.5488 10.3417 13.5488 10.1464 13.3536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L10.1464 2.64645C10.3417 2.45118 10.6583 2.45118 10.8536 2.64645Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {[...Array(pages)].map((_, idx) => (
        <button
          key={idx}
          className={`inline-flex w-6 h-8 items-center justify-center ${
            idx + 1 === page ? 'border-b' : 'hover:border-b'
          } border-zinc-900 cursor-pointer`}
          onClick={() => onChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        disabled={page >= pages}
        className={`inline-flex w-6 h-8 items-center justify-center border-zinc-900 ${
          page >= pages ? 'opacity-20' : 'cursor-pointer hover:border-b'
        }`}
        onClick={() => onChange((prev) => prev + 1)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.14645 13.3536C4.95118 13.1583 4.95118 12.8417 5.14645 12.6464L9.79289 8L5.14645 3.35355C4.95118 3.15829 4.95118 2.84171 5.14645 2.64645C5.34171 2.45119 5.65829 2.45119 5.85355 2.64645L10.8536 7.64645C11.0488 7.84171 11.0488 8.15829 10.8536 8.35355L5.85355 13.3536C5.65829 13.5488 5.34171 13.5488 5.14645 13.3536Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
