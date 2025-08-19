// components/Loader.tsx
'use client';

import Spline from '@splinetool/react-spline';
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <Spline scene="https://prod.spline.design/dFaU5JOutgAR1-Hx/scene.splinecode" />
    </div>
  );
};

export default Loader;
