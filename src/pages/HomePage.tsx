import CategoryFilter from '@/components/home/CategoryFilter';
import MenuCard from '@/components/shared/MenuCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { CATEGORIES } from '@/data/categories.data';
import { MENU_ITEMS } from '@/data/menu.data';
import { SITELINKS } from '@/data/siteLinks.data';
import { useIsMobile } from '@/hooks/use-mobile';
import { Category } from '@/types/categories.type';
import { SitelinkType } from '@/types/siteLink.type';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { useMemo, useState, memo } from 'react';
import { Link } from 'react-router-dom';

type PrimaryLinkButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  icon?: React.ReactNode;
  fullWidthOnMobile?: boolean;
};

const PrimaryLinkButton = ({
  to,
  children,
  variant = 'primary',
  icon,
  fullWidthOnMobile = false,
}: PrimaryLinkButtonProps) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:px-8 sm:py-4 sm:text-base';

  const variants = {
    primary: 'bg-amber-500 text-white shadow-lg shadow-amber-500/20 hover:bg-amber-600',
    secondary: 'border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
    dark: 'bg-slate-900 text-white hover:bg-slate-800',
    light: 'bg-white text-slate-900 shadow-xl hover:bg-slate-100',
  };

  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${fullWidthOnMobile ? 'w-full sm:w-auto' : ''}`}
    >
      <span>{children}</span>
      {icon}
    </Link>
  );
};

const SitelinkCard = memo(({ label, page, desc1, desc2, Icon, index }: SitelinkType) => (
  <motion.li
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, delay: index! * 0.06 }}
  >
    <Link
      to={page}
      className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:p-8"
      aria-label={`Explore ${label}`}
    >
      <div
        className="absolute -bottom-4 -right-4 opacity-5 transition-opacity group-hover:opacity-10"
        aria-hidden="true"
      >
        <Icon className="h-20 w-20 sm:h-24 sm:w-24" />
      </div>

      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-black text-slate-900 transition-colors group-hover:text-amber-600 sm:text-2xl">
          {label}
        </h3>

        {desc1 && <p className="mb-1 text-sm font-medium text-slate-600 sm:text-base">{desc1}</p>}
        {desc2 && <p className="text-sm text-slate-400">{desc2}</p>}

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-500">
          <span>Explore</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  </motion.li>
));

SitelinkCard.displayName = 'SitelinkCard';

MenuCard.displayName = 'MenuCard';
type CtaCardProps = {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  variant?: 'light' | 'amber';
};

const CtaCard = ({ to, icon, children, variant = 'light' }: CtaCardProps) => (
  <Link
    to={to}
    className={`flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto sm:px-8 sm:py-5 sm:text-lg ${
      variant === 'light'
        ? 'bg-white text-slate-900 shadow-xl hover:bg-slate-100'
        : 'bg-amber-500 text-white shadow-xl hover:bg-amber-600'
    }`}
  >
    {icon}
    <span>{children}</span>
  </Link>
);

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const isMobile = useIsMobile();

  const filteredMenu = useMemo(() => {
    if (activeCategory !== 'All') {
      return MENU_ITEMS.filter(item => item.category === activeCategory).slice(0, 6);
    }

    return [
      ...MENU_ITEMS.filter(item => item.category === 'Main').slice(0, 2),
      ...MENU_ITEMS.filter(item => item.category === 'Drinks').slice(0, 1),
      ...MENU_ITEMS.filter(item => item.category === 'Pastries').slice(0, 1),
      ...MENU_ITEMS.filter(item => item.category === 'Pizza').slice(0, 2),
    ];
  }, [activeCategory]);

  const heroImage = isMobile
    ? '/images/cover_images/home-hero-mobile.webp'
    : '/images/cover_images/home-hero.webp';

  return (
    <main>
      <header className="relative min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Home Cover Image"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container mx-auto px-6 pt-24 pb-16 sm:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65 }}
              className="max-w-2xl"
            >
              <p className="mb-5 inline-block rounded-full bg-amber-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                Culinary Excellence
              </p>

              <h1 className="mb-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span>Flavor That</span>
                <br />
                <span className="text-amber-400">Tells a Story.</span>
              </h1>

              <p className="mb-8 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Experience the perfect blend of local fresh ingredients and world-class culinary
                techniques at Kissel Foods.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <PrimaryLinkButton
                  to="/menu"
                  variant="primary"
                  fullWidthOnMobile
                  icon={<ChevronRight className="h-5 w-5" />}
                >
                  View Full Menu
                </PrimaryLinkButton>

                <PrimaryLinkButton to="/reservations" variant="secondary" fullWidthOnMobile>
                  Book a Table
                </PrimaryLinkButton>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24" aria-labelledby="explore-sections">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Explore More"
            description="Browse our dining experiences, specialties, and services."
          />

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SITELINKS.map((link, index) => {
              const { Icon } = link;

              return (
                <SitelinkCard
                  key={link.label}
                  label={link.label}
                  page={link.page}
                  desc1={link.desc1}
                  desc2={link.desc2}
                  Icon={Icon}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </section>

      <section id="menu" className="py-16 sm:py-20 lg:py-24" aria-labelledby="featured-menu-title">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Featured Selection"
            title="Our Featured Menu"
            description="Explore our carefully curated selection of signature dishes, crafted with the freshest seasonal ingredients."
          />

          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMenu.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>

          <div className="mt-12 text-center sm:mt-16">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border-b-2 border-amber-400 pb-1 text-base font-black text-slate-900 transition-colors hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-lg"
            >
              <span>Explore Full Menu</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-slate-900 py-16 sm:py-20 lg:py-24"
        aria-labelledby="home-cta-title"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 select-none opacity-10"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full fill-amber-500"
          >
            <path
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,89.9,-16.2,88.5,-0.8C87.1,14.6,81.7,29.3,73.5,42.7C65.3,56.1,54.2,68.2,40.4,75.2C26.5,82.2,10.1,84.1,-4.9,82.7C-19.9,81.2,-33.5,76.5,-46.8,69C-60,61.4,-72.8,51.1,-79.9,37.8C-87.1,24.5,-88.5,8.1,-87.3,-8.2C-86.1,-24.5,-82.3,-40.7,-73.4,-54C-64.6,-67.2,-50.7,-77.4,-36,-84.3C-21.3,-91.2,-5.7,-94.7,10.2,-91.2C26.1,-87.7,30.6,-83.5,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            title="Ready for an Unforgettable Dining Experience?"
            description="Book your table now or contact us for catering services for your next event."
            color="text-slate-200"
          />

          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CtaCard
              to="/reservations"
              icon={<Phone className="h-5 w-5 text-amber-500 sm:h-6 sm:w-6" />}
              variant="light"
            >
              Reserve a Table
            </CtaCard>

            <CtaCard
              to="/contact"
              icon={<MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
              variant="amber"
            >
              Get in Touch
            </CtaCard>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
