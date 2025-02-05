import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Man = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      {/* Title */}
      <h2 className="w-full max-w-4xl text-left text-xl font-bold text-gray-800 mb-4 sm:text-2xl md:text-3xl lg:mb-6">
        Featured Collection
      </h2>

      {/* Image Section */}
      <div className="w-full max-w-4xl h-64 sm:h-80 lg:h-96 relative mb-6 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/Featured.png" 
          alt="Running Man"
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text and Button Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 sm:text-4xl lg:text-5xl">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-gray-600 mb-6 text-base sm:text-lg lg:text-xl">
          Everyone deserves the feeling of running in the perfect pair.
        </p>

        <Link href="/products">
          <span className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 text-base sm:text-lg">
            Find Your Shoe
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Man;
