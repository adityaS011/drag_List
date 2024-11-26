import React from 'react';

const ListShimmer = () => {
  return (
    <div
      className='w-1/3 rounded-md h-fit p-4 flex flex-col gap-4  animate-pulse'
      aria-hidden='true'
    >
      <div className='flex flex-row items-center justify-between px-1 h-8'>
        <div className='flex flex-row gap-2 items-center'>
          <div className='h-5 w-20 bg-gray-300 rounded'></div>
          <div className='h-5 w-6 bg-gray-300 rounded'></div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <div className='h-6 w-6 bg-gray-300 rounded-full'></div>
          <div className='h-6 w-6 bg-gray-300 rounded-full'></div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className='h-12 bg-gray-300 rounded shadow-sm'></div>
        ))}
      </div>

      <div>
        <div className='h-6 w-24 bg-gray-300 rounded flex items-center'></div>
      </div>
    </div>
  );
};

export default ListShimmer;
