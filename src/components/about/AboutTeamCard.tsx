import { motion } from 'framer-motion';
import { memo } from 'react';

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
};

const AboutTeamCard = memo(({ name, role, bio, image, index }: TeamCardProps) => (
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
    className="group"
  >
    <article className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:border-amber-100 transition-all duration-300">
      <div className="w-full h-80 md:h-50 md:w-50 rounded-2xl overflow-hidden shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="min-w-0">
        <h4 className="text-lg font-black text-slate-900 mb-0.5">{name}</h4>
        <p className="text-amber-600 font-semibold text-sm mb-3">{role}</p>
        <p className="text-slate-500 text-sm md:text-md leading-relaxed">{bio}</p>
      </div>
    </article>
  </motion.li>
));

AboutTeamCard.displayName = 'AboutTeamCard';

export default AboutTeamCard;
