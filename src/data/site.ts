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
  thumbnailSrc?: string;
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
    embedSrc: "https://framerate.com/embed/0WMt_6yQ",
    thumbnailSrc: "/thumbnails/the-tunnel.webp",
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
    embedSrc: "https://www.youtube.com/embed/FPGVFZvGYO8",
    thumbnailSrc: "/thumbnails/angela.webp",
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
    title: "Roger",
    slug: "roger",
    category: "fiction",
    year: "2018",
    logline: "A sharp-edged short built around a single night spiraling out.",
    runtime: "TBD",
    role: "Writer / Director",
    accent: "#6e1c1c",
    embedSrc:
      "https://player.vimeo.com/video/253218979?h=af46b76bda&title=0&byline=0&portrait=0",
    thumbnailSrc: "/thumbnails/roger.webp",
  },
  {
    title: "For Living Next Door to Alex",
    slug: "for-living-next-door-to-alex",
    category: "fiction",
    year: "2021",
    logline: "A dark comedy built around one neighborhood rivalry gone sideways.",
    runtime: "TBD",
    role: "Director",
    accent: "#5f5b52",
    embedSrc: "https://framerate.com/embed/yWdAT2s0",
    thumbnailSrc: "/thumbnails/for-living-next-door-to-alex.webp",
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
    embedSrc: "https://framerate.com/embed/GqD_-gf8",
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
    embedSrc: "https://framerate.com/embed/QWEuTtcq",
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
    embedSrc: "https://player.vimeo.com/video/789042874?h=9b26df46cb&title=0&byline=0&portrait=0",
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
    embedSrc:
      "https://player.vimeo.com/video/357164929?h=994b7763e6&color=39ff14&title=0&byline=0&portrait=0",
    thumbnailSrc: "/thumbnails/coldplay.webp",
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
    embedSrc: "https://player.vimeo.com/video/174821376?h=eff6463098&title=0&byline=0&portrait=0",
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
    title: "Sam and Doug",
    slug: "sam-and-doug",
    category: "fiction",
    year: "TBD",
    logline: "A sharp, character-led short built around an unlikely duo.",
    runtime: "TBD",
    role: "Director",
    accent: "#4b4b4b",
    embedSrc: "https://www.youtube.com/embed/khj7UvP3d2Q",
    thumbnailSrc: "/thumbnails/sam-and-doug.webp",
  },
  {
    title: "The Wrong Swipe",
    slug: "the-wrong-swipe",
    category: "fiction",
    year: "TBD",
    logline: "A darkly comic short where one decision derails everything.",
    runtime: "TBD",
    role: "Director",
    accent: "#4e5666",
    embedSrc: "https://framerate.com/embed/GqJ6WK5T",
    thumbnailSrc: "/thumbnails/the-wrong-swipe.webp",
  },
  {
    title: "Knock Knock Knock",
    slug: "knock-knock-knock",
    category: "fiction",
    year: "TBD",
    logline: "A twisted comedy where each knock makes the night worse.",
    runtime: "TBD",
    role: "Director",
    accent: "#7a4d39",
    embedSrc: "https://framerate.com/embed/MDtycjVa",
    thumbnailSrc: "/thumbnails/the-wrong-swipe.webp",
  },
  {
    title: "The Dead Collectors",
    slug: "the-dead-collectors",
    category: "in-development",
    year: "2026",
    logline: "A surreal noir that follows a pair of reluctant fixers.",
    role: "Writer / Director",
    accent: "#5a7d2c",
    embedSrc: "https://www.youtube.com/embed/RcTRGdePWGI?start=40",
    thumbnailSrc: "/thumbnails/the-dead-collectors.webp",
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
