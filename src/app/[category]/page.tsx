'use client';
import React, { use } from 'react';
import { useFetchData } from '@hooks/useFetchData';
import AlternatingSection from '@components/AlternatingSection';
import ProductDisplayHome from '@components/ProductDisplayHome';
import BestAudioGear from '@components/BestAudioGear';

interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Item {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: [];
  gallery: [];
  others: [];
}

interface PageProps {
  params: Promise<{ category: string }>;
}

const Page = ({ params }: PageProps) => {
  const { data, loading, error } = useFetchData<Item[]>('/data.json');
  const { category } = use(params);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>No Data Available</p>;
  console.log(data, params, category);

  const pageCategory = category;

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center text-white font-manrope text-2xl font-bold bg-black py-10">
        {pageCategory.toUpperCase()}
      </div>
      <AlternatingSection sections={data} category={pageCategory} />
      <ProductDisplayHome />
      <BestAudioGear />
    </div>
  );
};

export default Page;
