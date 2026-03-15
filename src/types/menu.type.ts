import { Category } from './categories.type';

export type MenuItemType = {
  id: string;
  name: string;
  price: string;
  description: string;
  category: Category;
  image: string;
};
