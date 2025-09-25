import React from 'react';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { Root } from '@/store/type/productType';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { CartButton } from '@components/CartButton';

interface ProductDetailProps {
  selectedProduct: Root | null;
}

const ProductDetailComponent: React.FC<ProductDetailProps> = ({
  selectedProduct,
}) => {
  const cart = useSelector((state: RootState) => state.cart.items);

  const cartQuantity = cart.find((item) => item.id === selectedProduct?.id);

  if (!selectedProduct) return <p>No Data Available</p>;
  if (!cart) return <p>No Data Available</p>;
  return (
    <div className="flex flex-col my-10">
      <div className="flex items-center justify-center mb-20">
        <div className="flex justify-center mr-30">
          <Image
            src={selectedProduct.categoryImage.desktop}
            alt={selectedProduct.name}
            width={300}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="w-1/3">
          {selectedProduct.new && (
            <p className="text-primary text-xs tracking-widest">New Product</p>
          )}
          <h2 className="text-4xl font-bold">{selectedProduct.name}</h2>
          <p className="mt-4 text-gray-600">{selectedProduct.description}</p>
          <h5 className="my-8 font-manrope font-bold">
            $ {selectedProduct.price.toLocaleString()}
          </h5>
          <CartButton
            selectedProduct={selectedProduct}
            // cart={cart}
            quantity={cartQuantity?.quantity}
          />
          {/*<div className="flex gap-5">*/}
          {/*  <Button onClick={() => dispatch(addToCart(selectedProduct))}>*/}
          {/*    ADD TO CART*/}
          {/*  </Button>*/}
          {/*  {cartQuantity?.quantity && (*/}
          {/*    <div className="flex items-center justify-center gap-4 bg-primary-hover w-25 h-9 rounded-sm">*/}
          {/*      <Minus*/}
          {/*        height={8}*/}
          {/*        onClick={() => dispatch(decreaseQuantity(selectedProduct.id))}*/}
          {/*      />*/}
          {/*      <p className="text-sm font-bold">{cartQuantity?.quantity}</p>*/}
          {/*      <Plus*/}
          {/*        height={8}*/}
          {/*        onClick={() => dispatch(addToCart(selectedProduct))}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 mr-20">
          <h4 className="mb-6 text-2xl font-bold">
            {`Features`.toUpperCase()}
          </h4>
          <p>{selectedProduct.features}</p>
        </div>

        <div>
          <h4 className="mb-6 text-2xl font-bold">
            {`in the box`.toUpperCase()}
          </h4>
          {selectedProduct.includes.map((item, index) => {
            return (
              <div key={index} className="flex items-center mb-2">
                <span className="mr-5 text-primary font-bold text-sm">
                  {item.quantity}x
                </span>
                <h4>{item.item}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="mr-8">
          <Image
            src={selectedProduct.gallery.first.desktop}
            alt={selectedProduct.name}
            width={450}
            height={300}
            className="rounded-xl object-cover mb-4 transition-transform  ease-in-out duration-300 hover:scale-125 hover:shadow-xl"
          />
          <Image
            src={selectedProduct.gallery.second.desktop}
            alt={selectedProduct.name}
            width={450}
            height={300}
            className="rounded-xl object-cover"
          />
        </div>

        <Image
          src={selectedProduct.gallery.third.desktop}
          alt={selectedProduct.name}
          width={450}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        {selectedProduct.others.map((item, index) => {
          return (
            <div key={index} className="flex items-center mb-2 flex-col mx-3">
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
              <span className="font-bold text-sm my-5">{item.name}</span>
              {/*<p>Qty: {item.quantity}</p>*/}
              <Button>SEE PRODUCT</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetailComponent;
