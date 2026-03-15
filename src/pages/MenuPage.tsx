import CategoryFilter from '@/components/home/CategoryFilter';
import PageHero from '@/components/PageHero';
import MenuCard from '@/components/shared/MenuCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { CATEGORIES } from '@/data/categories.data';
import { MENU_ITEMS } from '@/data/menu.data';
import { Category } from '@/types/categories.type';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <PageHero
        title="Our Menu"
        subtitle="Handcrafted dishes made with the finest seasonal ingredients."
        image="images/cover_images/menu-hero.webp"
      />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="menu-section-title">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Explore Our Dishes"
            description="Browse through our handcrafted menu prepared with seasonal ingredients."
          />

          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredMenu.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
