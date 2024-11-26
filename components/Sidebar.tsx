'use client';
import cn from '@/utils/cn';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GoTasklist } from 'react-icons/go';
import { RiTeamFill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState<'tasks' | 'team' | '/'>('/');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.includes('/team')) {
      setCurrentTab('team');
    } else if (pathname.includes('/tasks')) {
      setCurrentTab('tasks');
    } else {
      setCurrentTab('/');
    }
  }, [pathname]);
  const handleClick = (route: string) => {
    router.push(route);
  };
  return (
    <div className='bg-[#ffffff] border-e w-52 h-full '>
      <div className='  text-xl h-10 mx-4 my-2 flex items-center justify-center'>
        Task Manager
      </div>
      <div className='h-[1px] bg-slate-300 w-full'></div>
      <div className='px-4 pt-6 flex flex-col gap-2 '>
        <p
          className={cn(
            'flex flex-row gap-2 p-2 items-center tracking-wide rounded-md hover:bg-blue-200 cursor-pointer',
            currentTab === '/' && 'bg-blue-200'
          )}
          onClick={() => {
            handleClick('/');
          }}
        >
          <RxDashboard /> Home
        </p>
        <p
          className={cn(
            'flex flex-row gap-2 p-2 items-center tracking-wide rounded-md hover:bg-blue-200 cursor-pointer',
            currentTab === 'tasks' && 'bg-blue-200'
          )}
          onClick={() => {
            handleClick('/tasks');
          }}
        >
          <GoTasklist /> Tasks
        </p>
        <p
          className={cn(
            'flex flex-row gap-2 p-2 items-center tracking-wide rounded-md hover:bg-blue-200 cursor-pointer',
            currentTab === 'team' && 'bg-blue-200'
          )}
          onClick={() => {
            handleClick('/team');
          }}
        >
          <RiTeamFill /> Team
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
