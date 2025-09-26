'use client';
import React, { useState } from 'react';
import { navLinks } from '@/constant/data';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@assets/shared/desktop/logo.svg';
import { ShoppingCart } from 'lucide-react';
import { useParams } from 'next/navigation';
import { CartPopover } from '@components/CartPopover';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { clearCart } from '@/store/slices/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);
  const { category } = useParams<{ category: string }>();
  const [openPop, setOpenPop] = useState(false);

  return (
    <header className="flex items-center justify-between px-50 py-10 bg-black ">
      <Image src={logo} alt="audiophile logo" height={72} width={150} />
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
      </div>
      <CartPopover
        open={openPop}
        onClose={() => setOpenPop(false)}
        cart={cart}
        cartTotal={cartTotal}
        onRemove={() => dispatch(clearCart())}
      />
    </header>
  );
};

export default Navbar;
