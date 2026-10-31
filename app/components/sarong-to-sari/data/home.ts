import type { RichText } from "../types";

/**
 * Content for the Sarong to Sari home page, copied from the Figma file.
 *
 * Every `src`/`image` left undefined is a photo still waiting to be supplied.
 * The page draws a neutral block of the right size in its place, so filling one
 * in is a one-line change here and nothing else moves.
 *
 * The video posters are stills taken from the videos themselves.
 */

export const S2S_ASSETS = "/images/sarong-to-sari";

/**
 * Pieces of the desktop page that the mobile design leaves out. Each one set to
 * `true` is hidden below `lg`; flip a flag to change what phones show.
 */
export const hiddenOnMobile = {
  wsrcLogo: false,
  voyagePortrait: false,
  galleriesIntro: false,
  carouselArrows: false,
};

export const heroIntro: RichText = [
  "An ",
  { text: "exhibition", tone: "strong" },
  " tracing how ",
  { text: "batik", tone: "strong" },
  " crossed the Bay of Bengal from the courts of ",
  { text: "Java", tone: "strong" },
  " to the studios of ",
  { text: "Santiniketan", tone: "strong" },
  ", carried by ",
  { text: "Rabindranath Tagore's 1927 voyage.", tone: "accent" },
];

export const heroVideo: { src?: string; mobileSrc?: string; poster?: string } =
  {
    src: `${S2S_ASSETS}/Web_banner.mp4`,
    mobileSrc: `${S2S_ASSETS}/landingMobileVideo.mp4`,
    poster: `${S2S_ASSETS}/hero-poster.jpg`,
  };

// "\n" marks where the mobile design breaks a line; on desktop the text runs on.
export const exhibitionVenues = [
  {
    dates: "Thursday, 21 January to\nWednesday, 31 March 2027",
    venue: "at Kolkata Centre for Creativity, Kolkata, India",
  },
  {
    dates: "Saturday, 24 January to Sunday, 4 April 2027",
    venue: "at Arthshila, Santiniketan, India",
  },
  {
    dates: "Monday, 25 January to Friday, 26 February 2027",
    venue: "at Nandan Museum, Visva-Bharati,\nSantiniketan, India",
  },
];

export type SnippetVideo = {
  title: string;
  src?: string;
  poster?: string;
};

export const snippetVideos: SnippetVideo[] = [
  {
    title: "Behind the scenes: Kolkata",
    src: `${S2S_ASSETS}/snippet-1.mp4`,
    poster: `${S2S_ASSETS}/snippet-1-poster.jpg`,
  },
  {
    title: "First thoughts with Darshan Shah",
    src: `${S2S_ASSETS}/snippet-3.mp4`,
    poster: `${S2S_ASSETS}/snippet-1-poster.jpg`,
  },
  {
    title: "First thoughts with Peter Lee and Oroon Das",
    src: `${S2S_ASSETS}/snippet-4.mp4`,
    poster: `${S2S_ASSETS}/snippet-3-poster.jpg`,
  },
  {
    title: "Behind the scenes: Santiniketan",
    src: `${S2S_ASSETS}/snippet-2.mp4`,
    poster: `${S2S_ASSETS}/snippet-4-poster.jpg`,
  },
  {
    title: "First thoughts with Peter Lee and Oroon Das",
    src: `${S2S_ASSETS}/snippet-5.mp4`,
    poster: `${S2S_ASSETS}/snippet-5-poster.jpg`,
  },
  {
    title: "Behind the scenes: Santiniketan",
    src: `${S2S_ASSETS}/snippet-6.mp4`,
    poster: `${S2S_ASSETS}/snippet-6-poster.jpg`,
  },
  {
    title: "First thoughts with Peter Lee and Oroon Das",
    src: `${S2S_ASSETS}/snippet-7.mp4`,
    poster: `${S2S_ASSETS}/snippet-3-poster.jpg`,
  },
];

export const voyageImage: { src?: string; alt: string } = {
  src: `${S2S_ASSETS}/tagore-portrait.jpg`,
  alt: "Batik portrait of Rabindranath Tagore",
};

export const voyageIntro: RichText = [
  "In ",
  { text: "1927", tone: "strong" },
  " Rabindranath Tagore travelled to the ",
  { text: "Indonesian islands of Java and Bali", tone: "strong" },
  ". On his return to Santiniketan, he ",
  { text: "introduced batik", tone: "strong" },
  ", Javanese court dances, and a cycle of agrarian festivals modelled on Balinese ritual. The ",
  { text: "year 2027 marks the centenary", tone: "strong" },
  " of that visit.",
];

export const voyageParagraphs: RichText[] = [
  [
    "For Tagore, art and culture were how people of different backgrounds could meet and understand one another. ",
    { text: "Visva Bharati", tone: "strong" },
    ' was founded on the idea of a place "',
    { text: "where the world makes a home in a single nest", tone: "accent" },
    '", and he was especially drawn to building a pan Asian alliance through living cultural traditions. In his lifetime, ',
    {
      text: "Santiniketan welcomed artists from Indonesia, Japan, Burma and China.",
      tone: "strong",
    },
  ],
  [
    { text: "Sarong to Sari", tone: "strong" },
    " takes the batik technique as its thread. Brought from ",
    { text: "Java to Santiniketan", tone: "strong" },
    " in 1927, batik soon grew into a distinct Bengali tradition and remains the clearest surviving expression of Tagore's vision of ",
    { text: "pan Asian exchange", tone: "strong" },
    ". The exhibition and its programmes bring batik practitioners from several countries together, and invite a wider audience to consider what Tagore's ideas still offer today.",
  ],
];

export const tagoreQuote = {
  text: "“I found myself at home in the heart of a rich atmosphere of beauty wafting from the land of my ancestors, and the two great cultures were linked in my own life.”",
  attribution: "— Rabindranath Tagore, 1927",
  background: `${S2S_ASSETS}/quote-bg.jpg` as string | undefined,
};

export const galleriesIntro =
  "The exhibition unfolds across four galleries from the Javanese world of batik, through Tagore's vision and its reinvention at Kala Bhavana, to the lived tradition of Santiniketan and its unfinished life today.";

export type Gallery = {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageAlt: string;
};

export const galleries: Gallery[] = [
  {
    title: "I — The Voyage and a Quest Dubbed Sacred",
    description:
      "In 1927, Tagore sailed to Java and Bali on a pilgrimage to Asia's ancient roots, as a nation-in-waiting searched for its cultural self.",
    image: `${S2S_ASSETS}/gallery-1.jpg`,
    imageAlt: "Map of Rabindranath Tagore's 1927 journey to Java and Bali",
  },
  {
    title: "II — The Encounter and the Reckoning",
    description:
      "In Java, Tagore finds a culture wholly its own yet resonant with India, where Batik layers technique, symbolism and identity in cloth.",
    image: `${S2S_ASSETS}/gallery-2.jpg`,
    imageAlt: "A Javanese court pavilion lit by chandeliers",
  },
  {
    title: "III — Transplanting the Source Material",
    subtitle: "Transformation & Collectivity",
    description:
      "At Santiniketan, wax-resist technique mingled with Alpona, Ajanta and rural Bengal, and a new vocabulary travelled from Kala Bhavana and Karu Sangha into homes and celebrations.",
    image: `${S2S_ASSETS}/gallery-3.jpg`,
    imageAlt: "A young student painting a batik design with a fine brush",
  },
  {
    title: "IV — The Pilgrim's Truth",
    subtitle: "Cultural Reconciliation and Humanism",
    description:
      "Nearly a century on, Batik is a shared inheritance, proof that traditions live through encounter, and a prompt to imagine a more connected future.",
    image: `${S2S_ASSETS}/gallery-4.jpg`,
    imageAlt: "Rabindranath Tagore seated at the centre of a large gathering",
  },
];

export type ProgrammeEvent = {
  titleItalic: string;
  /** The upright second line; left out when the title is a single italic word. */
  titleRegular?: string;
  lines: RichText[];
  link: { label: string; href: string };
  image?: string;
  imageAlt: string;
  /** The two flowers and hairlines beside the photo; the second event has their colours swapped. */
  decoration: string;
};

// The three slides of the "3 Events Carousel" component in Figma.
export const programmeEvents: ProgrammeEvent[] = [
  {
    titleItalic: "Exhibition Opening",
    titleRegular: "and Book Launch",
    lines: [
      ["Inauguration of Sarong to Sari exhibition and book,"],
      ["followed by a cultural presentation."],
      ["Kolkata Centre for Creativity (KCC), Kolkata"],
      [],
      [
        "Opening & Book Launch on ",
        { text: "Thursday, 21 January, 2027", tone: "strong" },
      ],
      [
        "Exhibition continues till ",
        { text: "31 March 2027", tone: "strong" },
        " in Kolkata",
      ],
    ],
    link: { label: "view events", href: "/sarong-to-sari/programme" },
    image: `${S2S_ASSETS}/exi-1.jpeg`,
    imageAlt: "Guests in conversation at the exhibition opening",
    decoration: "exi-decor-1.png",
  },
  {
    titleItalic: "Symposium",
    lines: [
      [
        "A two-day symposium brings together curators, artists and scholars from India and Indonesia to explore batik as a shared, living tradition from Tagore's Visva-Bharati to the workshops of Santiniketan today.",
      ],
      [],
      [{ text: "22 & 23 January 2027  •  Friday – Saturday", tone: "strong" }],
      [{ text: "10:00 AM – 6:00 PM", tone: "strong" }],
      ["Kolkata Centre for Creativity,"],
      ["777 Anandapur, E.M. Bypass, Kolkata 700107"],
    ],
    // The design names no destination for "register here" yet.
    link: { label: "register here", href: "/sarong-to-sari/programme" },
    image: `${S2S_ASSETS}/exi-3.jpg`,
    imageAlt: "A speaker addressing the symposium audience",
    decoration: "exi-decor-1.png",
  },
  {
    titleItalic: "Exhibition travels to",
    titleRegular: "Santiniketan",
    lines: [
      [
        {
          text: "Saturday, 24 January to Sunday, 4 April 2027",
          tone: "strong",
        },
      ],
      ["at Arthshila, Santiniketan, India."],
      [],
      [
        {
          text: "Monday, 25 January to Friday, 26 February 2027",
          tone: "strong",
        },
      ],
      ["at Nandan Museum, Visva-Bharati, Santiniketan, India."],
    ],
    link: { label: "view events", href: "/sarong-to-sari/programme" },
    image: `${S2S_ASSETS}/exi-2.jpg`,
    imageAlt: "A hand tracing a batik pattern on white cloth",
    decoration: "exi-decor-2.png",
  },
];

export type TeamMember = {
  nameItalic: string;
  nameRegular: string;
  role: string;
  bio: RichText;
  image?: string;
};

export const team: TeamMember[] = [
  {
    nameItalic: "Darshan ",
    nameRegular: "Shah",
    role: "Project Director",
    image: `${S2S_ASSETS}/team-1.jpg`,
    bio: [
      { text: "Founder Trustee", tone: "strong" },
      ", Weavers Studio Resource Centre, Kolkata, India",
    ],
  },
  {
    nameItalic: "Dr. Maria Wronska-",
    nameRegular: "Friend",
    role: "Co-curator",
    image: `${S2S_ASSETS}/team-2.jpg`,
    bio: [
      { text: "Adjunct Senior Research Fellow", tone: "strong" },
      ", James Cook University in Cairns, Australia",
    ],
  },
  {
    nameItalic: "Sushobhan ",
    nameRegular: "Adhikary",
    role: "Co-curator",
    image: `${S2S_ASSETS}/team-3.jpg`,
    bio: [
      { text: "Artist, Art historian", tone: "strong" },
      ", former curator of Kala Bhavana Museum, Santiniketan, India",
    ],
  },
  {
    nameItalic: "Peter ",
    nameRegular: "Lee",
    role: "Project Mentor",
    image: `${S2S_ASSETS}/team-4.jpg`,
    bio: [
      { text: "Independent Curator", tone: "strong" },
      ", founding curator of the NUS Baba House, Singapore",
    ],
  },
  {
    nameItalic: "Oroon ",
    nameRegular: "Das",
    role: "Exhibition designer",
    image: `${S2S_ASSETS}/voice-5.jpg`,
    bio: [
      {
        text: "Multidisciplinary artist, performer, scenographer, and designer, India",
        tone: "strong",
      },
    ],
  },
  {
    nameItalic: "Subham ",
    nameRegular: "China",
    role: "Co-curator",
    image: `${S2S_ASSETS}/team-6.jpg`,
    bio: [
      {
        text: "PhD at the Department of International Relations",
        tone: "strong",
      },
      ", Jadavpur University, Kolkata, India",
    ],
  },
  {
    nameItalic: "Kavita N. ",
    nameRegular: "Patel",
    role: "Assistant project director",
    image: `${S2S_ASSETS}/team-7.jpg`,
    bio: [
      { text: "Assistant Project Director", tone: "strong" },
      ", Weavers Studio Resource Centre, Kolkata, India ",
    ],
  },
];

export type PartnerLogo = {
  name: string;
  /** The logo's box on desktop. */
  width: number;
  height: number;
  /** Its (smaller) box in the mobile design. */
  mWidth: number;
  mHeight: number;
  src?: string;
};

export const partners = {
  presentedBy: {
    name: "Weavers Studio Resource Centre",
    src: `${S2S_ASSETS}/partner-wsrc.jpg`,
    width: 207,
    height: 114,
    mWidth: 143,
    mHeight: 79,
  },
  presentingPartner: {
    name: "Garden Vareli",
    src: `${S2S_ASSETS}/partner-garden-vareli.jpg`,
    width: 161,
    height: 85,
    mWidth: 102,
    mHeight: 54,
  },
  // Two rows: Emami on its own, the other three beneath it.
  supportedBy: [
    [
      {
        name: "Emami Foundation",
        src: `${S2S_ASSETS}/EmamiFoundation.jpg`,
        width: 282,
        height: 28,
        mWidth: 242,
        mHeight: 24,
      },
    ],
    [
      {
        name: "MPJ Jewellers",
        src: `${S2S_ASSETS}/mpj.jpg`,
        width: 83,
        height: 84,
        mWidth: 60,
        mHeight: 60,
      },
      {
        name: "Sar-La Education Trust",
        src: `${S2S_ASSETS}/sar-la.jpg`,
        width: 83,
        height: 84,
        mWidth: 60,
        mHeight: 60,
      },
      {
        name: "LGT Wealth India",
        src: `${S2S_ASSETS}/lgt.jpg`,
        width: 163,
        height: 84,
        mWidth: 117,
        mHeight: 60,
      },
    ],
  ],
  supportedByMobile: [
    [
      {
        name: "Emami Foundation",
        src: `${S2S_ASSETS}/EmamiFoundation.jpg`,
        width: 282,
        height: 28,
        mWidth: 242,
        mHeight: 24,
      },
    ],
    [
      {
        name: "MPJ Jewellers",
        src: `${S2S_ASSETS}/mpj.jpg`,
        width: 100,
        height: 101,
        mWidth: 80,
        mHeight: 80,
      },
      {
        name: "Sar-La Education Trust",
        src: `${S2S_ASSETS}/sar-la.jpg`,
        width: 100,
        height: 101,
        mWidth: 80,
        mHeight: 80,
      },
      {
        name: "LGT Wealth India",
        src: `${S2S_ASSETS}/lgt.jpg`,
        width: 200,
        height: 84,
        mWidth: 117,
        mHeight: 80,
      },
    ],
  ],
  collaboration: [
    {
      name: "Indonesia India: Mitra Selamanya, Partners Forever",
      src: `${S2S_ASSETS}/partner-indonesia.jpg`,
      width: 256,
      height: 52,
      mWidth: 198,
      mHeight: 40,
    },
    {
      name: "Kingdom of the Netherlands",
      src: `${S2S_ASSETS}/partner-netherlands.jpg`,
      width: 187,
      height: 110,
      mWidth: 119,
      mHeight: 70,
    },
  ],
  venues: [
    {
      name: "Kolkata Centre for Creativity",
      src: `${S2S_ASSETS}/partner-kcc.jpg`,
      width: 256,
      height: 80,
      mWidth: 160,
      mHeight: 50,
    },
    {
      name: "Arthshila Santiniketan",
      src: `${S2S_ASSETS}/partner-arthshila.png`,
      width: 159,
      height: 80,
      mWidth: 119,
      mHeight: 60,
    },
  ],
} satisfies Record<string, PartnerLogo | PartnerLogo[] | PartnerLogo[][]>;

export const testimonialsTitle = "Testimonials & Press";

export type Testimonial = {
  attribution: string;
  quote: string;
  /** The quote's text width on desktop. Each slide in the design has its own, which sets its line breaks. */
  width: number;
};

// The three slides of the "Testimonials" component in Figma, in its order.
export const testimonials: Testimonial[] = [
  {
    attribution: " Arthur MacGregor",
    quote:
      '"I still find myself pouring over the cover illustration. It is such a wonderful collection of boats against a frieze of wonderfully mixed architecture."',
    width: 764,
  },
  {
    attribution: "Mary Schoeser",
    quote: '"An outstanding book brimming with gathered insights and imagery."',
    width: 840,
  },
  {
    attribution: "Sarah Mahaffy",
    quote:
      '"The Weavers Studio Resource Centre in Kolkata has many beautiful examples, particularly of kantha. These textiles show a spirit of resistance from the artisans who made them."',
    // 671 in Figma; the browser's Bodoni sets the second line 0.4px wider, so it
    // needs one more pixel to keep "that" on that line as the design does.
    width: 672,
  },
];

/**
 * One card in the carousel under the testimonials: a photograph (`image`) or a
 * clip (`video`, played with a button like the Snippets). `imageAlt` describes
 * either; `caption`, when given, sits under the card.
 */
export type ArchiveItem = {
  imageAlt: string;
  caption?: RichText;
  image?: string;
  video?: string;
};

// Captions are still to be written, so the cards show without them for now.
export const communityArchive: ArchiveItem[] = [
  {
    video: `${S2S_ASSETS}/testimonial-9.mp4`,
    imageAlt: "Testimonial 9",
    caption: [
      { text: "Exhibition experience of our visitors", tone: "strong" },
    ],
  },
  {
    image: `${S2S_ASSETS}/testimonial-1.png`,
    imageAlt: "Testimonial 1",
    caption: [{ text: "Featured in The Print", tone: "strong" }],
  },
  {
    video: `${S2S_ASSETS}/testimonial-2.mp4`,
    imageAlt: "Testimonial 2",
    caption: [
      { text: "Review by Designer Sabyasachi Mukherjee", tone: "strong" },
    ],
  },
  {
    image: `${S2S_ASSETS}/testimonial-3.png`,
    imageAlt: "Testimonial 3",
    caption: [{ text: "Featured in The Hindu", tone: "strong" }],
  },
  {
    video: `${S2S_ASSETS}/testimonial-4.mp4`,
    imageAlt: "Testimonial 4",
    caption: [
      {
        text: "Review by Her Highness Dr. Radhikaraje Gaekwad",
        tone: "strong",
      },
    ],
  },
  {
    image: `${S2S_ASSETS}/testimonial-5.png`,
    imageAlt: "Testimonial 5",
    caption: [
      {
        text: "Featured in The Textile Society Journal (Volume 52, 2025)",
        tone: "strong",
      },
    ],
  },
  {
    video: `${S2S_ASSETS}/testimonial-6.mp4`,
    imageAlt: "Testimonial 6",
    caption: [
      {
        text: "Review by Editor of Selvedge Magazine, Polly Leonard",
        tone: "strong",
      },
    ],
  },
  {
    image: `${S2S_ASSETS}/testimonial-7.jpeg`,
    imageAlt: "Testimonial 7",
    caption: [{ text: "Featured in Vogue", tone: "strong" }],
  },
  {
    video: `${S2S_ASSETS}/testimonial-8.mp4`,
    imageAlt: "Testimonial 8",
    caption: [
      {
        text: "Review by Editor of The Voice of Fashion, Shefalee Vasudev",
        tone: "strong",
      },
    ],
  },
  {
    image: `${S2S_ASSETS}/testimonial-9.jpeg`,
    imageAlt: "Testimonial 9",
    caption: [{ text: "Featured in BBC", tone: "strong" }],
  },
  {
    image: `${S2S_ASSETS}/testimonial-10.jpeg`,
    imageAlt: "Testimonial 10",
    caption: [
      {
        text: "Amoung top four finalists by The Textile Society of America",
        tone: "strong",
      },
    ],
  },
];
