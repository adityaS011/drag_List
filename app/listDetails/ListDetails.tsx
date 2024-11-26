'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal';
import { ClipLoader } from 'react-spinners';
import cn from '@/utils/cn';

const COLLECTION_NAME = 'lists';

const ListDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams?.get('id');
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [listItem, setListItem] = useState({
    title: '',
    description: '',
    status: 'Not Started' as 'Not Started' | 'In Progress' | 'Completed',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // For Delete Confirmation Modal

  useEffect(() => {
    if (!id) return;

    const fetchList = async () => {
      try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setListItem(docSnap.data() as typeof listItem);
        } else {
          toast.error('List not found!');
          router.replace('/');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        toast.error('Failed to fetch the list.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchList();
  }, [id, router]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const docRef = doc(db, COLLECTION_NAME, id as string);
      await updateDoc(docRef, listItem);
      toast.success('List updated successfully!');
      router.push('/');
    } catch (error) {
      console.error('Error updating document:', error);
      toast.error('Failed to update the list.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    setShowModal(true); // Show modal for delete confirmation
  };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      const docRef = doc(db, COLLECTION_NAME, id as string);
      await deleteDoc(docRef);
      toast.success('List deleted successfully!');
      router.push('/');
    } catch (error) {
      console.error('Error deleting document:', error);
      toast.error('Failed to delete the list.');
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className='flex items-center w-screen justify-center min-h-screen bg-gray-100'>
        <p className='text-gray-600'>Loading...</p>
      </div>
    );
  }

  if (!id) {
    return (
      <div className='flex items-center w-screen justify-center min-h-screen bg-gray-100'>
        <p className='text-red-600'>Invalid ID. Please check the URL.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center w-full justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md'>
        <button
          onClick={() => router.push('/')}
          className='text-blue-600 hover:underline text-sm mb-4'
        >
          ← Go Home
        </button>
        <div className='bg-white shadow-md rounded-md p-6'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>
            List Details
          </h1>
          <div className='space-y-4'>
            <label className='block text-gray-700 font-medium'>
              Title:
              <input
                type='text'
                value={listItem.title}
                onChange={(e) =>
                  setListItem((prev) => ({ ...prev, title: e.target.value }))
                }
                className='w-full border-gray-300 border-b focus:outline-none p-2 mt-1'
              />
            </label>
            <label className='block text-gray-700 font-medium'>
              Description:
              <textarea
                value={listItem.description}
                onChange={(e) =>
                  setListItem((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className='w-full border-gray-300 border-b focus:outline-none p-2 h-fit mt-1'
              />
            </label>
            <label className='block text-gray-700 font-medium'>
              Status:
              <select
                value={listItem.status}
                onChange={(e) =>
                  setListItem((prev) => ({
                    ...prev,
                    status: e.target.value as typeof listItem.status,
                  }))
                }
                className='w-full border-gray-300 rounded-md p-2 mt-1'
              >
                <option value='Not Started'>Not Started</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
              </select>
            </label>
          </div>
          <div className='flex justify-between mt-6'>
            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={cn(
                `flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700`,
                isSaving && 'opacity-50 cursor-not-allowed'
              )}
            >
              {isSaving ? (
                <div className='flex flex-row gap-2 items-center'>
                  <p>Save Changes</p> <ClipLoader size={20} color='#ffffff' />
                </div>
              ) : (
                'Save Changes'
              )}
            </button>

            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className={cn(
                `flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 `,
                isDeleting && 'opacity-50 cursor-not-allowed'
              )}
            >
              Delete List
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <DeleteConfirmationModal
          isDeleting={isDeleting}
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ListDetails;
