import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import SocialButton from '@/components/shared/SocialButton';
import { HOURS } from '@/data/hours.data';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Send,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  type LucideIcon,
} from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent, memo } from 'react';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const INITIAL_FORM_STATE: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

type FieldProps = {
  id: keyof ContactFormState;
  label: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  id,
  label,
  value,
  required = false,
  placeholder,
  type = 'text',
  onChange,
}: FieldProps) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-700">
      {label} {required && <span aria-hidden="true">*</span>}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    />
  </div>
);

type TextareaFieldProps = {
  id: keyof ContactFormState;
  label: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaField = ({
  id,
  label,
  value,
  required = false,
  placeholder,
  rows = 5,
  onChange,
}: TextareaFieldProps) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-700">
      {label} {required && <span aria-hidden="true">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      required={required}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 outline-none transition-all placeholder:text-slate-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    />
  </div>
);

type SelectFieldProps = {
  id: keyof ContactFormState;
  label: string;
  value: string;
  required?: boolean;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectField = ({
  id,
  label,
  value,
  required = false,
  options,
  onChange,
}: SelectFieldProps) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-slate-700">
      {label} {required && <span aria-hidden="true">*</span>}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
    >
      <option value="">Select a topic</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

type InfoItemProps = {
  Icon: LucideIcon;
  title: string;
  children: React.ReactNode;
};

const InfoItem = memo(({ Icon, title, children }: InfoItemProps) => (
  <div className="flex items-start gap-4">
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100"
      aria-hidden="true"
    >
      <Icon className="h-5 w-5 text-amber-600" />
    </div>
    <div>
      <p className="mb-1 text-sm font-bold text-slate-900">{title}</p>
      {children}
    </div>
  </div>
));

InfoItem.displayName = 'InfoItem';

const ContactPage = () => {
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState(INITIAL_FORM_STATE);
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you. Reach out any time."
        image="/images/cover_images/contact-hero.webp"
      />

      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="contact-section-title">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            <section className="lg:col-span-3" aria-labelledby="contact-form-title">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center sm:py-16"
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
                      aria-hidden="true"
                    >
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>

                    <h2 className="mb-3 text-2xl font-black text-slate-900 sm:text-3xl">
                      Message Sent!
                    </h2>

                    <p className="max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-8 rounded-full bg-slate-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <SectionHeading
                      title="Send Us a Message"
                      description="Fill out the form and our team will be in touch shortly."
                      centered={false}
                    />

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <InputField
                          id="name"
                          label="Full Name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                        />

                        <InputField
                          id="email"
                          label="Email Address"
                          type="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="jane@example.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <InputField
                          id="phone"
                          label="Phone Number"
                          type="tel"
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="+233 53 794 7455"
                        />

                        <SelectField
                          id="subject"
                          label="Subject"
                          required
                          value={formState.subject}
                          onChange={handleSelectChange}
                          options={[
                            { value: 'reservation', label: 'Reservation' },
                            { value: 'catering', label: 'Catering Enquiry' },
                            { value: 'feedback', label: 'Feedback' },
                            { value: 'other', label: 'Other' },
                          ]}
                        />
                      </div>

                      <TextareaField
                        id="message"
                        label="Message"
                        required
                        value={formState.message}
                        onChange={handleTextareaChange}
                        placeholder="Tell us how we can help..."
                      />

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 py-4 text-base font-black text-white transition-all hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 sm:text-lg"
                      >
                        <span>Send Message</span>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </section>

            <aside
              className="flex flex-col gap-6 sm:gap-8 lg:col-span-2"
              aria-label="Contact details"
            >
              <section
                className="rounded-3xl bg-slate-50 p-6 sm:p-8"
                aria-labelledby="contact-details-title"
              >
                <h2 id="contact-details-title" className="mb-6 text-xl font-black text-slate-900">
                  Find Us
                </h2>

                <div className="space-y-6">
                  <InfoItem Icon={MapPin} title="Address">
                    <p className="text-sm leading-6 text-slate-500">
                      GG74+3QF, Accra - Cape Coast Rd, Accra, Ghana
                    </p>
                  </InfoItem>

                  <InfoItem Icon={Clock} title="Hours">
                    <ul className="space-y-1">
                      {HOURS.map(h => (
                        <li
                          key={h.day}
                          className="flex justify-between gap-4 text-sm text-slate-500"
                        >
                          <span>{h.day}</span>
                          <span className="font-semibold text-slate-700">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </InfoItem>
                </div>
              </section>

              <section
                className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8"
                aria-labelledby="social-title"
              >
                <h2 id="social-title" className="mb-3 text-xl font-black">
                  Follow Along
                </h2>

                <p className="mb-6 text-sm leading-7 text-white/70">
                  Stay updated with our daily specials, events, and behind-the-scenes moments.
                </p>

                <div className="flex flex-wrap gap-4">
                  <SocialButton href="#" label="Instagram" Icon={Instagram} />
                  <SocialButton href="#" label="Facebook" Icon={Facebook} />
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
