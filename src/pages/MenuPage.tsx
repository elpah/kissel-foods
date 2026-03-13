import { Category } from '@/components/home/CategoryFilter';
import PageHero from '@/components/PageHero';
import MenuCard from '@/components/shared/MenuCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { MENU_ITEMS } from '@/data/menu.data';
import { AnimatePresence, motion } from 'framer-motion';
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

      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="menu-section-title"
      >
        <div className="container mx-auto px-6">

          <SectionHeading
            title="Explore Our Dishes"
            description="Browse through our handcrafted menu prepared with seasonal ingredients."
          />

          {/* Category Filter */}
          <div
            className="mb-12 flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Menu categories"
          >
            {CATEGORIES.map(category => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
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