import { SpecialType } from '@/types/specials.type';

export const SPECIALS: SpecialType[] = [
  {
    id: 's1',
    name: "Chef's Tasting Menu",
    originalPrice: 'GH₵95.00',
    specialPrice: 'GH₵75.00',
    description:
      "A 5-course journey through our kitchen's finest seasonal creations. Paired with curated wine selections.",
    validUntil: 'Every Tuesday & Wednesday',
    tag: 'Weekly Special',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's2',
    name: 'Sunday Brunch Set',
    originalPrice: 'GH₵48.00',
    specialPrice: 'GH₵35.00',
    description:
      'Two courses plus free-flowing mimosas and fresh-pressed juices. The perfect Sunday ritual.',
    validUntil: 'Sundays 11am – 3pm',
    tag: 'Weekend Brunch',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's3',
    name: 'Happy Hour Bites',
    originalPrice: 'GH₵30.00',
    specialPrice: 'GH₵20.00',
    description: 'A sharing board of three rotating appetizers with craft cocktails at half price.',
    validUntil: 'Mon–Fri 4pm – 6pm',
    tag: 'Happy Hour',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's4',
    name: 'Date Night Package',
    originalPrice: 'GH₵120.00',
    specialPrice: 'GH₵88.00',
    description:
      'Three-course dinner for two with a bottle of house wine and complimentary dessert.',
    validUntil: 'Fridays & Saturdays',
    tag: 'Couples Special',
    image:
      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80&w=800',
  },
];
