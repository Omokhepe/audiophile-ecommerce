'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';
import { Root } from '@/store/type/productType';
import { CartItem } from '@/store/slices/cartSlice';
import { CartButton } from '@components/CartButton';
import Image from 'next/image';

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  cart?: CartItem[];
  selectedProduct?: Root;
  cartTotal?: number;
}

export function CartPopover({ open, onClose, cart, cartTotal }: PopoverProps) {
  const getDisplayName = (name: string, category: string): string => {
    const regex = new RegExp(category, 'i'); // case-insensitive match
    return name.replace(regex, '').trim();
  };
  console.log(cart, 'cart popover render');
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cart ({cart?.length})</DialogTitle>
        </DialogHeader>

        <div>
          {cart?.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-xl object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">
                      {getDisplayName(item.name, item.category)}
                    </span>
                    <span className="text-xs">
                      $ {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <CartButton cart={item} />
              </div>
            );
          })}

          <div>
            <span>TOTAL:</span>
            <span>{cartTotal}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
