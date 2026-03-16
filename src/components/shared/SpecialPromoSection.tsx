import { Instagram, Facebook } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import SocialButton from './SocialButton';

type SocialPromoSectionProps = {
  title?: string;
  description?: string;
  bgClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  buttonColor?: string;
  className?: string;
};

export default function SocialPromoSection({
  title = 'Never Miss a Special',
  description = 'Follow us on social media or sign up for our newsletter to be the first to hear about new offers and seasonal events.',
  bgClassName = 'bg-slate-900',
  titleClassName = 'text-white',
  textClassName = 'text-white/70',
  buttonColor,
  className = '',
}: SocialPromoSectionProps) {
  return (
    <section
      className={`rounded-3xl px-6 py-10 text-center sm:px-8 sm:py-12 md:px-12 md:py-16 ${bgClassName} ${className}`}
      aria-labelledby="social-promo-title"
    >
      <h2
        id="social-promo-title"
        className={`mb-4 text-2xl font-black sm:text-3xl ${titleClassName}`}
      >
        {title}
      </h2>

      <p className={`mx-auto mb-8 max-w-xl text-sm leading-7 sm:text-base ${textClassName}`}>
        {description}
      </p>

      <div className="flex justify-center gap-4">
        <SocialButton color={buttonColor} href="#" label="Instagram" Icon={Instagram} />
        <SocialButton color={buttonColor} href="#" label="Facebook" Icon={Facebook} />
        <SocialButton
          color={buttonColor}
          href="https://www.tiktok.com/@kissel.foods"
          label="Tiktok"
          Icon={FaTiktok}
        />
      </div>
    </section>
  );
}
