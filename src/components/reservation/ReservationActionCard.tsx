import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { memo } from 'react';

type ReservationActionCardProps = {
  href: string;
  title: string;
  description: string;
  actionText: string;
  Icon: LucideIcon;
  variant?: 'dark' | 'green';
  external?: boolean;
  delay?: number;
};

const ReservationActionCard = memo(
  ({
    href,
    title,
    description,
    actionText,
    Icon,
    variant = 'dark',
    external = false,
    delay = 0,
  }: ReservationActionCardProps) => (
    <motion.a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`group flex h-full flex-col rounded-3xl p-8 text-center shadow-xl transition-all hover:-translate-y-1 sm:p-10 ${
        variant === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-slate-800'
      }`}
    >
      <div
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${
          variant === 'green'
            ? 'mx-auto bg-white/20 group-hover:scale-110'
            : 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
        } transition-transform`}
        aria-hidden="true"
      >
        <Icon className="h-10 w-10 text-white" />
      </div>

      <h2 className="mb-3 text-2xl font-black text-white">{title}</h2>
      <p
        className={`mb-4 text-sm leading-7 ${variant === 'green' ? 'text-white/75' : 'text-white/65'}`}
      >
        {description}
      </p>
      <p
        className={`mt-auto text-xl font-black ${variant === 'green' ? 'text-white' : 'text-amber-400'}`}
      >
        {actionText}
      </p>
    </motion.a>
  )
);

export default ReservationActionCard;
