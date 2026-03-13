import { motion } from "framer-motion";
import { memo } from "react";

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
    className="group text-center"
  >
    <article>
      <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-3xl shadow-lg transition-all group-hover:shadow-xl sm:h-40 sm:w-40">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mb-1 text-xl font-black text-slate-900">{name}</h3>
      <p className="mb-4 text-sm font-semibold text-amber-600">{role}</p>
      <p className="mx-auto max-w-xs text-sm leading-7 text-slate-600">{bio}</p>
    </article>
  </motion.li>
));

export default AboutTeamCard