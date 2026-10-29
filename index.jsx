import wordmark from './graceissufficient.webp';

// "Digital partner: [graceissufficient.net]" credit for footers.
// Inline styles so it works in any project, with or without Tailwind.
export default function PartnerBadge({ label = 'Digital partner:', className, style }) {
  return (
    <span
      lang="en"
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', ...style }}
    >
      {label}
      <a
        href="https://graceissufficient.net"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-flex', background: '#fff', borderRadius: '0.375rem', padding: '0.375rem 0.5rem' }}
      >
        <img src={wordmark} alt="graceissufficient.net" width="420" height="56" style={{ height: '14px', width: 'auto' }} />
      </a>
    </span>
  );
}
