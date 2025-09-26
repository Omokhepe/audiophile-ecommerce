import React, { useEffect } from 'react';
import { Button } from '@components/ui/button';
import HeroImg from '@assets/home/desktop/image-hero.jpg';
import Image from 'next/image';
import { router } from 'next/client';
import { Root } from '@/store/type/productType';
import { useSelector } from 'react-redux';
import { AppState } from '@/store/reducer';
import { setSelectedProduct } from '@/store/slices/productSlice';
import { useRouter } from 'next/navigation';

type ProductListProps = {
  products: Root[];
};

const NewProduct = ({ products }: ProductListProps) => {
  const router = useRouter();
  const prodName = 'XX99 Mark II Headphones';
  const sentProd = products.find(
    (product) => product.name.toLowerCase() === prodName.toLowerCase()
  );
  // const  products  = useSelector((state: AppState) => state.product.products);
  // useEffect(() => {
  //   if (!selectedProduct && products.length > 0 && product) {
  //     const found = products.find((p: Root) => p.slug === product);
  //     if (found) {
  //       dispatch(setSelectedProduct(found));
  //     }
  //   }
  // }, [products, selectedProduct, product, dispatch]);
  // const found = products.find((p: Root) => p.slug === product);
  console.log(products, sentProd);
  return (
    <div className="w-full h-screen my-auto mx-auto">
      <Image
        src={HeroImg}
        alt="bg image"
        fill
        // objectFit="cover"
        className="-z-1 bg-no-repeat object-cover"
      />
      <div className="flex flex-col justify-center items-start left-50 absolute h-full text-white max-w-1/4">
        <h5 className="font-manrope tracking-widest opacity-50">
          New product{' '}
        </h5>
        <h2 className="font-manrope font-extrabold text-7xl my-7">
          {sentProd?.name}
        </h2>
        <h6 className="font-manrope text-xs">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h6>
        <Button
          variant="secondary"
          className="bg-primary text-grey900 hover:bg-primary-hover hover:text-off-white h-12 w-40 my-9"
          onClick={() => {
            router.push(`/${sentProd?.category}/${sentProd?.slug}`);
          }}
        >
          See product
        </Button>
      </div>
    </div>
  );
};

export default NewProduct;
