import { Calendar, Clock, Users } from 'lucide-react';

export const RESERVATION_DETAILS = [
  {
    Icon: Calendar,
    title: 'Advance Booking',
    desc: 'We recommend booking at least 24 hours in advance, especially for weekends.',
  },
  {
    Icon: Users,
    title: 'Group Dining',
    desc: 'For parties of 8 or more, please call us directly to arrange special seating.',
  },
  {
    Icon: Clock,
    title: 'Table Holds',
    desc: 'We hold reservations for 15 minutes. Please call if you are running late.',
  },
] as const;
