import React, { useMemo } from 'react';
import { useFetchData } from '@hooks/useFetchData';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Page = () => {
  const product = useSelector((state: RootState) => state.product);

  console.log(product);

  // if (!data) return <p>No Data Available</p>;

  // const filteredSections = useMemo(
  //   () =>
  //     data
  //       .filter((section) => section.category === category)
  //       .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1)),
  //   [sections, category]
  // );

  return <div>here</div>;
};

export default Page;
