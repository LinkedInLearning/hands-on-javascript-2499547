const PATHS = {
  bean: (
    <>
      <g transform="rotate(35 12 12)">
        <ellipse cx="12" cy="12" rx="6" ry="9" />
        <path d="M12 3.2c-2 3 2 5.8 0 8.8s2 5.8 0 8.8" />
      </g>
    </>
  ),
  robot: (
    <>
      <path d="M4 20h8" />
      <path d="M8 20v-4l5-6" />
      <circle cx="13" cy="10" r="1.6" />
      <path d="M14.2 9l4.3-3.2" />
      <path d="M18.5 5.8l1.5 2.2M18.5 5.8l2.2-1" />
      <circle cx="8" cy="16" r="1.4" />
    </>
  ),
  touch: (
    <>
      <rect x="5" y="3" width="11" height="15" rx="2" />
      <path d="M12 21.5l-2.2-3.4a1.2 1.2 0 0 1 2-1.3l.7.9V12a1.2 1.2 0 0 1 2.4 0v3l2.6.5a1.8 1.8 0 0 1 1.4 2l-.5 4" />
    </>
  ),
  contactless: (
    <>
      <path d="M7 8.5a5 5 0 0 1 0 7" />
      <path d="M10.5 6a9 9 0 0 1 0 12" />
      <path d="M14 3.5a13 13 0 0 1 0 17" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M10.2 12l1.3 1.3 2.5-2.6" />
    </>
  ),
  box: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  cup: (
    <>
      <path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
      <path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8.5 3.5c-.8 1 .8 2 0 3M12 3.5c-.8 1 .8 2 0 3" />
    </>
  ),
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8" />,
  person: (
    <>
      <circle cx="12" cy="7" r="3.6" />
      <path d="M4.5 21c0-4.6 3.3-7.3 7.5-7.3s7.5 2.7 7.5 7.3" />
      <path d="M10.4 13.9 12 17l1.6-3.1M12 17v4" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="6.5" r="2.6" />
      <circle cx="4.8" cy="10" r="2" />
      <circle cx="19.2" cy="10" r="2" />
      <path d="M7.6 19.5c0-2.8 2-4.9 4.4-4.9s4.4 2.1 4.4 4.9M1.8 19.5c0-2.2 1.3-3.8 3-3.8 1 0 1.8.4 2.4 1.1M22.2 19.5c0-2.2-1.3-3.8-3-3.8-1 0-1.8.4-2.4 1.1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.23 2.69.23v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      stroke="none"
      d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.25 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z"
    />
  ),
  play: <path d="M9 7l9 5-9 5z" fill="currentColor" stroke="none" />,
  arrowLeft: <path d="M15 5l-7 7 7 7" />,
  arrowRight: <path d="M9 5l7 7-7 7" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 8h16M4 16h16" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  phone: <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
};

export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.4 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
