import NewProduct from '@components/NewProduct';
import ProductDisplayHome from '@components/ProductDisplayHome';
import SpeakerHome from '@components/SpeakerHome';
import Footer from '@components/Footer';
import React from 'react';

export default function Home() {
  return (
    <div
      className="w-full"
      // className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      <NewProduct />
      <ProductDisplayHome />
      <SpeakerHome />
    </div>
  );
}
