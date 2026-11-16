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
