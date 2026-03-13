import { CateringPackageType } from '@/types/cateringPackage.type';

export const CATERING_PACKAGES: CateringPackageType[] = [
  {
    id: 'c1',
    name: 'Intimate Gathering',
    price: 'From GH₵800',
    guests: '10 - 30 guests',
    description: 'Perfect for birthday dinners, anniversaries, and small corporate lunches.',
    features: [
      '3-course plated meal',
      'Dedicated server',
      'Custom menu consultation',
      'Linen & tableware',
    ],
  },
  {
    id: 'c2',
    name: 'Corporate Event',
    price: 'From GH₵2,400',
    guests: '30 - 100 guests',
    description:
      'Impress clients and colleagues with a professionally catered corporate experience.',
    features: [
      'Cocktail hour + 4 courses',
      'Full wait staff',
      'AV setup coordination',
      'Branded menus',
      'Bar service',
    ],
  },
  {
    id: 'c3',
    name: 'Grand Celebration',
    price: 'From GH₵5,500',
    guests: '100 - 300 guests',
    description: 'Weddings, galas, and milestone events — we handle every culinary detail.',
    features: [
      'Custom 5-course menu',
      'Full staffing',
      'Venue décor liaison',
      'Premium bar package',
      'Cake cutting service',
      'Late-night snack station',
    ],
  },
];
