'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { Button } from '@components/ui/button';
import { useRouter } from 'next/navigation';
// import { setProduct } from '@/store/action/productAction';
import { useDispatch } from 'react-redux';
import { Root } from '@/store/type/productType';
import { setSelectedProduct } from '@/store/slices/productSlice';

interface AlternatingSectionProps {
  sections: Root[];
  category: string;
}

export default function AlternatingSection({
  sections,
  category,
}: AlternatingSectionProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (product: Root) => {
    dispatch(setSelectedProduct(product));
    router.push(`/${product.category}/${product.slug}`);
  };

  const filteredSections = useMemo(
    () =>
      sections
        .filter((section) => section.category === category)
        .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1)),
    [sections, category]
  );
  return (
    <div className="space-y-12 mx-50 flex justify-center items-center flex-col my-20">
      {filteredSections.map((section, index) => (
        <div
          key={section.id}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
          }`}
        >
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={section.categoryImage.desktop}
              alt={section.name}
              width={450}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-120">
            {section.new && (
              <p className="text-primary text-xs tracking-widest">
                New Product
              </p>
            )}
            <h2 className="text-4xl font-bold">{section.name}</h2>
            <p className="mt-4 text-gray-600">{section.description}</p>
            <Button
              className="w-40 my-10 h-10"
              onClick={() => handleClick(section)}
            >
              See Product
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
