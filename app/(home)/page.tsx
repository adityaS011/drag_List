import React from 'react';
import ListController from './ListController';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <>
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar />
      <ListController />
    </>
  );
};

export default page;
