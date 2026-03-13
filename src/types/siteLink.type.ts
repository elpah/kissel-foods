import { LucideIcon } from 'lucide-react';
import { Page } from './page.type';

export type SitelinkType = {
  label: string;
  page: Page;
  desc1: string;
  desc2: string;
  Icon: LucideIcon;
  index?: number;
};
