'use client';
import React from 'react';
import Image from 'next/image';
import logo from '@assets/shared/desktop/logo.svg';
import { navLinks } from '@/constant/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="relative bottom-0 flex flex-col w-full h-1/3 bg-black px-50 py-15">
      <div className="flex items-center justify-between ">
        <Image
          src={logo}
          alt="audiophile logo"
          height={72}
          width={150}
          // className="left-0 absolute "
        />
        <nav className="flex items-center justify-evenly gap-16">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                className={`transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary-hover text-white'}`}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="w-150 mt-10 text-off-white text-xs">
        <h6 className="text-off-white">
          Home Headphones Speakers Earphones Audiophile is an all in one stop to
          fulfill your audio needs. We&#39;re a small team of music lovers and
          sound specialists who are devoted to helping you get the most out of
          personal audio. Come and visit our demo facility - we’re open 7 days a
          week.
        </h6>
        <h6 className="py-10">Copyright 2021. All Rights Reserved</h6>
      </div>
    </footer>
  );
};

export default Footer;
