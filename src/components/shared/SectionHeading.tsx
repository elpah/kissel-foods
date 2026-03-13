type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  color?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = true,
  color = 'text-slate-900',
}: SectionHeadingProps) => (
  <div className={centered ? 'mx-auto mb-10 max-w-3xl text-center md:mb-14' : 'mb-10 max-w-3xl'}>
    {eyebrow && (
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 sm:text-sm">
        {eyebrow}
      </p>
    )}

    <h2 className={`text-3xl font-black tracking-tight ${color} sm:text-4xl lg:text-5xl`}>
      {title}
    </h2>

    {description && (
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;