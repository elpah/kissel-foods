import { MENU_ITEMS } from '@/data/menu.data';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { memo } from 'react';

type MenuCardProps = {
  item: (typeof MENU_ITEMS)[number];
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
};

const MenuCard = memo(({ item }: MenuCardProps) => (
  <motion.article
    variants={cardVariants}
    whileHover={{ y: -4 }}
    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
  >
    <div className="relative h-52 overflow-hidden sm:h-56">
      <img
        src={item.image}
        alt={item.name}
        width="740"
        height="416"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-slate-900 shadow-sm backdrop-blur">
        {item.price}
      </div>
    </div>

    <div className="p-5 sm:p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{item.name}</h3>
      </div>

      <p className="mb-4 text-sm leading-6 text-slate-600 sm:text-[15px]">{item.description}</p>

      <div className="flex items-center justify-between gap-3">
        <span className="rounded bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-700 sm:text-xs">
          {item.category}
        </span>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          aria-label={`Order ${item.name}`}
        >
          <span>Order Now</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </motion.article>
));

MenuCard.displayName = 'MenuCard';

export default MenuCard;
