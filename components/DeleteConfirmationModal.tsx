import cn from '@/utils/cn';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const DeleteConfirmationModal = ({
  isDeleting,
  onConfirm,
  onCancel,
}: {
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg max-w-sm w-full'>
        <h2 className='text-xl font-bold text-gray-800'>Are you sure?</h2>
        <p className='text-gray-600 mt-2'>
          Do you really want to delete this list? This action cannot be undone.
        </p>
        <div className='flex justify-between mt-4'>
          <button
            onClick={onConfirm}
            className={cn(
              `flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 `,
              isDeleting && 'opacity-50 cursor-not-allowed'
            )}
          >
            {isDeleting ? (
              <div className='flex flex-row gap-2 items-center'>
                <p>Yes, Delete</p> <ClipLoader size={20} color='#ffffff' />
              </div>
            ) : (
              'Yes Delete'
            )}
          </button>
          <button
            onClick={onCancel}
            className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
