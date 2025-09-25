'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store/reducer';
import { Root } from '@/store/type/productType';
import { useParams } from 'next/navigation';
import { setSelectedProduct } from '@/store/slices/productSlice';
import ProductDetailComponent from '@components/ProductDetailComponent';
import ProductDisplayHome from '@components/ProductDisplayHome';
import BestAudioGear from '@components/BestAudioGear';

const Page = () => {
  const { product } = useParams<{ product: string }>();
  const dispatch = useDispatch();
  const { products, selectedProduct } = useSelector(
    (state: AppState) => state.product
  );

  console.log(product, selectedProduct, products, 'product page');

  // Ensure product is selected when page is refreshed
  useEffect(() => {
    if (!selectedProduct && products.length > 0 && product) {
      const found = products.find((p: Root) => p.slug === product);
      if (found) {
        dispatch(setSelectedProduct(found));
      }
    }
  }, [products, selectedProduct, product, dispatch]);

  if (!selectedProduct) return <p>No Data Available</p>;

  return (
    <>
      <ProductDetailComponent selectedProduct={selectedProduct} />
      <ProductDisplayHome />
      <BestAudioGear />
    </>
  );
};

export default Page;
