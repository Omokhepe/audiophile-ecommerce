'use client';
import React, { useState } from 'react';
import { navLinks } from '@/constant/data';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@assets/shared/desktop/logo.svg';
import { ShoppingCart } from 'lucide-react';
import { useParams } from 'next/navigation';
import { CartPopover } from '@components/CartPopover';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { AppState } from '@/store/reducer';

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);
  const { selectedProduct } = useSelector((state: AppState) => state.product);
  const { category } = useParams<{ category: string }>();
  const [openPop, setOpenPop] = useState(false);

  console.log(cart, 'here nav');

  return (
    <header className="flex items-center justify-between px-50 py-10 bg-black ">
      <Image
        src={logo}
        alt="audiophile logo"
        height={72}
        width={150}
        // className="left-0 absolute "
      />
      <nav className="flex items-center justify-evenly gap-16">
        {navLinks.map((link, index) => {
          const isActive = category === link.label.toLowerCase();

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
      <div className="flex">
        <ShoppingCart className="text-white" onClick={() => setOpenPop(true)} />
        {/*{cart.length > 0 && (*/}
        {/*  <span className="text-primary relative right-2 ">{cart.length}</span>*/}
        {/*)}*/}
      </div>
      <CartPopover
        open={openPop}
        onClose={() => setOpenPop(false)}
        cart={cart}
        cartTotal={cartTotal}
      />
    </header>
  );
};

export default Navbar;
