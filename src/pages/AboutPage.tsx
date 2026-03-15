import AboutTeamCard from '@/components/about/AboutTeamCard';
import ValueCard from '@/components/about/ValueCard';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { TEAM_MEMBERS } from '@/data/team.data';
import { VALUES } from '@/data/values.data';
import { motion } from 'framer-motion';
import { memo } from 'react';

const STORY_STATS = [
  { value: '5+', label: 'Years in Service' },
  { value: '400+', label: 'Happy Guests' },
] as const;

const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = memo(({ value, label }: StatCardProps) => (
  <li className="rounded-2xl bg-amber-50 p-4 text-center sm:p-5">
    <p className="mb-1 text-2xl font-black text-amber-600 sm:text-3xl">{value}</p>
    <p className="text-xs text-slate-600 sm:text-sm">{label}</p>
  </li>
));

StatCard.displayName = 'StatCard';
ValueCard.displayName = 'ValueCard';
AboutTeamCard.displayName = 'TeamCard';

const AboutPage = () => (
  <main>
    <PageHero
      title="Our Story"
      subtitle="Passion, flavor, and community — the heart of Kissel Foods."
      image="/images/cover_images/about-hero.webp"
    />
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="about-story-title">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeLeft}>
            <SectionHeading
              eyebrow="Culinary Excellence"
              title="Born From a Love of Food and Community"
            />

            <div className="mt-6 space-y-5">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Kissel Foods is a home of African and Continental dishes with special touch of
                Excellence. The focus of Kissel foods is that every customer should find an ideal
                taste of meals away from home. Beyond a restaurant; it's a culinary journey through
                the rich and diverse flavors of Africa and the continent, with a dash of excellence.
                Our mission is to provide an unforgettable dining experience that transports our
                customers to the heart of Africa, where every meal is a celebration of tradition,
                culture, and flavor. At Kissel Foods, we're passionate about serving authentic
                African and Continental dishes with a unique twist that sets us apart from the rest.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Our chefs are dedicated to using only the freshest ingredients, carefully selected
                to ensure that every bite is a burst of flavor and aroma that will leave you wanting
                more. Whether you're craving the spicy kick of jollof rice, the comforting warmth of
                Egusi, banku with Tilapia or the rich flavors of our slow-cooked stews, our menu is
                designed to take you on a culinary adventure that will leave you feeling satisfied
                and eager to return. Our focus is on providing an ideal taste of meals away from
                home, where every customer feels like family. We believe that food is a universal
                language, and we strive to create a welcoming atmosphere that bridges cultures and
                brings people together. From our friendly staff to our carefully crafted menu, every
                aspect of Kissel Foods is designed to make you feel at home.
              </p>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Whether you're a foodie looking to try something new, a busy professional seeking a
                delicious and authentic meal, or a family looking for a warm and welcoming space to
                share a meal together, Kissel Foods is the perfect destination. Come and experience
                the excellence that sets us apart, and discover why we're more than just a
                restaurant. We are a taste of Africa and the continent, right in your neighborhood.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {STORY_STATS.map(stat => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeRight} className="relative">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=800"
              alt="Kissel Foods kitchen team at work"
              loading="lazy"
              className="h-[360px] w-full rounded-3xl object-cover shadow-2xl sm:h-[420px] lg:h-[500px]"
            />
          </motion.div>
        </div>

        <section className="mb-20 lg:mb-24" aria-labelledby="about-values-title">
          <div className="mb-10 sm:mb-12">
            <SectionHeading
              title="What We Stand For"
              description="Everything we do is guided by quality ingredients, craft, and care for the people we serve."
              centered
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {VALUES.map(value => (
              <ValueCard
                key={value.title}
                Icon={value.Icon}
                iconClassName={value.iconClassName}
                bgClassName={value.bgClassName}
                title={value.title}
                desc={value.desc}
              />
            ))}
          </div>
        </section>

        <section aria-labelledby="team-title">
          <div className="mb-10 text-center sm:mb-12">
            <SectionHeading
              title="Meet the Team"
              description="The talented people who make every dish special."
              centered
            />
          </div>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <AboutTeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={index}
              />
            ))}
          </ul>
        </section>
      </div>
    </section>
  </main>
);

export default AboutPage;
