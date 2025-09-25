import React, { useMemo } from 'react';
import { Button } from '@components/ui/button';
import {
  addToCart,
  CartItem,
  decreaseQuantity,
  increaseQuantity,
} from '@/store/slices/cartSlice';
import { Minus, Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Root } from '@/store/type/productType';

interface CartProps {
  selectedProduct?: Root;
  cart?: CartItem;
  quantity?: number;
}

export const CartButton = ({ selectedProduct, cart, quantity }: CartProps) => {
  const dispatch = useDispatch();
  console.log(selectedProduct, quantity, cart, 'cart button clicked');
  // ✅ always a number (fallback = 0)
  const cartID = useMemo(
    () => selectedProduct?.id ?? cart?.id ?? 0,
    [selectedProduct, cart]
  );

  return (
    <>
      {selectedProduct ? (
        <div className="flex gap-5">
          <Button onClick={() => dispatch(addToCart(selectedProduct))}>
            ADD TO CART
          </Button>

          {quantity && (
            <div className="flex items-center justify-center gap-4 bg-primary-hover w-25 h-9 rounded-sm">
              <Minus
                height={14}
                className="cursor-pointer"
                onClick={() => dispatch(decreaseQuantity(cartID))}
              />
              <p className="text-sm font-bold">{quantity}</p>
              <Plus
                height={14}
                className="cursor-pointer"
                onClick={() => dispatch(addToCart(selectedProduct))}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-5">
          <div className="flex items-center justify-center gap-4 bg-primary-hover w-25 h-9 rounded-sm">
            <Minus
              height={14}
              className="cursor-pointer"
              onClick={() => dispatch(decreaseQuantity(cartID))}
            />
            <p className="text-sm font-bold">{cart?.quantity ?? 0}</p>
            <Plus
              height={14}
              className="cursor-pointer"
              onClick={() => dispatch(increaseQuantity(cartID))}
            />
          </div>
        </div>
      )}
    </>
  );
};
