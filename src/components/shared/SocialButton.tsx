import type { ComponentType } from 'react';

type SocialButtonProps = {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  color?: string;
};

const SocialButton = ({ href, label, Icon, color = 'text-gray-200' }: SocialButtonProps) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold transition-all hover:bg-amber-500 hover:border-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
  >
    <Icon className={`h-5 w-5 ${color}`} />
    <span className={color}>{label}</span>
  </a>
);

export default SocialButton;
