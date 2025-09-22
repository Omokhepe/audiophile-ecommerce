import React from 'react';
import { homeProduct } from '@/constant/data';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const ProductDisplayHome = () => {
  return (
    <div className="flex justify-center items-center gap-10 h-1/2 py-10">
      {homeProduct.map((product) => (
        <div
          key={product.id}
          className="w-72 rounded-2xl bg-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
        >
          <div className="relative w-40 h-40">
            <Image
              src={product.imgSrc}
              alt="product image"
              fill
              className="object-cover"
            />
          </div>

          {/*<div className="text-center bg-primary-hover h-50 ">*/}
          <h4 className="mt-6 text-lg font-semibold tracking-wide text-gray-900">
            {product.category}
          </h4>
          <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-500">
            <h6>Shop</h6>
            <ChevronRight className="w-4 h-4" />
          </div>

          {/*</div>*/}
        </div>
      ))}
    </div>
  );
};

export default ProductDisplayHome;
