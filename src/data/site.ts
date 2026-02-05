export const site = {
  name: "Brendan Cleaves",
  email: "brendancleaves@me.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "IMDb", href: "https://www.imdb.com/" },
    { label: "Twitter", href: "https://twitter.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

export const filmCategories = [
  { label: "Fiction", slug: "fiction" },
  { label: "Commercial", slug: "commercial" },
  { label: "Music Videos", slug: "music-videos" },
  { label: "In Development", slug: "in-development" },
];

type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  logline: string;
  runtime?: string;
  role?: string;
  accent: string;
  embedSrc?: string;
};

export const projects: Project[] = [
  {
    title: "The Tunnel",
    slug: "the-tunnel",
    category: "fiction",
    year: "2024",
    logline: "A grieving drifter confronts the story he helped bury.",
    runtime: "18 min",
    role: "Writer / Director",
    accent: "#a21d1d",
  },
  {
    title: "Angela",
    slug: "angela",
    category: "fiction",
    year: "2023",
    logline: "A deadpan love story told through a surreal interview.",
    runtime: "11 min",
    role: "Director",
    accent: "#3f7bf5",
  },
  {
    title: "The Lawnmower Men",
    slug: "the-lawnmower-men",
    category: "fiction",
    year: "2022",
    logline: "Two brothers chase a rumor across a dying seaside town.",
    runtime: "14 min",
    role: "Writer / Director",
    accent: "#223f35",
    embedSrc: "https://framerate.com/embed/0Yy8ojCx",
  },
  {
    title: "Specsavers - Nessie",
    slug: "specsavers-nessie",
    category: "commercial",
    year: "2024",
    logline: "A search for a legend becomes a playful brand film.",
    runtime: "30 sec",
    role: "Director",
    accent: "#2f6b4d",
  },
  {
    title: "Hyundai - Hunted",
    slug: "hyundai-hunted",
    category: "commercial",
    year: "2023",
    logline: "An adrenaline-forward spot for the newest model.",
    runtime: "60 sec",
    role: "Director",
    accent: "#8a6a2a",
  },
  {
    title: "Hostage",
    slug: "hostage",
    category: "commercial",
    year: "2022",
    logline: "A tense genre vignette that flips expectations.",
    runtime: "45 sec",
    role: "Director",
    accent: "#8b1a1a",
  },
  {
    title: "Coldplay - Echo",
    slug: "coldplay-echo",
    category: "music-videos",
    year: "2022",
    logline: "A dreamlike short built around light and motion.",
    runtime: "3:40",
    role: "Director",
    accent: "#cf5a3a",
  },
  {
    title: "Kids - Turn",
    slug: "kids-turn",
    category: "music-videos",
    year: "2021",
    logline: "A kinetic performance piece set in one take.",
    runtime: "4:05",
    role: "Director",
    accent: "#2d3d8e",
  },
  {
    title: "Target Zero",
    slug: "target-zero",
    category: "in-development",
    year: "2026",
    logline: "A crime thriller built around a disappearing city.",
    role: "Writer / Director",
    accent: "#c63131",
  },
  {
    title: "The Dead Collectors",
    slug: "the-dead-collectors",
    category: "in-development",
    year: "2026",
    logline: "A surreal noir that follows a pair of reluctant fixers.",
    role: "Writer / Director",
    accent: "#5a7d2c",
  },
];

export const photography = [
  { title: "Portraits", accent: "#d7b08a" },
  { title: "Backstage", accent: "#6c7a9c" },
  { title: "Studio", accent: "#c53b3b" },
  { title: "Street", accent: "#3a6a5f" },
  { title: "Editorial", accent: "#c8a63f" },
  { title: "Movement", accent: "#8f6aa8" },
  { title: "Archive", accent: "#2f2f2f" },
  { title: "Series", accent: "#5b5b5b" },
  { title: "Monochrome", accent: "#b7b7b7" },
  { title: "Color Story", accent: "#2b6fae" },
  { title: "Portrait Study", accent: "#7a3b3b" },
  { title: "Film Tests", accent: "#3f4f2e" },
];

export const awards = [
  {
    title: "Angela",
    list: [
      "Locarno Shorts 2025 (BAFTA Recognised)",
      "Unrestricted View 2025 (BIFA Qualifying)",
      "Landshut Film Festival 2025",
      "LA Comedy Festival 2025",
      "Palm Springs International Shorts 2025 (Academy Qualifying)",
    ],
  },
  {
    title: "The Tunnel",
    list: [
      "Headline Film Festival 2024 - Melies d'Argent Nomination",
      "Grossmann Film Festival 2024 - Melies d'Argent Nomination",
      "Flickers Rhode Island 2024 (BAFTA Recognised & Academy Qualifying)",
      "Sinister Film Festival 2025 - Winner Best Director",
      "Sacramento Horror Festival 2025",
    ],
  },
];
