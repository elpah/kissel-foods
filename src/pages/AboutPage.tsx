import AboutTeamCard from '@/components/about/AboutTeamCard';
import LeadershipSection from '@/components/about/LeadershipSection';
import ValueCard from '@/components/about/ValueCard';
import PageHero from '@/components/PageHero';
import about_hero from '@/assets/images/cover_images/about-hero.webp';
import about_section_image from '@/assets/images/cover_images/about.webp';

import SectionHeading from '@/components/shared/SectionHeading';
import { LEADERSHIP, TEAM_MEMBERS } from '@/data/team.data';
import { VALUES } from '@/data/values.data';
import { motion } from 'framer-motion';
import { memo } from 'react';

const STORY_STATS = [
  { value: '9+', label: 'Years in Service' },
  { value: '10000+', label: 'Happy Guests' },
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
      image={about_hero}
    />
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="about-story-title">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeLeft}>
            <SectionHeading eyebrow="Authentic Flavours" title="A True Taste Away From Home" />

            <div className="mt-6 space-y-5">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Kissel Foods is a home of African and Continental dishes with special touch of
                Excellence. The focus of Kissel foods is that every customer should find an ideal
                taste of meals away from home. Whether you are craving the spicy kick of jollof
                rice, the comforting warmth of Egusi, banku with Tilapia or the rich flavors of our
                slow-cooked stews, our menu is designed to take you on a culinary adventure that
                will leave you feeling satisfied and eager to return.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Our focus is on providing an ideal taste of meals away from home, where every
                customer feels like family. Whether you're a foodie looking to try something new, a
                busy professional seeking a delicious and authentic meal, or a family looking for a
                warm and welcoming space to share a meal together, Kissel Foods is the perfect
                destination. Come and experience the excellence that sets us apart, and discover why
                we're more than just a restaurant. We are a taste of Africa and the continent, right
                in your neighborhood.
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
              src={about_section_image}
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
        <div className="mb-10 text-center sm:mb-12">
          <SectionHeading
            title="The People Behind the Food"
            description="Meet the team that makes Kissel Foods extraordinary."
            centered
          />
        </div>
        <LeadershipSection members={LEADERSHIP} />
        <section aria-labelledby="team-title">
          <div className=" flex items-center gap-3 mb-9">
            <span aria-hidden="true" className="h-px w-8 bg-amber-500" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
              Meet the Team
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-8">
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
