import { Product } from 'entities/basket/lib/types';

export type BasketPopupData = {
    products: Product[];
    items_price: number;
    discounted_price: number;
};
