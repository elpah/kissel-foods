import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { CATERING_PACKAGES } from '@/data/cateringPackage.data';
import { Instagram, Facebook, type LucideIcon } from 'lucide-react';
import CateringPackageCard from '@/components/catering/CateringPackageCard';
import SocialButton from '@/components/shared/SocialButton';

CateringPackageCard.displayName = 'CateringPackageCard';

const CateringPage = () => (
  <main>
    <PageHero
      title="Catering"
      subtitle="Bringing the Kissel Foods experience to your special events."
      image="https://images.unsplash.com/photo-1530062845289-9109b2c9c836?auto=format&fit=crop&q=80&w=2000"
    />

    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="catering-packages-title">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Choose Your Package"
          description="Every package is fully customizable. Contact us to tailor it perfectly to your event."
        />

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mb-20 lg:grid-cols-3 lg:gap-8">
          {CATERING_PACKAGES.map((pkg, index) => (
            <CateringPackageCard
              key={pkg.id}
              id={pkg.id}
              name={pkg.name}
              guests={pkg.guests}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              featured={index === 1}
              index={index}
            />
          ))}
        </div>

        <section
          className="rounded-3xl bg-amber-50 px-6 py-10 text-center sm:px-8 sm:py-12 md:px-12 md:py-16"
          aria-labelledby="catering-social-title"
        >
          <h2
            id="catering-social-title"
            className="mb-4 text-2xl font-black text-slate-900 sm:text-3xl"
          >
            Never Miss a Special
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Follow us on social media or sign up for our newsletter to be the first to hear about
            new offers and seasonal events.
          </p>

          <div className="flex justify-center gap-4">
            <SocialButton color="text-gray-900" href="#" label="Instagram" Icon={Instagram} />
            <SocialButton color="text-gray-900" href="#" label="Facebook" Icon={Facebook} />
          </div>
        </section>
      </div>
    </section>
  </main>
);

export default CateringPage;
