export const site = {
  name: "Brendan Cleaves",
  email: "brendancleaves@me.com",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/brendancleaves" },
    { label: "IMDb", href: "https://www.imdb.com/name/nm1309633/?ref_=tt_ov_dr" },
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
  description: string;
  runtime?: string;
  role?: string;
  accent: string;
  embedSrc?: string;
  thumbnailSrc?: string;
};

export const projects: Project[] = [
  {
    title: "Crack Hack",
    slug: "crack-hack",
    category: "fiction",
    year: "2026",
    logline: "A new genre project currently in post-production.",
    description:
      "A new fiction project currently in production. Trailer, artwork, and full release details will be added soon.",
    role: "Writer / Director",
    accent: "#7c1212",
    embedSrc: "https://framerate.com/embed/35xoNSF6",
    thumbnailSrc: "/thumbnails/crack-hack.jpg",
  },
  {
    title: "The Tunnel",
    slug: "the-tunnel",
    category: "fiction",
    year: "2024",
    logline: "A grieving drifter confronts the story he helped bury.",
    description:
      "A psychological horror short about grief, guilt, and the stories we refuse to face. The film blends grounded performances with escalating dread and surreal visual turns.",
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
    year: "2025",
    logline: "A deadpan love story told through a surreal interview.",
    description:
      "A dark comedy romance told through an interview format that keeps folding in on itself. The tone balances awkward humor with emotional vulnerability.",
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
    year: "2021",
    logline: "Two brothers chase a rumor across a dying seaside town.",
    description:
      "A character-led short following two brothers across a fading landscape in search of something half-mythic, half-desperate. The film leans into atmosphere and understated tension.",
    runtime: "14 min",
    role: "Writer / Director",
    accent: "#223f35",
    embedSrc: "https://framerate.com/embed/0Yy8ojCx",
    thumbnailSrc: "/thumbnails/the-lawnmower-men.jpg",
  },
  {
    title: "Roger",
    slug: "roger",
    category: "fiction",
    year: "2016",
    logline: "A sharp-edged short built around a single night spiraling out.",
    description:
      "Originally written as proof of concept for a feature, ROGER pushes dark comedy and genre tension into a single escalating night. The short stars John Bradley and Seann Walsh.",
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
    year: "2020",
    logline: "A dark comedy built around one neighborhood rivalry gone sideways.",
    description:
      "A comedy short about social pressure, pride, and petty rivalry escalating into chaos. The style is dry, observational, and deliberately uncomfortable.",
    runtime: "TBD",
    role: "Director",
    accent: "#5f5b52",
    embedSrc: "https://framerate.com/embed/yWdAT2s0",
    thumbnailSrc: "/thumbnails/for-living-next-door-to-alex.jpg",
  },
  {
    title: "Specsavers - Nessie",
    slug: "specsavers-nessie",
    category: "commercial",
    year: "2024",
    logline: "A search for a legend becomes a playful brand film.",
    description:
      "A commercial spot built around a playful search narrative, blending cinematic framing with quick comedic beats while keeping the brand front and center.",
    runtime: "30 sec",
    role: "Director",
    accent: "#2f6b4d",
    embedSrc: "https://framerate.com/embed/GqD_-gf8",
    thumbnailSrc: "/thumbnails/specsavers-nessie.webp",
  },
  {
    title: "Hyundai - Hunted",
    slug: "hyundai-hunted",
    category: "commercial",
    year: "2023",
    logline: "An adrenaline-forward spot for the newest model.",
    description:
      "A performance-led automotive commercial designed for pace and impact, pairing clean action coverage with precise product-focused storytelling.",
    runtime: "60 sec",
    role: "Director",
    accent: "#8a6a2a",
    embedSrc: "https://framerate.com/embed/QWEuTtcq",
    thumbnailSrc: "/thumbnails/project-placeholder.svg",
  },
  {
    title: "Hostage",
    slug: "hostage",
    category: "commercial",
    year: "2022",
    logline: "A tense genre vignette that flips expectations.",
    description:
      "A short-form brand film that opens in thriller territory and pivots into an unexpected reveal. Shot for high tension, fast clarity, and a memorable payoff.",
    runtime: "45 sec",
    role: "Director",
    accent: "#8b1a1a",
    embedSrc: "https://player.vimeo.com/video/789042874?h=9b26df46cb&title=0&byline=0&portrait=0",
    thumbnailSrc: "/thumbnails/project-placeholder.svg",
  },
  {
    title: "Coldplay",
    slug: "coldplay-echo",
    category: "fiction",
    year: "2019",
    logline: "A dreamlike short built around light and motion.",
    description:
      "A stylized short that prioritizes mood, rhythm, and movement. The piece explores dream logic through color, texture, and expressive camera language.",
    runtime: "3:40",
    role: "Director",
    accent: "#cf5a3a",
    embedSrc:
      "https://player.vimeo.com/video/357164929?h=994b7763e6&color=39ff14&title=0&byline=0&portrait=0",
    thumbnailSrc: "/thumbnails/coldplay.webp",
  },
  {
    title: "Death Kool-Aid - Kids",
    slug: "kids-turn",
    category: "music-videos",
    year: "2021",
    logline: "A kinetic performance piece set in one take.",
    description:
      "A music video for Death Kool-Aid built around forward motion and raw performance energy. The visual approach stays tight and urgent to match the track.",
    runtime: "4:05",
    role: "Director",
    accent: "#2d3d8e",
    embedSrc: "https://player.vimeo.com/video/174821376?h=eff6463098&title=0&byline=0&portrait=0",
    thumbnailSrc: "/thumbnails/project-placeholder.svg",
  },
  {
    title: "Karaoke For Beginners - Clowns",
    slug: "karaoke-for-beginners-clowns",
    category: "music-videos",
    year: "2026",
    logline: "A new music video release with bold performance energy.",
    description:
      "A music video for Karaoke For Beginners, built around a strong central performance style and high-impact visual rhythm.",
    runtime: "TBD",
    role: "Director",
    accent: "#8a1f4f",
    embedSrc: "https://framerate.com/embed/xQx3zS-s",
    thumbnailSrc: "/thumbnails/project-placeholder.svg",
  },
  {
    title: "Target Zero",
    slug: "target-zero",
    category: "fiction",
    year: "2026",
    logline: "A crime thriller built around a disappearing city.",
    description:
      "A feature project in development. Target Zero is a crime-thriller concept focused on fractured identity, urban paranoia, and morally compromised characters.",
    role: "Writer / Director",
    accent: "#c63131",
    thumbnailSrc: "/thumbnails/target-zero.jpg",
  },
  {
    title: "Sam and Doug",
    slug: "sam-and-doug",
    category: "fiction",
    year: "TBD",
    logline: "A sharp, character-led short built around an unlikely duo.",
    description:
      "A genre-adjacent short centered on two mismatched leads forced into a high-pressure situation. The film balances tension with grounded comedic beats.",
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
    year: "2019",
    logline: "A darkly comic short where one decision derails everything.",
    description:
      "A short dark comedy about digital-age anxiety and impulsive choices. The film escalates a familiar everyday action into increasingly surreal consequences.",
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
    year: "2023",
    logline: "A twisted comedy where each knock makes the night worse.",
    description:
      "A contained horror-comedy with a simple setup and relentless escalation. Each interruption pushes the protagonist deeper into paranoia and absurdity.",
    runtime: "TBD",
    role: "Director",
    accent: "#7a4d39",
    embedSrc: "https://framerate.com/embed/MDtycjVa",
    thumbnailSrc: "/thumbnails/knock-knock-knock.webp",
  },
  {
    title: "The Dead Collectors",
    slug: "the-dead-collectors",
    category: "fiction",
    year: "2021",
    logline: "A surreal noir that follows a pair of reluctant fixers.",
    description:
      "A genre project mixing noir atmosphere, horror-comedy, and character-driven conflict. The story follows two reluctant fixers through an increasingly bizarre underworld.",
    role: "Writer / Director",
    accent: "#5a7d2c",
    embedSrc: "https://www.youtube.com/embed/RcTRGdePWGI?start=40",
    thumbnailSrc: "/thumbnails/the-dead-collectors.webp",
  },
];

export const aboutBio = {
  headline: "A filmmaker committed to originality and unfiltered storytelling.",
  paragraphs: [
    "Starting out by capturing the raw energy of Camden's local bands through my lens, I made a bold leap into promo directing, taking on roles as director, writer, and composer for my projects. My early efforts led to a UK Music Video Award nomination for my band's music video, marking the start of a career driven by a pursuit of originality and unfiltered storytelling.",
    "Since then, I've directed music videos and commercials for both major brands and independent artists, always focused on bringing authentic, memorable stories to life. I wrote and directed my first genre short, ROGER, as a proof of concept for a feature, starring John Bradley (Game of Thrones) and comedian Seann Walsh. To date, I've directed nine additional shorts and a documentary, with screenings at over one hundred prestigious festivals worldwide, including many BAFTA and Academy-qualifying events, earning multiple Melies d'Argent nominations along the way.",
    "In 2024, two of my spec scripts were optioned by US production companies, Rocket Soul and About It Films, with myself attached as director for both.",
    "I strive to create stories that transport audiences beyond the expected, exploring characters and themes in ways that challenge conventions. I'm passionate about crafting films that dive into the surreal or complex sides of human nature, balancing entertainment with thought-provoking content. For me, filmmaking is about pushing boundaries, taking risks, and carving new paths - a drive that I share with those who seek fresh perspectives in storytelling.",
  ],
  affiliations: [
    "BAFTA member",
    "Directors UK member",
    "Part of the neurodiverse community",
    "Part of the Deaf community",
  ],
};

type AwardSection = {
  title: string;
  cycle?: string;
  list: string[];
};

export const awards: AwardSection[] = [
  {
    title: "Angela",
    cycle: "Currently @ Festivals 2025-2026",
    list: [
      "LOCO 2025 (BAFTA Recognised)",
      "Unrestrictive View 2025 (BIFA Qualifying)",
      "Landshut Film Festival 2025",
      "LA Comedy Festival 2025",
      "In The Palace International Shorts Festival 2025 (Academy Qualifying)",
      "Houston Comedy Festival 2025",
      "Filmfest Oberursel 2025",
    ],
  },
  {
    title: "The Tunnel",
    cycle: "Currently @ Festivals 2024-2025",
    list: [
      "Hardline Film Festival 2024 - Melies d'Argent Nomination",
      "Grossmann Film Festival 2024 - Melies d'Argent Nomination",
      "Flickers Rhode Island Film Festival 2024 (BAFTA Recognised & Academy Qualifying)",
      "Sinister Film Festival - Winner - Best Director",
      "Sacramento Horror Festival 2025",
      "Landshutt Film Festival 2025",
      "Terror In The Bay Film Festival 2024",
      "Birmingham Horror Film Festival 2024 - Winner - Best Short Film",
      "The Vancouver Horror Show Film Festival 2024",
      "Ravenheart Film Festival 2024",
      "Montreal Requiem Fear Fest 2024",
      "The Dead And SudBuried Horrorthon 2024",
      "Cinema Scares 2024",
      "Celudroid 2024",
    ],
  },
  {
    title: "Knock, Knock, (Knock)",
    cycle: "Currently @ Festivals 2024",
    list: [
      "Short Com (BAFTA Recognised & BIFA Qualifying)",
      "Romford Horror Festival 2024 - Winner - Best Horror Comedy",
      "Frightfest 2023",
      "Dead Of Night Film Festival 2023",
      "FilmQuest 2023",
      "Black Sunday Film Festival 2024",
      "Bonebat - Comedy of Horrors Film Fest 2024",
      "Indie Horror Society Showcase 2024",
      "Ravenheart Film Festival 2024",
    ],
  },
  {
    title: "Sam and Doug",
    list: [
      "Grimfest 2023",
      "Grossmann Film Festival 2023 - Melies d'Argent Nomination",
      "Flickers Rhode Island Film Festival 2022 (BAFTA Recognised & Academy Qualifying)",
      "Trieste Science+Fiction Film Festival 2022 - Melies d'Argent Nomination",
      "Newport Beach Film Festival 2022",
      "FilmQuest 2022",
    ],
  },
  {
    title: "The Dead Collectors",
    list: [
      "Brussels International Fantastic Film Festival - Melies d'Argent Nomination",
      "Flickers Rhode Island Film Festival 2022 (BAFTA Recognised & Academy Qualifying) - Winner - Best Horror Comedy",
      "Trieste Science+Fiction Film Festival 2021 - Melies d'Argent Nomination",
      "Abertoir Horror Festival 2021 - Melies d'Argent Nomination",
      "Frightfest 2021",
      "Screamfest LA 2021 (Best Horror/Comedy Nomination)",
      "Maniatic Film Festival 2021 (Winner - Best Film | Winner - Best Director)",
      "Sydney Underground Film Festival 2021",
      "Exit 6 Film Festival 2021",
      "NOLA Horror Film Fest 2021",
      "FilmQuest 2021",
      "Edmonton Short Film Festival 2021",
      "Boston Science Fiction Film Festival & Marathon 2022",
      "Poppy Jasper International Film Festival 2022",
      "British Shorts In Berlin Festival 2022",
      "Crystal Palace International Film Festival 2022",
      "Mecal Pro - Barcelona International Short and Animation Festival 2022",
      "Landshut Film Festival 2022",
      "Calgary Underground Film Festival 2022",
      "Bonebat - Comedy of Horrors Film Fest 2022",
      "Tacoma Film Festival 2022",
      "Hell's Half Mile Film & Music Festival 2022",
    ],
  },
  {
    title: "Living Next Door to Alex",
    list: [
      "20th Kansas International Film Festival 2021",
      "Austin Comedy Film Festival 2020 (Best International Film Nomination)",
      "Laugh or Die Comedy Festival 2021",
    ],
  },
  {
    title: "The Lawnmower Men",
    list: [
      "Film Shortage - Daily Pick",
      "Edge Documentary Festival 2021 (NZ) (Academy Qualifying)",
      "Luneburg Doc Fest 2020 (Canadian Screen Awards Qualifying)",
      "International Motor Film Awards 2020 - Winner - Best Short Documentary",
      "Chagrin Documentary Film Festival 2020",
      "LIFT-OFF Documentary Showcase 2020",
      "Winchester Film Festival 2020",
      "Sedona Film Festival 2022",
    ],
  },
  {
    title: "The Wrong Swipe",
    list: [
      "LOCO 2020/21 (BAFTA Recognised)",
      "Portland Comedy Film Festival 2019 (Best International Film Nomination)",
      "Austin Comedy Film Festival 2019 (Best International Director Nomination)",
      "Toronto Comedy Film Festival 2019",
      "Canadian International Comedy Film Festival 2020",
      "New York Comedy Festival 2020 - Winner - Best Actress (Abiola Ogunbiyi)",
    ],
  },
  {
    title: "Coldplay",
    list: [
      "Portland Comedy Film Festival 2020 (Best Dark Comedy Micro Film Nomination)",
      "New York Comedy Festival 2020",
      "Chippo Film Festival 2020",
    ],
  },
  {
    title: "Roger - Feature Screenplay",
    list: [
      "Hollywood Blacklist - Top Comedy Scripts (www.blcklst.com) (8/10)",
      "Austin Film Festival & Screenplay Conference - Semi-finalist 2018",
      "Script Pipeline - Semi-finalist 2018",
      "WeScreenplay - Semi-finalist 2018",
      "Scriptapalooza - Semi-finalist 2018",
      "Austin Short Film Festival Official Selection 2018",
      "Bluecat Screenplay Competition - Semi-finalist 2018",
      "Creative World Screenplay Awards - Quarter-finalist 2018",
    ],
  },
  {
    title: "The Target - Short Screenplay",
    list: ["Bluecat Screenplay Competition - Quarter-finalist 2018"],
  },
  {
    title: "Roger - Short Film",
    list: [
      "St Louis International Film Festival (OSCAR Qualifying)",
      "Foyle Film Festival (OSCAR Qualifying) (BAFTA & BIFA Recognised)",
      "Show Me Your Shorts IFF (OSCAR Qualifying)",
      "Aesthetica SFF (BAFTA Recognised)",
      "London Short Film Festival (BAFTA Recognised)",
      "Southhampton International Film Festival - Winner - Best Comedy",
      "Ft Lauderdale International Film Festival",
      "Sunderland Shorts International Film Festival",
      "Sacramento International Film Festival",
      "Minneapolis St. Paul's International Film Festival",
      "Laugh Or Die Comedy Festival - Best Writer Nomination",
      "Southside Film Festival",
      "Portland Comedy Film Festival - Best Short Nomination",
      "Brooklyn International Film Festival",
      "Fort Worth Indie Showcase - Best Comedy Nomination",
      "Skyline Indie Film Festival",
      "Kansas International Film Festival",
      "Tallgrass International Film Festival",
      "Chicago Comedy Film Festival",
      "Hamilton Film Festival",
      "Fort McMurray International Film Festival",
      "Purbeck Film Festival",
      "St Cloud Film Festival",
      "Winchester Short Film Festival",
      "Tampa Underground Film Festival (Best Comedy & Best Lead Nomination)",
      "British Shorts In Berlin Festival",
      "Independant Days Film Festival (Winner - Best Lead Actor)",
      "Film Shortage - Daily Pick",
    ],
  },
  {
    title: "Building Bricks - Screenplay",
    list: ["London Independent Film Festival - Winner 2016 - Best UK Screenplay"],
  },
  {
    title: "Sam and Doug - Screenplay",
    list: [
      "Bluecat Screenplay Competition - Quarter-finalist 2016",
      "Official Selection - Independent Horror Movie Awards 2016",
      "Short Stop International Film Festival 2016",
      "International Sci-Fi and Horror Festival 2016",
      "Semi-finalist - Table Read My Screenplay 2016",
      "13 Horror Festival Official Selection 2016",
      "\"Best of the Post-room\" by BFI's Net.Work",
    ],
  },
  {
    title: "Hewden \"Dumpers For Goal Post's\" Commercial",
    list: ["Brand Republic 2015 Nomination", "Drum Marketing Award - Winner"],
  },
  {
    title: "\"The Icing On The Cake\" Script",
    list: ["Impact 50 Rough Diamond - Finalist 2016"],
  },
  {
    title: "Death Koolaid \"The Second Rule\"",
    list: ["UKMVA 2014 Nomination"],
  },
];
