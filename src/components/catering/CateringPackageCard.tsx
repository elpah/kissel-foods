import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type CateringPackageCardProps = {
  id: string;
  name: string;
  guests: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  index: number;
};

const CateringPackageCard = memo(
  ({
    name,
    guests,
    price,
    description,
    features,
    featured = false,
    index,
  }: CateringPackageCardProps) => (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={`rounded-3xl border p-6 transition-all sm:p-8 ${
        featured
          ? 'scale-[1.02] border-slate-900 bg-slate-900 shadow-2xl lg:scale-105'
          : 'border-slate-200 bg-white hover:-translate-y-1 hover:shadow-xl'
      }`}
    >
      {featured && (
        <p className="mb-6 inline-block rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
          Most Popular
        </p>
      )}

      <header className="mb-6">
        <h2 className={`mb-1 text-2xl font-black ${featured ? 'text-white' : 'text-slate-900'}`}>
          {name}
        </h2>

        <p className={`text-sm ${featured ? 'text-white/65' : 'text-slate-500'}`}>{guests}</p>
      </header>

      <p
        className={`mb-6 text-3xl font-black sm:text-4xl ${featured ? 'text-amber-400' : 'text-slate-900'}`}
      >
        {price}
      </p>

      <p
        className={`mb-8 text-sm leading-7 sm:text-base ${
          featured ? 'text-white/75' : 'text-slate-600'
        }`}
      >
        {description}
      </p>

      <ul className="mb-8 space-y-3">
        {features.map(feature => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm leading-6 ${
              featured ? 'text-white/80' : 'text-slate-700'
            }`}
          >
            <CheckCircle
              className={`mt-0.5 h-5 w-5 shrink-0 ${
                featured ? 'text-amber-400' : 'text-amber-500'
              }`}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${
          featured
            ? 'bg-amber-500 text-white hover:bg-amber-600'
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        Get A Quote
      </Link>
    </motion.article>
  )
);

export default CateringPackageCard;
