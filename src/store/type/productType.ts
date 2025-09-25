// redux/types.ts

// Your Root interface
export interface Root {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: First;
  second: Second;
  third: Third;
}

export interface First {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Second {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Third {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Other {
  slug: string;
  name: string;
  image: Image2;
}

export interface Image2 {
  mobile: string;
  tablet: string;
  desktop: string;
}

// Action constants
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

// State
export interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  payload: Root[];
}

export interface SetSelectedProductAction {
  type: typeof SET_SELECTED_PRODUCT;
  payload: Root | null;
}

export type ProductActionTypes = SetProductsAction | SetSelectedProductAction;
