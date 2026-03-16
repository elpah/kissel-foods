import { TeamMemberType } from '@/types/team.type';
import { motion } from 'framer-motion';

type LeadershipSectionProps = {
  members: TeamMemberType[];
};

type LeadershipCardProps = TeamMemberType & {
  index: number;
};

const cardThemes = {
  dark: {
    card: 'bg-slate-900',
    overlay: 'from-slate-900 via-slate-900/30 to-transparent',
    heading: 'text-white',
    role: 'text-amber-400',
    bio: 'text-white/60',
  },
  light: {
    card: 'bg-amber-50 border border-amber-100',
    overlay: 'from-amber-50 via-amber-50/20 to-transparent',
    heading: 'text-slate-900',
    role: 'text-amber-600',
    bio: 'text-slate-500',
  },
} as const;

function LeadershipCard({ id, name, role, bio, image, theme, index }: LeadershipCardProps) {
  const selectedTheme = cardThemes[(theme as keyof typeof cardThemes) ?? 'dark'];
  const cardTitleId = `leadership-card-title-${index}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      aria-labelledby={cardTitleId}
      className={`overflow-hidden rounded-3xl ${selectedTheme.card}`}
    >
      <div className="relative h-[460px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${selectedTheme.overlay}`} />
      </div>

      <div className="p-8">
        <header>
          <h3
            id={cardTitleId}
            className={`mb-1 text-2xl font-black leading-tight ${selectedTheme.heading}`}
          >
            {name}
          </h3>

          <p className={`mb-4 text-sm font-semibold ${selectedTheme.role}`}>{role}</p>
        </header>

        <p className={`text-sm leading-relaxed ${selectedTheme.bio}`}>{bio}</p>
      </div>
    </motion.article>
  );
}

export function LeadershipSection({ members }: LeadershipSectionProps) {
  return (
    <section aria-labelledby="leadership-section-title" className="mb-30">
      <div className="flex items-center gap-3 mb-9">
        <span aria-hidden="true" className="h-px w-8 bg-amber-500" />

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
          Meet the Leadership
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {members.map((member, index) => (
          <LeadershipCard key={member.id} {...member} index={index} />
        ))}
      </div>
    </section>
  );
}

export default LeadershipSection;
