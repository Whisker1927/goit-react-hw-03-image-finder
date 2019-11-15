import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';

const rootLoader = document.getElementById('loader');
const spinLoader = () =>
  createPortal(
    <Loader
      type="Plane"
      color="rgb(127, 255, 0)"
      height={80}
      width={80}
      timeout={3000}
    />,
    rootLoader,
  );
export default spinLoader;
