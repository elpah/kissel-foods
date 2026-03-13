export type MenuItemType = {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Specials';
  image: string;
};
