'use client';

import React, { useState, useEffect } from 'react';
import AddListItemModal from '@/components/AddListItemModal';
import { ListType, STATUS } from '../../utils/types';
import List from '@/components/List';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import 'react-toastify/dist/ReactToastify.css';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { toast } from 'react-toastify';

const COLLECTION_NAME = 'lists';

const ListController = () => {
  const [lists, setLists] = useState<Record<STATUS, ListType[]>>({
    'Not Started': [],
    'In Progress': [],
    Completed: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<STATUS | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchLists = async () => {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      const data: Record<STATUS, ListType[]> = {
        'Not Started': [],
        'In Progress': [],
        Completed: [],
      };

      querySnapshot.forEach((doc) => {
        const item = doc.data() as Omit<ListType, 'id'>;
        const status = item.status as STATUS;
        data[status].push({ ...item, id: doc.id });
      });

      setLists(data);
      setIsLoading(false);
    };

    fetchLists().catch(console.error);
  }, []);

  const saveItemToFirestore = async (item: ListType) => {
    await setDoc(doc(db, COLLECTION_NAME, item.id.toString()), item);
  };

  const handleAddItem = async (title: string, description: string) => {
    if (selectedStatus) {
      const newItem: ListType = {
        id: `${Date.now()}`,
        title,
        description,
        status: selectedStatus,
      };

      setLists((prev) => ({
        ...prev,
        [selectedStatus]: [...prev[selectedStatus], newItem],
      }));

      await saveItemToFirestore(newItem);
    }
  };

  const openModal = (status: STATUS) => {
    setSelectedStatus(status);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceStatus = source.droppableId as STATUS;
    const destStatus = destination.droppableId as STATUS;

    if (sourceStatus === destStatus && source.index === destination.index) {
      return;
    }

    setLists((prev) => {
      const sourceItems = [...prev[sourceStatus]];
      const [movedItem] = sourceItems.splice(source.index, 1);

      const destItems = [...prev[destStatus]];
      destItems.splice(destination.index, 0, {
        ...movedItem,
        status: destStatus,
      });
      toast.success('Status updated successfully');
      return {
        ...prev,
        [sourceStatus]: sourceItems,
        [destStatus]: destItems,
      };
    });

    const movedItem = lists[sourceStatus][source.index];
    await saveItemToFirestore({ ...movedItem, status: destStatus });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex flex-col md:flex-row w-full justify-evenly gap-4 mx-2 md:mx-14 my-14'>
        {Object.entries(lists).map(([status, items]) => (
          <List
            key={status}
            isLoading={isLoading}
            status={status as STATUS}
            listItems={items}
            handleAddItem={() => openModal(status as STATUS)}
          />
        ))}
        <AddListItemModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleAddItem}
        />
      </div>
    </DragDropContext>
  );
};

export default ListController;
