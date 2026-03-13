import { LucideIcon } from 'lucide-react';
import { memo } from 'react';
import { JSX } from 'react/jsx-runtime';

type DetailCardProps = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};

const DetailCard = memo(({ Icon, title, desc }: DetailCardProps) => (
  <article className="flex flex-col gap-3">
    <div
      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50"
      aria-hidden="true"
    >
      <Icon className="h-7 w-7 text-amber-500" />
    </div>
    <h3 className="text-lg font-black text-slate-900">{title}</h3>
    <p className="text-sm leading-7 text-slate-500">{desc}</p>
  </article>
));

export default DetailCard;
