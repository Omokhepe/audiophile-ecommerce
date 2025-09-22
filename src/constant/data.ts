import HeadPhoneImg from '@assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerImg from '@assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneImg from '@assets/shared/desktop/image-category-thumbnail-earphones.png';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/headphones', label: 'HeadPhones' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/earphones', label: 'Earphones' },
  // { href: '/bills', label: 'Recurring Bills' },
];

export const homeProduct = [
  {
    id: 1,
    category: 'Headphones',
    imgSrc: HeadPhoneImg,
  },
  {
    id: 2,
    category: 'Speakers',
    imgSrc: SpeakerImg,
  },
  {
    id: 3,
    category: 'Earphones',
    imgSrc: EarphoneImg,
  },
];
