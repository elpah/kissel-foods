import { motion } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type QuickLink = {
  id: string;
  label: string;
  desc: string;
  to: string;
};

const QUICK_LINKS: QuickLink[] = [
  {
    id: 'ql-home',
    label: 'Home',
    desc: 'Back to the beginning',
    to: '/',
  },
  {
    id: 'ql-menu',
    label: 'Our Menu',
    desc: 'Explore signature dishes',
    to: '/menu',
  },
  {
    id: 'ql-reservations',
    label: 'Reservations',
    desc: 'Book your table today',
    to: '/reservations',
  },
  {
    id: 'ql-contact',
    label: 'Contact',
    desc: "We're happy to help",
    to: '/contact',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

type ActionLinkProps = {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'dark' | 'amber';
};

const ActionLink = ({ to, children, icon, variant = 'dark' }: ActionLinkProps) => (
  <Link
    to={to}
    className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:px-10 sm:py-4 sm:text-base ${
      variant === 'amber'
        ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/20 hover:bg-amber-600'
        : 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-700'
    }`}
  >
    {icon}
    <span>{children}</span>
  </Link>
);

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 selection:bg-amber-100 selection:text-amber-900 sm:py-24">
      <motion.section
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mb-10 text-center"
        aria-labelledby="not-found-title"
      >
        <div className="mb-6 inline-block select-none">
          <span className="text-[110px] font-black leading-none tracking-tighter text-slate-100 sm:text-[140px] md:text-[200px]">
            404
          </span>
        </div>

        <h1
          id="not-found-title"
          className="mb-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl"
        >
          This dish isn&apos;t on the menu.
        </h1>

        <p className="mx-auto max-w-md text-base leading-7 text-slate-500 sm:text-lg">
          The page you&apos;re looking for does not exist yet. Let&apos;s get you back on track.
        </p>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row"
        aria-label="Primary actions"
      >
        <ActionLink to="/" icon={<Home className="h-5 w-5" />}>
          Go Back Home
        </ActionLink>

        <ActionLink
          to="/menu"
          variant="amber"
          icon={<ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
        >
          View Our Menu
        </ActionLink>
      </motion.section>

      <motion.nav
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.28 }}
        className="w-full max-w-2xl"
        aria-label="Quick links"
      >
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Or jump to a page
        </p>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {QUICK_LINKS.map(link => (
            <li key={link.id}>
              <Link
                to={link.to}
                className="group flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center transition-all duration-200 hover:border-amber-200 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <span className="mb-1 text-sm font-black text-slate-900 transition-colors group-hover:text-amber-600">
                  {link.label}
                </span>
                <span className="text-xs leading-snug text-slate-400">{link.desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </main>
  );
};

export default NotFound;
