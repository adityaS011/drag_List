import React, { useState } from 'react';

interface AddListItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

const AddListItemModal: React.FC<AddListItemModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title && description) {
      onSubmit(title, description);
      setTitle('');
      setDescription('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-md w-96'>
        <h2 className='text-lg font-bold mb-4'>Add New Item</h2>
        <input
          type='text'
          className='w-full p-2 mb-2 border rounded'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='w-full p-2 mb-4 border rounded'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className='flex justify-between'>
          <button
            onClick={onClose}
            className='bg-gray-300 text-white py-1 px-4 rounded'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 text-white py-1 px-4 rounded'
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListItemModal;
