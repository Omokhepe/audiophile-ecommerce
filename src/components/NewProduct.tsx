import React from 'react';
import { Button } from '@components/ui/button';
import HeroImg from '@assets/home/desktop/image-hero.jpg';
import Image from 'next/image';
import { router } from 'next/client';

const NewProduct = () => {
  return (
    <div className="w-full h-screen my-auto mx-auto">
      <Image
        src={HeroImg}
        alt="bg image"
        fill
        // objectFit="cover"
        className="-z-1 bg-no-repeat object-cover"
      />
      <div className="flex flex-col justify-center items-start left-50 absolute h-full text-white max-w-1/4">
        <h5 className="font-manrope tracking-widest opacity-50">
          New product{' '}
        </h5>
        <h2 className="font-manrope font-extrabold text-7xl my-7">
          XX99 Mark II Headphones
        </h2>
        <h6 className="font-manrope text-xs">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h6>
        <Button
          variant="secondary"
          className="bg-primary text-grey900 hover:bg-primary-hover hover:text-off-white h-12 w-40 my-9"
          // onClick={() => {
          //   // router;
          // }}
        >
          See product
        </Button>
      </div>
    </div>
  );
};

export default NewProduct;
