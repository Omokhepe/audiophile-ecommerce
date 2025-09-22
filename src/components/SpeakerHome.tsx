import React from 'react';
import Image from 'next/image';
import SpeakerImg from '@assets/home/desktop/image-speaker-zx9.png';
import { Button } from '@components/ui/button';
import SpeakerZX7 from '@assets/home/desktop/image-speaker-zx7.jpg';
import EarphoneYX1 from '@assets/home/desktop/image-earphones-yx1.jpg';
import BestAudioGear from '@components/BestAudioGear';

const SpeakerHome = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-10 h-1/2 mx-auto w-2/3 pt-12  bg-primary rounded-sm ">
        <div className="w-72 mr-10  overflow-hidden flex items-center justify-center">
          <Image
            src={SpeakerImg}
            alt="Speaker Image"
            width={300}
            height={300}
            className="object-cover object-top"
          />
        </div>
        <div className="text-white w-70 ">
          <h2 className="font-bold text-4xl mb-7">
            {'ZX9 Speaker'.toUpperCase()}
          </h2>
          <h6 className="text-xs">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </h6>
          <Button className="bg-black w-40 my-10 h-10">See product</Button>
        </div>
      </div>
      <div className="relative w-2/3 mx-auto my-10 h-100">
        <Image
          src={SpeakerZX7}
          alt="bg image"
          fill
          // objectFit="cover"
          className="-z-1 bg-no-repeat object-cover rounded-sm"
        />
        <div className="flex flex-col pt-40 pl-30">
          <h2 className="font-bold text-4xl mb-7">
            {'ZX7 Speaker'.toUpperCase()}
          </h2>
          <Button
            variant="outline"
            className="bg-off-white border-1 border-black w-40  h-10"
          >
            See product
          </Button>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <Image src={EarphoneYX1} alt="Earphone YX1" className="rounded-sm" />
        <div className="bg-off-white flex flex-col ml-10 w-1/3 pl-30 justify-center rounded-sm shadow-sm hover:shadow-md transition">
          <h2 className="font-bold text-4xl mb-7">
            {'YX1 earphones'.toUpperCase()}
          </h2>
          <Button
            variant="outline"
            className="bg-off-white border-1 border-black w-40  h-10"
          >
            See product
          </Button>
        </div>
      </div>
      <BestAudioGear />
    </>
  );
};

export default SpeakerHome;
