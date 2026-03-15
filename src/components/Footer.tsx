import { HOURS } from '@/data/hours.data';
import { SITELINKS } from '@/data/siteLinks.data';
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type FooterTitleProps = {
  id?: string;
  children: React.ReactNode;
};

const FooterTitle = ({ id, children }: FooterTitleProps) => (
  <h2 id={id} className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
    {children}
  </h2>
);

type SocialLinkProps = {
  href: string;
  label: string;
  Icon: LucideIcon;
};

const SocialLink = ({ href, label, Icon }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-all hover:border-amber-400 hover:bg-amber-500 hover:text-white"
  >
    <Icon className="h-5 w-5" />
  </a>
);

type ContactItemProps = {
  href: string;
  Icon: LucideIcon;
  children: React.ReactNode;
  external?: boolean;
  align?: 'start' | 'center';
};

const ContactItem = ({ href, Icon, children, external = false }: ContactItemProps) => (
  <li>
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
    >
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-amber-400 ring-1 ring-white/10">
        <Icon className="h-5 w-5" />
      </span>

      <span className="leading-6">{children}</span>
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <img src="/images/kissel_logo.png" alt="LOGO" className="h-auto w-20 md:w-25 " />
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-300">
              Premium dining experiences built around fresh ingredients, warm hospitality, and bold,
              memorable flavors.
            </p>

            <div className="flex items-center gap-3">
              <SocialLink href="#" label="Instagram" Icon={Instagram} />
              <SocialLink href="#" label="Facebook" Icon={Facebook} />
            </div>
          </div>

          <nav aria-label="Footer quick links">
            <FooterTitle>Quick Links</FooterTitle>

            <ul className="space-y-3">
              {SITELINKS.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.page}
                    className="group inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-amber-400"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-hours">
            <FooterTitle id="footer-hours">Hours</FooterTitle>

            <ul className="space-y-3">
              {HOURS.map(h => (
                <li
                  key={h.day}
                  className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 text-sm"
                >
                  <span className="text-slate-300">{h.day}</span>
                  <span className="whitespace-nowrap font-semibold text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <FooterTitle id="footer-contact">Contact</FooterTitle>

            <ul className="space-y-4">
              <ContactItem
                href="https://www.google.com/maps/search/?api=1&query=GG74+3QF+Accra+Cape+Coast+Rd+Accra+Ghana"
                Icon={MapPin}
                external
              >
                GG74+3QF, Accra - Cape Coast Rd, Accra, Ghana
              </ContactItem>

              <ContactItem href="tel:++233537947455" Icon={Phone}>
                +233 53 794 7455
              </ContactItem>

              <ContactItem href="mailto:info@kisselfoods.com" Icon={Mail}>
                info@kisselfoods.com
              </ContactItem>
            </ul>
          </section>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 md:flex-row">
          <p>© 2026 All rights reserved.</p>
          <div className="flex items-center gap-6">Designed &amp; Developed By Paruah Systems</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
