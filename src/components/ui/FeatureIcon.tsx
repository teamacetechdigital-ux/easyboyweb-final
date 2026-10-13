import styles from "./FeatureIcon.module.css";

const icons = {
  leads: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M19 8v6m-3-3h6" /></>,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  growth: <><path d="M3 19V5m0 14h18M6 15l5-5 4 3 6-7m-5 0h5v5" /></>,
  trophy: <><path d="M7 3h10v5a5 5 0 0 1-10 0V3ZM7 5H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4m-5 2v5m-4 3h8m-6-3h4v3" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5" /></>,
  focus: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  savings: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l-4 3m7-7h2m-1-1v2" /></>,
  speed: <><path d="M4 18a9 9 0 1 1 16 0H4Zm8-5 5-5M5 12h2m10 0h2M12 5v2" /><circle cx="12" cy="14" r="1" /></>,
  mobile: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 5h4m-2 14h.01" /></>,
  support: <><path d="M4 14v-2a8 8 0 0 1 16 0v2m0 4v1a3 3 0 0 1-3 3h-3" /><rect x="2" y="11" width="4" height="7" rx="2" /><rect x="18" y="11" width="4" height="7" rx="2" /></>,
  search: <><circle cx="10" cy="10" r="7" /><path d="m15 15 6 6M6 11l3-3 2 2 3-4" /></>,
  devices: <><rect x="2" y="4" width="15" height="11" rx="1" /><path d="M2 18h11m-4-3v3" /><rect x="16" y="10" width="6" height="11" rx="1" /><path d="M19 18h.01" /></>,
  automation: <><rect x="8" y="8" width="8" height="8" rx="2" /><path d="M12 3v5m0 8v5M3 12h5m8 0h5M5 5l4 4m6 6 4 4M19 5l-4 4M9 15l-4 4" /></>,
  link: <><path d="m10 14 4-4m-6 6-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 2 2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 1)" /></>,
  code: <><path d="m8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 20" /></>,
  location: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  video: <><rect x="2" y="5" width="15" height="14" rx="2" /><path d="m17 9 5-3v12l-5-3M7 9l5 3-5 3V9Z" /></>,
  audit: <><rect x="3" y="2" width="14" height="20" rx="2" /><path d="M7 6h6m-6 4h4m-4 4h2" /><circle cx="16" cy="15" r="4" /><path d="m19 18 3 3" /></>,
  analytics: <><path d="M3 3v18h18M7 17v-5m5 5V8m5 9V5" /></>,
  report: <><path d="M14 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-7-7Zm0 0v7h7M7 17v-4m5 4v-6m5 6v-3" /></>,
  payments: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20M6 15h4" /></>,
  dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  cloud: <><path d="M7 19H6a4 4 0 0 1-1-8 7 7 0 0 1 13-3 5 5 0 0 1 0 10h-1M12 13v9m-3-6 3-3 3 3" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-9 13h6M12 2V1" /></>,
  upload: <><path d="M3 14v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6M12 16V3m-5 5 5-5 5 5" /></>,
  content: <><path d="M12 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8M8 16l1-4L19 2l3 3-10 10-4 1Zm9-12 3 3" /></>,
  refresh: <><path d="M20 7a9 9 0 0 0-15-2L2 8m0-6v6h6m-4 9a9 9 0 0 0 15 2l3-3m0 6v-6h-6" /></>,
  trust: <><path d="M12 21 3 12a5 5 0 0 1 7-7l2 2 2-2a5 5 0 0 1 7 7l-9 9Z" /><path d="m8 12 3 3 5-6" /></>,
  uptime: <><circle cx="12" cy="12" r="9" /><path d="m7 12 3 3 7-7" /></>,
  phone: <><path d="m6 3 4 4-2 3a14 14 0 0 0 6 6l3-2 4 4-2 3C10 22 2 14 3 5l3-2Z" /></>,
  qualification: <><circle cx="8" cy="7" r="3" /><path d="M2 21v-3a6 6 0 0 1 12 0v3m2-11 2 2 4-5" /></>,
  message: <><path d="M3 3h18v14H8l-5 4V3Zm4 5h10M7 12h7" /></>,
  languages: <><path d="M2 5h12M8 2v3m3 0c0 6-4 10-8 12m1-9c1 4 4 7 8 9m2 5 4-10 4 10m-6-4h4" /></>,
  settings: <><path d="M4 3v7m0 4v7M12 3v11m0 4v3M20 3v2m0 4v12" /><circle cx="4" cy="12" r="2" /><circle cx="12" cy="16" r="2" /><circle cx="20" cy="7" r="2" /></>,
  knowledge: <><path d="M12 5C9 2 5 2 2 3v17c4-1 7-1 10 1 3-2 6-2 10-1V3c-3-1-7-1-10 2Zm0 0v16" /></>,
  voice: <><rect x="9" y="2" width="6" height="13" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2m-7 9v3m-4 0h8" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M7 2v4m10-4v4M3 9h18m-14 7 3 3 7-6" /></>,
  connect: <><rect x="2" y="8" width="6" height="8" rx="1" /><rect x="16" y="8" width="6" height="8" rx="1" /><path d="M8 12h8m-3-3 3 3-3 3" /></>,
  convert: <><path d="M3 4h18l-7 9v6l-4 3v-9L3 4Z" /></>,
};

export type FeatureIconName = keyof typeof icons;

export default function FeatureIcon({ name }: { name: FeatureIconName }) {
  return (
    <svg
      className={`feature-icon ${styles.icon}`}
      data-feature-icon={name}
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}
