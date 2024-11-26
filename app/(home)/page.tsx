import React from 'react';
import ListController from './ListController';
import { ToastContainer } from 'react-toastify';

const page = () => {
  return (
    <>
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar />
      <ListController />
    </>
  );
};

export default page;
