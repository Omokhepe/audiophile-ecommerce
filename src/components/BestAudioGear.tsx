import React from 'react';
import Image from 'next/image';
import BestGear from '@assets/shared/desktop/image-best-gear.jpg';

const BestAudioGear = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className=" flex flex-col mr-10 w-1/3 px-20 justify-center ">
        <h2 className="font-bold text-3xl mb-7">
          {'Bringing you the best '.toUpperCase()}
          <span className="text-primary">{'audio'.toUpperCase()}</span>
          {' gear'.toUpperCase()}
        </h2>
        <h6 className="text-xs">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </h6>
      </div>
      <Image
        src={BestGear}
        alt="Earphone YX1"
        width={300}
        className="rounded-sm"
      />
    </div>
  );
};

export default BestAudioGear;
