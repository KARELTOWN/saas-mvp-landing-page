type IconProps = { className?: string };

export function VueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 3h4l6 11 6-11h4L12 21 2 3z" fill="currentColor" />
    </svg>
  );
}

export function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 7v10M8.5 7l8 10M16.5 7v6" strokeLinecap="round" />
    </svg>
  );
}

export function LaravelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M3 12 12 3l9 9-9 9-9-9z" strokeLinejoin="round" />
      <path d="M12 3v18" />
    </svg>
  );
}

export function NodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden="true">
      <path d="M12 2 20.66 7v10L12 22 3.34 17V7L12 2z" strokeLinejoin="round" />
    </svg>
  );
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" stroke="none">
        TS
      </text>
    </svg>
  );
}
