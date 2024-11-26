'use client';

import React from 'react';
import { ListType, STATUS } from '@/utils/types';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import cn from '@/utils/cn';
import { BsThreeDots } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const List = ({
  status,
  listItems,
  handleAddItem,
}: {
  status: STATUS;
  listItems: ListType[];
  handleAddItem: () => void;
}) => {
  const router = useRouter();

  return (
    <div className='w-1/3 rounded-md h-fit p-4 flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between px-1 h-8'>
        <div className='flex flex-row gap-2 items-center'>
          <h2
            className={cn(
              'font-semibold w-fit py-1/2 px-1 rounded text-gray-600',
              status === 'Not Started'
                ? 'bg-red-200'
                : status === 'In Progress'
                ? 'bg-orange-200'
                : 'bg-blue-200'
            )}
          >
            {status}
          </h2>
          <p className='text-gray-500'>{listItems.length}</p>
        </div>
        <div className='flex flex-row gap-2 items-center text-gray-400 hover:text-gray-700 cursor-pointer'>
          <BsThreeDots />
          <BiPlus className='w-5 h-5' />
        </div>
      </div>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='flex flex-col gap-2'
          >
            {listItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    onClick={() => router.push(`/listDetails?id=${item.id}`)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className='p-2 bg-white border hover:bg-slate-100 cursor-pointer rounded shadow flex items-center h-12'
                  >
                    <p className='font-medium'>{item.title}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className=''>
        <button
          onClick={handleAddItem}
          className='text-gray-400 opacity-90 hover:text-gray-700 flex flex-row gap-1 px-1 items-center'
        >
          <BiPlus className='w-5 h-5' /> New
        </button>
      </div>
    </div>
  );
};

export default List;
