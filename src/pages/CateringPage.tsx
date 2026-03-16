import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import { CATERING_PACKAGES } from '@/data/cateringPackage.data';
import CateringPackageCard from '@/components/catering/CateringPackageCard';
import SocialPromoSection from '@/components/shared/SpecialPromoSection';

CateringPackageCard.displayName = 'CateringPackageCard';

const CateringPage = () => (
  <main>
    <PageHero
      title="Catering"
      subtitle="Bringing the Kissel Foods experience to your special events."
      image="/images/cover_images/menu-hero.webp"
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

        <SocialPromoSection
          bgClassName="bg-amber-50"
          titleClassName="text-slate-900"
          textClassName="text-slate-600"
          buttonColor="text-gray-900"
        />
      </div>
    </section>
  </main>
);

export default CateringPage;
