export interface Product {
  id: string;
  name: string;
  description: string;
  details?: string;
  inStock: boolean;
  price: number;
}

export enum Color {
  none = 'None',
  black ='Black',
  blue = 'Blue',
  Green = 'Green'
}

export enum Size {
  xs ='xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export interface CartItemData {
  id: string;
  product: Product;
  quantity: number;
  color: Color;
  size: Size;
}
