import { LucideIcon } from 'lucide-react';
import { memo } from 'react';

type ValueCardProps = {
  Icon: LucideIcon;
  iconClassName: string;
  bgClassName: string;
  title: string;
  desc: string;
};

const ValueCard = memo(({ Icon, iconClassName, bgClassName, title, desc }: ValueCardProps) => (
  <article className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
    <div
      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${bgClassName}`}
      aria-hidden="true"
    >
      <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${iconClassName}`} />
    </div>

    <h3 className="mb-3 text-xl font-black text-slate-900">{title}</h3>
    <p className="text-sm leading-7 text-slate-600">{desc}</p>
  </article>
));

export default ValueCard;
