import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import SocialPromoSection from '@/components/shared/SpecialPromoSection';
import { SPECIALS } from '@/data/specials.data';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { memo } from 'react';

type SpecialCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  tag: string;
  originalPrice: string;
  specialPrice: string;
  validUntil: string;
  index: number;
};

const SpecialCard = memo(
  ({
    name,
    description,
    image,
    tag,
    originalPrice,
    specialPrice,
    validUntil,
    index,
  }: SpecialCardProps) => (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/80">
        <div className="relative h-56 overflow-hidden sm:h-64">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
            {tag}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="mb-3 text-xl font-black text-slate-900 sm:text-2xl">{name}</h2>

          <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base text-slate-400 line-through sm:text-lg">
                {originalPrice}
              </span>
              <span className="text-2xl font-black text-amber-600 sm:text-3xl">{specialPrice}</span>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-500 sm:self-auto">
              <Tag className="h-4 w-4 text-amber-500" aria-hidden="true" />
              <span>{validUntil}</span>
            </div>
          </div>
        </div>
      </article>
    </motion.li>
  )
);

SpecialCard.displayName = 'SpecialCard';

const SpecialsPage = () => (
  <main>
    <PageHero
      title="Daily Specials"
      subtitle="Rotating offers and promotions crafted to delight every week."
      image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000"
    />

    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specials-title">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="This Week’s Specials"
          description="Enjoy limited-time offers, chef features, and seasonal promotions prepared to make every visit memorable."
        />

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {SPECIALS.map((special, index) => (
            <SpecialCard
              key={special.id}
              id={special.id}
              name={special.name}
              description={special.description}
              image={special.image}
              tag={special.tag}
              originalPrice={special.originalPrice}
              specialPrice={special.specialPrice}
              validUntil={special.validUntil}
              index={index}
            />
          ))}
        </ul>
        <SocialPromoSection
          className="mt-14 sm:mt-16"
          bgClassName="bg-slate-900"
          titleClassName="text-white"
          textClassName="text-white/70"
        />
      </div>
    </section>
  </main>
);

export default SpecialsPage;
