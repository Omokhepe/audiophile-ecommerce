'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';
import { Root } from '@/store/type/productType';
import { addToCart, CartItem, removeFromCart } from '@/store/slices/cartSlice';
import { CartButton } from '@components/CartButton';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { useRouter } from 'next/navigation';
import { getDisplayName } from '@lib/utils';

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  cart?: CartItem[];
  selectedProduct?: Root;
  cartTotal?: number;
  onRemove?: () => void;
}

export function CartPopover({
  open,
  onClose,
  cart,
  cartTotal,
  onRemove,
}: PopoverProps) {
  const router = useRouter();
  // if (cart?.length === 0) return <p>No Item Added</p>;
  console.log(cart, 'cart popover render');
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center justify-between">
              <h3>Cart ({cart?.length})</h3>
              <div
                // className="flex justify-self-end self-center"
                onClick={onRemove}
              >
                Remove all
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        {cart?.length === 0 ? (
          <span className="flex justify-center font-bold">No Item Added</span>
        ) : (
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

            <div className="flex justify-between my-7">
              <span>TOTAL:</span>
              <span className="font-bold">${cartTotal?.toLocaleString()}</span>
            </div>
            <Button
              className="w-full h-10 my-5"
              onClick={() => {
                onClose();
                router.push(`/checkout`);
              }}
            >
              CHECKOUT
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
