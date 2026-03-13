export type Category = 'All' | 'Appetizers' | 'Main Course' | 'Desserts';

type CategoryFilterProps = {
  categories: readonly Category[];
  activeCategory: Category;
  onChange: (category: Category) => void;
};

const CategoryFilter = ({ categories, activeCategory, onChange }: CategoryFilterProps) => (
  <div className="mb-10 sm:mb-12">
    <div
      className="no-scrollbar -mx-6 overflow-x-auto px-6"
      role="tablist"
      aria-label="Menu categories"
    >
      <div className="flex w-max min-w-full gap-3 sm:justify-center">
        {categories.map(category => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:px-6 sm:py-3 ${
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
    </div>
  </div>
);

export default CategoryFilter;
