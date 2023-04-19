import React from 'react';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');

  return (
    <section>
      <div className="container">
        <div className="py-16 px-8 lg:p-16 lg:text-left text-center bg-gradient-to-r from-[#B53CEE] to-[#3960E9] relative text-white rounded-lg overflow-hidden">
          <h3 className="font-semibold text-3xl mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-lg mb-6">
            Be the first to know about our special offers and new arrivals
          </p>
          <form className="relative z-10 inline-flex rounded-lg max-w-[380px] w-full items-center shadow-[5px_5px_0px_rgba(255,255,255,0.2)]">
            <svg
              className="absolute left-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 12.0001C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.026 13.1935 16.5001 12 16.5001C10.8065 16.5001 9.66194 16.026 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12.0001C7.5 10.8066 7.97411 9.66199 8.81802 8.81808C9.66194 7.97416 10.8065 7.50006 12 7.50006C13.1935 7.50006 14.3381 7.97416 15.182 8.81808C16.0259 9.66199 16.5 10.8066 16.5 12.0001ZM16.5 12.0001C16.5 13.6571 17.507 15.0001 18.75 15.0001C19.993 15.0001 21 13.6571 21 12.0001C21 9.91786 20.278 7.90009 18.957 6.29054C17.6361 4.68099 15.7979 3.57925 13.7557 3.17305C11.7136 2.76685 9.5937 3.08132 7.75737 4.06288C5.92104 5.04443 4.48187 6.63234 3.68506 8.55605C2.88825 10.4798 2.78311 12.6202 3.38756 14.6128C3.992 16.6053 5.26863 18.3266 6.99992 19.4834C8.73121 20.6402 10.81 21.1609 12.8822 20.9568C14.9544 20.7527 16.8917 19.8364 18.364 18.3641M16.5 12.0001V8.25006"
                stroke="#3960E9"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="email"
              placeholder="email@example.com"
              className="text-zinc-600 py-2 px-14 min-w-0 w-full text-lg rounded-lg focus:outline-none focus:ring-2 ring-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(
              email
            ) && (
              <button type="submit" className="absolute right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-[#6C51EB]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            )}
          </form>
          <img
            src="/img/bg-curve.svg"
            alt=""
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
