import { SitelinkType } from '@/types/siteLink.type';
import { Utensils, CalendarDays, Star, Pizza, Mail, Info } from 'lucide-react';

export const SITELINKS: SitelinkType[] = [
  {
    label: 'Menu',
    page: 'menu',
    desc1: 'Taste our signature dishes.',
    desc2: 'Fresh ingredients, bold flavors.',
    Icon: Utensils,
  },
  {
    label: 'Reservations',
    page: 'reservations',
    desc1: 'Call or WhatsApp to book.',
    desc2: 'Enjoy a seamless dining experience.',
    Icon: CalendarDays,
  },
  {
    label: 'Catering',
    page: 'catering',
    desc1: 'Order catering for events.',
    desc2: 'Your event, our delicious food.',
    Icon: Star,
  },
  {
    label: 'Specials',
    page: 'specials',
    desc1: 'Check daily specials.',
    desc2: 'Savings on your favorite meals.',
    Icon: Pizza,
  },
  {
    label: 'About Us',
    page: 'about',
    desc1: 'Learn our culinary story.',
    desc2: 'Passion meets flavor at Kissel Foods.',
    Icon: Info,
  },
  {
    label: 'Contact',
    page: 'contact',
    desc1: 'Get in touch with us.',
    desc2: "We're here to serve you.",
    Icon: Mail,
  },
];
