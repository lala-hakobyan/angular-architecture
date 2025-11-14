export interface CartItem {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
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

export interface SavedCartItem {
  cart: CartItem;
  quantity: number;
  color: Color;
  size: Size;
}
