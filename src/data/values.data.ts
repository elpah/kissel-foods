import { Leaf, ChefHat, Heart } from 'lucide-react';
export const VALUES = [
  {
    Icon: Leaf,
    iconClassName: 'text-green-600',
    bgClassName: 'bg-green-50',
    title: 'Farm to Table',
    desc: 'We partner with local farms and seasonal suppliers to ensure the freshest ingredients reach your plate.',
  },
  {
    Icon: ChefHat,
    iconClassName: 'text-amber-600',
    bgClassName: 'bg-amber-50',
    title: 'True Flavour',
    desc: 'Every plate celebrates the bold and comforting flavours of African and continental cuisine.',
  },
  {
    Icon: Heart,
    iconClassName: 'text-red-500',
    bgClassName: 'bg-red-50',
    title: 'Community First',
    desc: 'We actively support local charities and host community dining events every month.',
  },
] as const;
