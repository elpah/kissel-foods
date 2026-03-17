import { motion } from 'framer-motion';

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <header
      className="relative mt-15 h-80 overflow-hidden md:h-96 lg:h-120"
      aria-labelledby="page-hero-title"
    >
      <figure className="absolute inset-0">
        <img
          src={image}
          alt="Cover Image"
          aria-hidden="true"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </figure>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          id="page-hero-title"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-black text-white md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-xl text-lg text-white/80"
        >
          {subtitle}
        </motion.p>
      </div>
    </header>
  );
};

export default PageHero;
