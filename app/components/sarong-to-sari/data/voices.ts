import type { RichText } from "../types";
import { S2S_ASSETS } from "./home";

export type Voice = {
  id: string;
  /** The name splits into a Bodoni italic part and an upright part, e.g. "Benny " + "Adrianto". */
  nameItalic: string;
  nameRegular: string;
  /** The person's name sits in `bold` within it, as the design does. */
  bio: RichText;
  image?: string;
  /** Where to anchor the crop, for portraits that are not in the cards' landscape shape. */
  imagePosition?: string;
  imageAlt: string;
};

const voice = (
  id: string,
  nameItalic: string,
  nameRegular: string,
  bio: RichText,
  image?: string,
  imagePosition?: string
): Voice => ({
  id,
  nameItalic,
  nameRegular,
  bio,
  image: image && `${S2S_ASSETS}/${image}`,
  imagePosition,
  imageAlt: `${nameItalic}${nameRegular}`.trim(),
});

// Names and biographies as the Figma file has them.
export const voices: Voice[] = [
  // Figma's card title reads "Agus Imoyo"; the biography beneath it (and the artist) spell it "Ismoyo".
  voice(
    "agus-ismoyo-nia-fliam",
    "Agus Ismoyo and",
    " Nia Fliam",
    [
      "Indonesian artist ",
      { text: "Agus Ismoyo", tone: "bold" },
      ", from a family of Solo batik makers, and Pratt-trained American artist ",
      { text: "Nia Fliam", tone: "bold" },
      ' have collaborated since 1985. Their batik studio in Yogyakarta, Brahma Tirta Sari ("creativity is the source of all knowledge"), translates the visual language of traditional Javanese batik into contemporary work rooted in nature.',
    ],
    "voice-1.jpg"
  ),
  voice(
    "benny-adrianto",
    "Benny ",
    "Adrianto",
    [
      "Designer ",
      { text: "Benny Adrianto", tone: "bold" },
      " has been exploring Indonesia’s cultural diversity through collaborations with artisans across the country, transforming traditional crafts into contemporary works. Benny combines materials and traditions from different regions, such as Sulawesi bark cloth and Solo calligraphy, in order to create contemporary designs while simultaneously preserving their cultural meaning.",
    ],
    "voice-2.jpg"
  ),
  voice(
    "krishnendu-bag",
    "Krishnendu ",
    "Bag",
    [
      { text: "Shri Krishnendu Bag", tone: "bold" },
      " is an artist, educator and master artisan with more than four decades in India's heritage crafts. A Visva-Bharati graduate, he taught design at Kala Bhavana for 19 years, carrying forward the Tagorean art philosophy. Today he leads public masterclasses across India in natural dyes and freehand batik.",
    ],
    "voice-3.jpg"
  ),
  voice(
    "sushobhan-adhikary",
    "Sushobhan ",
    "Adhikary",
    [
      { text: "Sushobhan Adhikary", tone: "bold" },
      " is an artist, art historian and conservator, and former Curator of the Kala Bhavana Museum, Visva-Bharati. He spent many years conserving Tagore's paintings at Rabindra-Bhavana and has written on Rabindranath's art since 1983, winning the Ananda Puraskar for Ronger Rabindranath (Tagore of Colours), co-authored with Ketaki Kushari Dyson.",
    ],
    // The team-section portrait; it is upright, so the crop keeps his face in frame.
    "team-3.jpg",
    "50% 22%"
  ),
  voice(
    "oroon-das",
    "Oroon ",
    "Das",
    [
      { text: "Oroon Das", tone: "bold" },
      " is a multidisciplinary artist, performer, scenographer, and designer whose practice moves fluidly across theatre, movement, installation, costume, and visual arts. Drawing inspiration from Indian performance traditions, craft practices, and contemporary design, his work explores the relationship between body, space, material, and memory. He has collaborated with leading theatre practitioners, museums, and cultural institutions in India and abroad, creating immersive performances and exhibition designs. His interdisciplinary approach brings together storytelling, scenography, and material culture to create new dialogues between the performing and visual arts.",
    ],
    "voice-5.jpg"
  ),
  voice(
    "rudolf-smend",
    "Rudolf ",
    "Smend",
    [
      { text: "Rudolf Smend", tone: "bold" },
      " is a passionate batik collector and the owner of Galerie Smend in Cologne. He was first introduced to batik in Yogyakarta, Central Java, in 1973. His gallery, which exhibits the work of international textile artists, recently celebrated its 42nd anniversary. Smend has edited and published numerous books on silk painting and batik, among them Batik: Javanese and Sumatran Batiks from Courts and Palaces, Rudolf G. Smend Collection (2000) and Batik: 75 Selected Masterpieces, The Rudolf G. Smend Collection (2006).",
    ],
    "voice-6.jpg"
  ),
  voice(
    "maria-wronska-friend",
    "Dr. Maria ",
    "Wronska-Friend",
    [
      { text: "Dr Maria Wronska-Friend", tone: "bold" },
      " is a social anthropologist and museum curator specialising in Southeast Asian textiles, and an Adjunct Senior Research Fellow at James Cook University in Cairns, Australia. Her research traces the global influence of Javanese batik, from European decorative arts to textile traditions in Japan, Ghana, Bengal and Aboriginal Australia. In Santiniketan, she studied the Indonesian textiles Rabindranath Tagore brought back from Java and Bali in 1927, and documented Bengal's contemporary batik practice. Her books include Javanese Batik to the World (Jakarta, 2016). She has curated or advised on more than ten major textile exhibitions in Australia and Poland.",
    ],
    "voice-7.jpg"
  ),
  voice(
    "peter-lee",
    "Peter ",
    "Lee",
    [
      { text: "Peter Lee", tone: "bold" },
      " is an independent researcher, and the Founding Curator of the NUS Baba House – a historical house museum managed by the National University of Singapore. Since 1998 he has curated exhibitions and authored essays and publications on various aspects of Peranakan heritage. His textile- and fashion-related work includes Sarong Kebaya (Peranakan Museum, 2011) and a book on the subject (2014). In 2016, he co-curated Singapore, Sarong Kebaya and Style at the Fukuoka Art Museum and the Shoto Museum in Tokyo. Three seasons of The Mark of Empire, a documentary series in which he features as the series’ host, were broadcast by Channel News Asia, Singapore, in 2020, 2022 and 2026. He also manages a family collection of textiles and 19th century photography.",
    ],
    "voice-8.jpg"
  ),
  voice(
    "sudhi-ranjan-mukherjee",
    "Sudhi Ranjan ",
    "Mukherjee",
    [
      { text: "Sudhi Ranjan Mukherjee", tone: "bold" },
      " is an artist and designer based in Santiniketan. Born in Chandannagore in 1957, he earned his bachelor's and master's degrees in painting from Rabindra Bharati University, Kolkata, and was a National Cultural Scholar at Kala Bhavana under Dinkar Kaushik. For over three decades (1983–2017), he taught painting and design at Visva-Bharati, where he also created alpanas for the university's festivals and designed stagecraft, costumes and ornaments for Tagore's dance dramas. He has led workshops on alpana, sara painting and mask-making in India and the US, including at a Tagore festival in New Jersey, and exhibited widely since 1981.",
    ],
    "voice-9.jpg"
  ),
];
