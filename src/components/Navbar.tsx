'use client';
import React from 'react';
import { navLinks } from '@/constant/data';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@assets/shared/desktop/logo.svg';
import { ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
// import CartIcon from '@assets/shared/desktop/icon-cart.svg';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header
      className="flex items-center justify-between px-50 py-10 bg-black "
      // className="fixed w-full top-0 flex items-center justify-between px-50 py-10 bg-black "
      // className="fixed top-10 flex items-center  mx-30 gap-16 w-full justify-between bg-black border-b-4 border-off-white"
    >
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
              {/*<span*/}
              {/*  className={`absolute left-0 -bottom-0.5 h-[2px] bg-orange-500 transition-all duration-300 ${*/}
              {/*    isActive ? 'w-full' : 'w-0 group-hover:w-full'*/}
              {/*  }`}*/}
              {/*/>*/}
            </Link>
          );
        })}
      </nav>
      <ShoppingCart className="text-white" />
    </header>
  );
};

export default Navbar;
