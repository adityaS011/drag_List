import React, { Suspense } from 'react';
import ListDetails from './ListDetails';
import { ToastContainer } from 'react-toastify';

const page = () => {
  return (
    <Suspense>
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar />
      <ListDetails />
    </Suspense>
  );
};

export default page;
