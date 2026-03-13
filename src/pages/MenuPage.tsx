import CategoryFilter, { Category } from '@/components/home/CategoryFilter';
import PageHero from '@/components/PageHero';
import MenuCard from '@/components/shared/MenuCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { MENU_ITEMS } from '@/data/menu.data';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const CATEGORIES: Category[] = ['All', 'Appetizers', 'Main Course', 'Desserts'];

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
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000"
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

          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMenu.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
