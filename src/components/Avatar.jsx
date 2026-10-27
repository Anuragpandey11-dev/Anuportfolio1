// Original illustrated avatar (not a photograph).
export default function Avatar() {
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="Illustrated developer avatar" className="avatar">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2f6bff"/><stop offset="1" stopColor="#22d3ee"/></linearGradient></defs>
      <circle cx="160" cy="160" r="150" fill="url(#g)" opacity=".15"/>
      <circle cx="160" cy="160" r="150" fill="none" stroke="url(#g)" strokeWidth="2"/>
      <path d="M60 290c8-60 50-85 100-85s92 25 100 85z" fill="#1b2a5c"/>
      <rect x="140" y="170" width="40" height="40" rx="14" fill="#e0b48f"/>
      <ellipse cx="160" cy="130" rx="46" ry="52" fill="#e8bf9b"/>
      <path d="M112 120c0-40 30-58 52-58 28 0 48 20 44 58-12-18-30-26-52-24-20 2-34 10-44 24z" fill="#10172e"/>
      <rect x="122" y="118" width="32" height="24" rx="8" fill="none" stroke="#22d3ee" strokeWidth="3"/>
      <rect x="166" y="118" width="32" height="24" rx="8" fill="none" stroke="#22d3ee" strokeWidth="3"/>
      <path d="M154 130h12" stroke="#22d3ee" strokeWidth="3"/>
      <path d="M146 158q14 10 28 0" fill="none" stroke="#9a5b3c" strokeWidth="3" strokeLinecap="round"/>
      <text x="160" y="262" textAnchor="middle" fill="#22d3ee" fontFamily="monospace" fontSize="26">&lt;/&gt;</text>
    </svg>
  )
}
