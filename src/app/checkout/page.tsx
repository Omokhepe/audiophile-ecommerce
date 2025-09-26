'use client';
import React, { useMemo } from 'react';
import { Input } from '@components/ui/input';
import { RadioGroup, RadioGroupItem } from '@components/ui/radio-group';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Image from 'next/image';
import { getDisplayName } from '@lib/utils';
import { Button } from '@components/ui/button';

const Page = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  const calculatedTotal = useMemo(() => {
    const shipFee = Math.min(1.1 * total) / 100;
    const vatFee = Math.min(20 * total) / 100;
    const sumTotal = total + shipFee + vatFee;
    return { sumTotal, vatFee, shipFee };
  }, [total]);
  return (
    <div className="flex w-full h-screen justify-center py-10 bg-gray-200">
      <form className="w-4/7 p-9 mr-7 flex flex-col bg-off-white rounded-md overflow-y-auto shadow-lg">
        <h2 className="font-bold text-xl py-6">CHECKOUT</h2>
        <div>
          <p className="text-primary text-sm py-3">BILLING DETAILS</p>
          <div className="flex w-full flex-wrap gap-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-bold text-xs">
                Name
              </label>
              <Input
                type="text"
                id="username"
                placeholder="Enter Name"
                className="w-110"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold text-xs">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-110"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="phoneno" className="font-bold text-xs">
                Phone Number
              </label>
              <Input
                type="number"
                id="phoneno"
                placeholder="Enter Phone Number"
                className="w-110"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-primary text-sm py-3">SHIPPING INFO</p>
          <div className="flex w-full flex-wrap gap-5">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-bold text-xs">
                Address
              </label>
              <Input
                type="text"
                id="address"
                placeholder="Enter Address"
                className="w-220"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="zipcode" className="font-bold text-xs">
                ZIP Code
              </label>
              <Input
                type="number"
                id="zipcode"
                placeholder="Input Zip Code"
                className="w-110"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="font-bold text-xs">
                City
              </label>
              <Input
                type="number"
                id="city"
                placeholder="Enter City"
                className="w-110"
              />
            </div>
            <div className="flex flex-col pb-6">
              <label htmlFor="country" className="font-bold text-xs">
                Country
              </label>
              <Input
                type="text"
                id="country"
                placeholder="Enter Country"
                className="w-110"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-primary text-sm py-3">PAYMENT DETAILS</p>
          <div className="flex w-full flex-wrap gap-5 justify-between">
            <p className="font-bold text-xs">Payment Method</p>
            <RadioGroup defaultValue="paytype-money">
              <div className="flex items-center space-x-2 border-2 border-primary w-70 rounded-sm p-2">
                <RadioGroupItem value="paytype-money" id="paytype-money" />
                <label htmlFor="paytype-money">e-Money</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paytype-cash" id="paytype-cash" />
                <label htmlFor="paytype-cash">Cash on Delivery</label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </form>

      <div className="bg-off-white w-1/5 h-110 rounded-md p-9 shadow-lg">
        <p className="text-sm font-bold py-3">SUMMARY</p>
        {cart?.map((item, index) => {
          return (
            <div key={index} className="flex items-center pb-6 justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image.desktop}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-sm object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold">
                    {getDisplayName(item.name, item.category)}
                  </span>
                  <span className="text-xs">
                    $ {item.price.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="text-sm font-bold">x{item.quantity}</p>

              {/*<CartButton cart={item} />*/}
            </div>
          );
        })}
        <div className="flex justify-between gap-4">
          <span>Total: </span>
          <span className="font-bold">${total.toLocaleString()}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Shipping</span>
          <span className="font-bold">
            ${calculatedTotal.shipFee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>VAT (Included)</span>
          <span className="font-bold">
            ${calculatedTotal.vatFee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Grand Total</span>
          <span className="font-bold text-destructive">
            ${calculatedTotal.sumTotal.toFixed(2)}
          </span>
        </div>

        <Button className="w-full mt-3">Continue & Pay</Button>
      </div>
    </div>
  );
};

export default Page;
