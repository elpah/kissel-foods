import PageHero from '@/components/PageHero';
import DetailCard from '@/components/reservation/DetailCard';
import ReservationActionCard from '@/components/reservation/ReservationActionCard';
import SectionHeading from '@/components/shared/SectionHeading';
import { HOURS } from '@/data/hours.data';
import { RESERVATION_DETAILS } from '@/data/reservationDetails.data';
import { Phone, MessageCircle } from 'lucide-react';

ReservationActionCard.displayName = 'ReservationActionCard';
DetailCard.displayName = 'DetailCard';

const ReservationPage = () => (
  <main>
    <PageHero
      title="Reservations"
      subtitle="Secure your table and let us take care of the rest."
      image="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000"
    />

    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="reservation-options-title">
      <div className="container mx-auto max-w-4xl px-6">
        <section aria-labelledby="reservation-actions-title" className="mb-14 sm:mb-16">
          <SectionHeading
            title="Book Your Table"
            description="Choose the reservation method that works best for you."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <ReservationActionCard
              href="tel:+233537947455"
              title="Call Us"
              description="Speak directly with our reservations team."
              actionText="+233 53 794 7455"
              Icon={Phone}
              variant="dark"
              delay={0.1}
            />

            <ReservationActionCard
              href="https://wa.me/233537947455"
              title="WhatsApp"
              description="Message us anytime, we respond fast."
              actionText="Chat Now →"
              Icon={MessageCircle}
              variant="green"
              // external
              delay={0.2}
            />
          </div>
        </section>

        <section
          className="rounded-3xl bg-slate-50 p-6 sm:p-8 lg:p-10"
          aria-labelledby="reservation-expectations-title"
        >
          <SectionHeading
            title="What to Expect"
            description="A few details to make your reservation seamless."
            centered={false}
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {RESERVATION_DETAILS.map(item => (
              <DetailCard key={item.title} Icon={item.Icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        <section
          className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 sm:mt-12 sm:p-8 lg:p-10"
          aria-labelledby="reservation-hours-title"
        >
          <h2
            id="reservation-hours-title"
            className="mb-8 text-2xl font-black text-slate-900 sm:text-3xl"
          >
            Opening Hours
          </h2>

          <ul className="space-y-4 sm:space-y-5">
            {HOURS.map(h => (
              <li
                key={h.day}
                className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 last:border-0"
              >
                <span className="text-sm font-medium text-slate-600 sm:text-base">{h.day}</span>
                <span className="rounded-full bg-amber-50 px-4 py-1.5 text-sm font-black text-amber-700">
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  </main>
);

export default ReservationPage;
