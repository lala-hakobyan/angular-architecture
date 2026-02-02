import { Color } from "../data/cart-model";
import { Size } from "../data/cart-model";
import { CartItemData } from "../data/cart-model";

export const MockCartItem: CartItemData = {
    id: 'a997910b-3667-4408-9d3f-dd15cda9ae24',
    product: {
      id: '760de0c1-0088-4de5-9ef9-9d6fa6921338',
      name: 'Smartwatch Pro',
      description: 'Water-resistant smartwatch with heart-rate monitor and GPS',
      details: 'Stay on top of your fitness goals with the Smartwatch Pro, designed for both daily wear and intense workouts. This advanced wearable features precise GPS tracking and a continuous heart-rate monitor to help you optimize your fitness routine. With its durable, water-resistant build, you can confidently wear it while swimming or running in any weather.',
      inStock: true,
      price: 200
    },
    quantity: 1,
    color: Color.blue,
    size: Size.sm,   
  } 