// All IPA symbols with category, description, and audio filename
// Shape: { symbol, category, description, audioFile }

/**
 * ipa.js
 * Complete IPA symbol dataset. This is the single source of truth for all
 * phoneme data in the app. Every glyph mapping, audio lookup, and generator
 * weight table references symbols defined here.
 *
 * Each entry contains:
 *   symbol      — the IPA character(s)
 *   category    — grouping for the browser UI
 *   subcategory — finer grouping within category (optional, used for vowel chart)
 *   description — a familiar English word that contains the sound
 *   example     — the specific part of the word that has the sound, in brackets
 *   audioFile   — filename in public/audio/ipa/ (to be sourced separately)
 *   isVowel     — boolean, used by the lexicon generator for syllable templating
 */

// ---------------------------------------------------------------------------
// VOWELS
// Organized by vowel chart position: close → mid → open, front → back
// ---------------------------------------------------------------------------

const VOWELS = [
  // Close vowels
  { symbol: "i",  category: "Vowels", subcategory: "Close",      description: "fleece",   example: "fl[ee]ce",  audioFile: "i.mp3",  isVowel: true },
  { symbol: "y",  category: "Vowels", subcategory: "Close",      description: "French 'tu'", example: "[u]",    audioFile: "y.mp3",  isVowel: true },
  { symbol: "ɨ",  category: "Vowels", subcategory: "Close",      description: "roses (unstressed)", example: "ros[e]s", audioFile: "ɨ.mp3", isVowel: true },
  { symbol: "ʉ",  category: "Vowels", subcategory: "Close",      description: "Swedish 'hus'", example: "h[u]s", audioFile: "ʉ.mp3", isVowel: true },
  { symbol: "ɯ",  category: "Vowels", subcategory: "Close",      description: "Korean '으'", example: "[으]",   audioFile: "ɯ.mp3", isVowel: true },
  { symbol: "u",  category: "Vowels", subcategory: "Close",      description: "goose",    example: "g[oo]se",   audioFile: "u.mp3",  isVowel: true },

  // Near-close vowels
  { symbol: "ɪ",  category: "Vowels", subcategory: "Near-close", description: "kit",      example: "k[i]t",     audioFile: "ɪ.mp3",  isVowel: true },
  { symbol: "ʏ",  category: "Vowels", subcategory: "Near-close", description: "German 'hübsch'", example: "h[ü]bsch", audioFile: "ʏ.mp3", isVowel: true },
  { symbol: "ʊ",  category: "Vowels", subcategory: "Near-close", description: "foot",     example: "f[oo]t",    audioFile: "ʊ.mp3",  isVowel: true },

  // Close-mid vowels
  { symbol: "e",  category: "Vowels", subcategory: "Close-mid",  description: "face",     example: "f[a]ce",    audioFile: "e.mp3",  isVowel: true },
  { symbol: "ø",  category: "Vowels", subcategory: "Close-mid",  description: "French 'feu'", example: "f[eu]", audioFile: "ø.mp3",  isVowel: true },
  { symbol: "ɘ",  category: "Vowels", subcategory: "Close-mid",  description: "(central close-mid)", example: "",audioFile: "ɘ.mp3", isVowel: true },
  { symbol: "ɵ",  category: "Vowels", subcategory: "Close-mid",  description: "Swedish 'full'", example: "f[u]ll", audioFile: "ɵ.mp3", isVowel: true },
  { symbol: "ɤ",  category: "Vowels", subcategory: "Close-mid",  description: "Korean '으' (tense)", example: "", audioFile: "ɤ.mp3", isVowel: true },
  { symbol: "o",  category: "Vowels", subcategory: "Close-mid",  description: "goat",     example: "g[o]at",    audioFile: "o.mp3",  isVowel: true },

  // Mid vowels
  { symbol: "e̞",  category: "Vowels", subcategory: "Mid",        description: "Spanish 'mesa'", example: "m[e]sa", audioFile: "e̞.mp3", isVowel: true },
  { symbol: "ə",  category: "Vowels", subcategory: "Mid",        description: "comma",    example: "comm[a]",   audioFile: "ə.mp3",  isVowel: true },
  { symbol: "o̞",  category: "Vowels", subcategory: "Mid",        description: "Spanish 'solo'", example: "sol[o]", audioFile: "o̞.mp3", isVowel: true },

  // Open-mid vowels
  { symbol: "ɛ",  category: "Vowels", subcategory: "Open-mid",   description: "dress",    example: "dr[e]ss",   audioFile: "ɛ.mp3",  isVowel: true },
  { symbol: "œ",  category: "Vowels", subcategory: "Open-mid",   description: "French 'peur'", example: "p[eu]r", audioFile: "œ.mp3", isVowel: true },
  { symbol: "ɜ",  category: "Vowels", subcategory: "Open-mid",   description: "nurse",    example: "n[ur]se",   audioFile: "ɜ.mp3",  isVowel: true },
  { symbol: "ɞ",  category: "Vowels", subcategory: "Open-mid",   description: "(central open-mid rounded)", example: "", audioFile: "ɞ.mp3", isVowel: true },
  { symbol: "ʌ",  category: "Vowels", subcategory: "Open-mid",   description: "strut",    example: "str[u]t",   audioFile: "ʌ.mp3",  isVowel: true },
  { symbol: "ɔ",  category: "Vowels", subcategory: "Open-mid",   description: "thought",  example: "th[ough]t", audioFile: "ɔ.mp3",  isVowel: true },

  // Near-open vowels
  { symbol: "æ",  category: "Vowels", subcategory: "Near-open",  description: "trap",     example: "tr[a]p",    audioFile: "æ.mp3",  isVowel: true },
  { symbol: "ɐ",  category: "Vowels", subcategory: "Near-open",  description: "comma (German)", example: "komm[a]", audioFile: "ɐ.mp3", isVowel: true },

  // Open vowels
  { symbol: "a",  category: "Vowels", subcategory: "Open",       description: "Spanish 'casa'", example: "c[a]sa", audioFile: "a.mp3", isVowel: true },
  { symbol: "ɶ",  category: "Vowels", subcategory: "Open",       description: "French 'patte' (rounded)", example: "", audioFile: "ɶ.mp3", isVowel: true },
  { symbol: "ä",  category: "Vowels", subcategory: "Open",       description: "German 'Mann'", example: "M[a]nn", audioFile: "ä.mp3", isVowel: true },
  { symbol: "ɑ",  category: "Vowels", subcategory: "Open",       description: "palm",     example: "p[al]m",    audioFile: "ɑ.mp3",  isVowel: true },
  { symbol: "ɒ",  category: "Vowels", subcategory: "Open",       description: "lot (British)", example: "l[o]t", audioFile: "ɒ.mp3", isVowel: true },

  // Diphthongs (common English ones — not strictly IPA primitives but essential)
  { symbol: "eɪ", category: "Vowels", subcategory: "Diphthongs", description: "face",     example: "f[ace]",    audioFile: "eɪ.mp3", isVowel: true },
  { symbol: "aɪ", category: "Vowels", subcategory: "Diphthongs", description: "price",    example: "pr[ice]",   audioFile: "aɪ.mp3", isVowel: true },
  { symbol: "ɔɪ", category: "Vowels", subcategory: "Diphthongs", description: "choice",   example: "ch[oice]",  audioFile: "ɔɪ.mp3", isVowel: true },
  { symbol: "aʊ", category: "Vowels", subcategory: "Diphthongs", description: "mouth",    example: "m[outh]",   audioFile: "aʊ.mp3", isVowel: true },
  { symbol: "oʊ", category: "Vowels", subcategory: "Diphthongs", description: "goat (American)", example: "g[oat]", audioFile: "oʊ.mp3", isVowel: true },
  { symbol: "ɪə", category: "Vowels", subcategory: "Diphthongs", description: "near",     example: "n[ear]",    audioFile: "ɪə.mp3", isVowel: true },
  { symbol: "eə", category: "Vowels", subcategory: "Diphthongs", description: "square",   example: "squ[are]",  audioFile: "eə.mp3", isVowel: true },
  { symbol: "ʊə", category: "Vowels", subcategory: "Diphthongs", description: "cure",     example: "c[ure]",    audioFile: "ʊə.mp3", isVowel: true },
];

// ---------------------------------------------------------------------------
// CONSONANTS
// ---------------------------------------------------------------------------

const PLOSIVES = [
  { symbol: "p",  category: "Plosives", subcategory: "Bilabial",     description: "pen",      example: "[p]en",     audioFile: "p.mp3",  isVowel: false },
  { symbol: "b",  category: "Plosives", subcategory: "Bilabial",     description: "bad",      example: "[b]ad",     audioFile: "b.mp3",  isVowel: false },
  { symbol: "t",  category: "Plosives", subcategory: "Alveolar",     description: "tea",      example: "[t]ea",     audioFile: "t.mp3",  isVowel: false },
  { symbol: "d",  category: "Plosives", subcategory: "Alveolar",     description: "dip",      example: "[d]ip",     audioFile: "d.mp3",  isVowel: false },
  { symbol: "ʈ",  category: "Plosives", subcategory: "Retroflex",    description: "Hindi 'ट'", example: "[ट]",       audioFile: "ʈ.mp3",  isVowel: false },
  { symbol: "ɖ",  category: "Plosives", subcategory: "Retroflex",    description: "Hindi 'ड'", example: "[ड]",       audioFile: "ɖ.mp3",  isVowel: false },
  { symbol: "c",  category: "Plosives", subcategory: "Palatal",      description: "Hungarian 'tyúk'", example: "[ty]úk", audioFile: "c.mp3", isVowel: false },
  { symbol: "ɟ",  category: "Plosives", subcategory: "Palatal",      description: "Hungarian 'dzsungel'", example: "[dj]", audioFile: "ɟ.mp3", isVowel: false },
  { symbol: "k",  category: "Plosives", subcategory: "Velar",        description: "cat",      example: "[c]at",     audioFile: "k.mp3",  isVowel: false },
  { symbol: "ɡ",  category: "Plosives", subcategory: "Velar",        description: "gap",      example: "[g]ap",     audioFile: "ɡ.mp3",  isVowel: false },
  { symbol: "q",  category: "Plosives", subcategory: "Uvular",       description: "Arabic 'قلب'", example: "[ق]",    audioFile: "q.mp3",  isVowel: false },
  { symbol: "ɢ",  category: "Plosives", subcategory: "Uvular",       description: "(voiced uvular stop)", example: "", audioFile: "ɢ.mp3", isVowel: false },
  { symbol: "ʔ",  category: "Plosives", subcategory: "Glottal",      description: "uh·oh",    example: "uh[·]oh",   audioFile: "ʔ.mp3",  isVowel: false },
];

const NASALS = [
  { symbol: "m",  category: "Nasals", subcategory: "Bilabial",   description: "map",      example: "[m]ap",     audioFile: "m.mp3",  isVowel: false },
  { symbol: "ɱ",  category: "Nasals", subcategory: "Labiodental",description: "symphony", example: "sym[ph]ony (assimilated)", audioFile: "ɱ.mp3", isVowel: false },
  { symbol: "n",  category: "Nasals", subcategory: "Alveolar",   description: "nap",      example: "[n]ap",     audioFile: "n.mp3",  isVowel: false },
  { symbol: "ɳ",  category: "Nasals", subcategory: "Retroflex",  description: "Hindi retroflex n", example: "",  audioFile: "ɳ.mp3",  isVowel: false },
  { symbol: "ɲ",  category: "Nasals", subcategory: "Palatal",    description: "canyon",   example: "ca[ny]on",  audioFile: "ɲ.mp3",  isVowel: false },
  { symbol: "ŋ",  category: "Nasals", subcategory: "Velar",      description: "sing",     example: "si[ng]",    audioFile: "ŋ.mp3",  isVowel: false },
  { symbol: "ɴ",  category: "Nasals", subcategory: "Uvular",     description: "(uvular nasal)", example: "",      audioFile: "ɴ.mp3",  isVowel: false },
];

const TRILLS = [
  { symbol: "ʙ",  category: "Trills", subcategory: "Bilabial",  description: "(bilabial trill)", example: "",     audioFile: "ʙ.mp3",  isVowel: false },
  { symbol: "r",  category: "Trills", subcategory: "Alveolar",  description: "Spanish 'perro'", example: "pe[rr]o", audioFile: "r.mp3", isVowel: false },
  { symbol: "ʀ",  category: "Trills", subcategory: "Uvular",    description: "French 'rue'", example: "[r]ue",  audioFile: "ʀ.mp3",  isVowel: false },
];

const FLAPS = [
  { symbol: "ɾ",  category: "Flaps", subcategory: "Alveolar",   description: "butter (American)", example: "bu[tt]er", audioFile: "ɾ.mp3", isVowel: false },
  { symbol: "ɽ",  category: "Flaps", subcategory: "Retroflex",  description: "Hindi retroflex flap", example: "",    audioFile: "ɽ.mp3",  isVowel: false },
];

const FRICATIVES = [
  { symbol: "ɸ",  category: "Fricatives", subcategory: "Bilabial",     description: "Japanese 'fu'", example: "[f]u", audioFile: "ɸ.mp3", isVowel: false },
  { symbol: "β",  category: "Fricatives", subcategory: "Bilabial",     description: "Spanish 'cabo'", example: "ca[b]o", audioFile: "β.mp3", isVowel: false },
  { symbol: "f",  category: "Fricatives", subcategory: "Labiodental",  description: "fat",      example: "[f]at",     audioFile: "f.mp3",  isVowel: false },
  { symbol: "v",  category: "Fricatives", subcategory: "Labiodental",  description: "vat",      example: "[v]at",     audioFile: "v.mp3",  isVowel: false },
  { symbol: "θ",  category: "Fricatives", subcategory: "Dental",       description: "thin",     example: "[th]in",    audioFile: "θ.mp3",  isVowel: false },
  { symbol: "ð",  category: "Fricatives", subcategory: "Dental",       description: "then",     example: "[th]en",    audioFile: "ð.mp3",  isVowel: false },
  { symbol: "s",  category: "Fricatives", subcategory: "Alveolar",     description: "sip",      example: "[s]ip",     audioFile: "s.mp3",  isVowel: false },
  { symbol: "z",  category: "Fricatives", subcategory: "Alveolar",     description: "zip",      example: "[z]ip",     audioFile: "z.mp3",  isVowel: false },
  { symbol: "ʃ",  category: "Fricatives", subcategory: "Postalveolar", description: "ship",     example: "[sh]ip",    audioFile: "ʃ.mp3",  isVowel: false },
  { symbol: "ʒ",  category: "Fricatives", subcategory: "Postalveolar", description: "measure",  example: "mea[s]ure", audioFile: "ʒ.mp3",  isVowel: false },
  { symbol: "ʂ",  category: "Fricatives", subcategory: "Retroflex",    description: "Mandarin 'sh'", example: "[sh]", audioFile: "ʂ.mp3",  isVowel: false },
  { symbol: "ʐ",  category: "Fricatives", subcategory: "Retroflex",    description: "Mandarin 'r'", example: "[r]",  audioFile: "ʐ.mp3",  isVowel: false },
  { symbol: "ç",  category: "Fricatives", subcategory: "Palatal",      description: "German 'ich'", example: "i[ch]", audioFile: "ç.mp3", isVowel: false },
  { symbol: "ʝ",  category: "Fricatives", subcategory: "Palatal",      description: "Spanish 'yo'", example: "[y]o", audioFile: "ʝ.mp3",  isVowel: false },
  { symbol: "x",  category: "Fricatives", subcategory: "Velar",        description: "loch",     example: "lo[ch]",    audioFile: "x.mp3",  isVowel: false },
  { symbol: "ɣ",  category: "Fricatives", subcategory: "Velar",        description: "Greek 'γάτα'", example: "[γ]",  audioFile: "ɣ.mp3",  isVowel: false },
  { symbol: "χ",  category: "Fricatives", subcategory: "Uvular",       description: "Arabic 'خ'", example: "[خ]",    audioFile: "χ.mp3",  isVowel: false },
  { symbol: "ʁ",  category: "Fricatives", subcategory: "Uvular",       description: "French 'rue'", example: "[r]ue", audioFile: "ʁ.mp3", isVowel: false },
  { symbol: "ħ",  category: "Fricatives", subcategory: "Pharyngeal",   description: "Arabic 'ح'", example: "[ح]",    audioFile: "ħ.mp3",  isVowel: false },
  { symbol: "ʕ",  category: "Fricatives", subcategory: "Pharyngeal",   description: "Arabic 'ع'", example: "[ع]",    audioFile: "ʕ.mp3",  isVowel: false },
  { symbol: "h",  category: "Fricatives", subcategory: "Glottal",      description: "hat",      example: "[h]at",     audioFile: "h.mp3",  isVowel: false },
  { symbol: "ɦ",  category: "Fricatives", subcategory: "Glottal",      description: "behind",   example: "be[h]ind",  audioFile: "ɦ.mp3",  isVowel: false },
];

const AFFRICATES = [
  { symbol: "tʃ", category: "Affricates", subcategory: "Postalveolar", description: "church",   example: "[ch]ur[ch]", audioFile: "tʃ.mp3", isVowel: false },
  { symbol: "dʒ", category: "Affricates", subcategory: "Postalveolar", description: "judge",    example: "[j]ud[ge]",  audioFile: "dʒ.mp3", isVowel: false },
  { symbol: "ts", category: "Affricates", subcategory: "Alveolar",     description: "cats",     example: "ca[ts]",     audioFile: "ts.mp3", isVowel: false },
  { symbol: "dz", category: "Affricates", subcategory: "Alveolar",     description: "adze",     example: "a[dz]e",     audioFile: "dz.mp3", isVowel: false },
  { symbol: "tɕ", category: "Affricates", subcategory: "Palatal",      description: "Mandarin 'j'", example: "[j]",    audioFile: "tɕ.mp3", isVowel: false },
  { symbol: "dʑ", category: "Affricates", subcategory: "Palatal",      description: "Polish 'dź'", example: "[dź]",   audioFile: "dʑ.mp3", isVowel: false },
  { symbol: "tʂ", category: "Affricates", subcategory: "Retroflex",    description: "Mandarin 'zh'", example: "[zh]", audioFile: "tʂ.mp3", isVowel: false },
  { symbol: "dʐ", category: "Affricates", subcategory: "Retroflex",    description: "Polish 'dż'", example: "[dż]",   audioFile: "dʐ.mp3", isVowel: false },
];

const APPROXIMANTS = [
  { symbol: "ʋ",  category: "Approximants", subcategory: "Labiodental", description: "Dutch 'west'", example: "[w]est", audioFile: "ʋ.mp3", isVowel: false },
  { symbol: "ɹ",  category: "Approximants", subcategory: "Alveolar",    description: "red (American)", example: "[r]ed", audioFile: "ɹ.mp3", isVowel: false },
  { symbol: "ɻ",  category: "Approximants", subcategory: "Retroflex",   description: "Mandarin 'r'", example: "[r]",    audioFile: "ɻ.mp3", isVowel: false },
  { symbol: "j",  category: "Approximants", subcategory: "Palatal",     description: "yet",      example: "[y]et",     audioFile: "j.mp3",  isVowel: false },
  { symbol: "ɰ",  category: "Approximants", subcategory: "Velar",       description: "Korean '으' glide", example: "",   audioFile: "ɰ.mp3", isVowel: false },
  { symbol: "w",  category: "Approximants", subcategory: "Labial-velar", description: "wet",     example: "[w]et",     audioFile: "w.mp3",  isVowel: false },
];

const LATERAL_APPROXIMANTS = [
  { symbol: "l",  category: "Lateral Approximants", subcategory: "Alveolar",   description: "let",      example: "[l]et",     audioFile: "l.mp3",  isVowel: false },
  { symbol: "ɭ",  category: "Lateral Approximants", subcategory: "Retroflex",  description: "Tamil 'ள'", example: "[ள]",       audioFile: "ɭ.mp3",  isVowel: false },
  { symbol: "ʎ",  category: "Lateral Approximants", subcategory: "Palatal",    description: "Italian 'gli'", example: "g[li]", audioFile: "ʎ.mp3",  isVowel: false },
  { symbol: "ʟ",  category: "Lateral Approximants", subcategory: "Velar",      description: "(velar lateral)", example: "",     audioFile: "ʟ.mp3",  isVowel: false },
];

const CLICKS = [
  // Included for completeness (Zulu, Xhosa, Khoisan languages)
  { symbol: "ʘ",  category: "Clicks", subcategory: "Bilabial",   description: "(bilabial click)", example: "",         audioFile: "ʘ.mp3",  isVowel: false },
  { symbol: "ǀ",  category: "Clicks", subcategory: "Dental",     description: "tsk sound",   example: "tsk",          audioFile: "ǀ.mp3",  isVowel: false },
  { symbol: "ǃ",  category: "Clicks", subcategory: "Alveolar",   description: "(alveolar click)", example: "",         audioFile: "ǃ.mp3",  isVowel: false },
  { symbol: "ǂ",  category: "Clicks", subcategory: "Palatal",    description: "(palatal click)", example: "",          audioFile: "ǂ.mp3",  isVowel: false },
  { symbol: "ǁ",  category: "Clicks", subcategory: "Lateral",    description: "(lateral click)", example: "",          audioFile: "ǁ.mp3",  isVowel: false },
];

// ---------------------------------------------------------------------------
// COMBINED EXPORT
// All symbols in a single flat array. The UI and generator both consume this.
// ---------------------------------------------------------------------------

export const IPA_SYMBOLS = [
  ...VOWELS,
  ...PLOSIVES,
  ...NASALS,
  ...TRILLS,
  ...FLAPS,
  ...FRICATIVES,
  ...AFFRICATES,
  ...APPROXIMANTS,
  ...LATERAL_APPROXIMANTS,
  ...CLICKS,
];

// The canonical ordered list of categories for the browser UI tabs.
// Update this if new categories are added above.
export const IPA_CATEGORIES = [
  "Vowels",
  "Plosives",
  "Nasals",
  "Trills",
  "Flaps",
  "Fricatives",
  "Affricates",
  "Approximants",
  "Lateral Approximants",
  "Clicks",
];

// ---------------------------------------------------------------------------
// LOOKUP HELPERS
// ---------------------------------------------------------------------------

/**
 * Returns the IPA entry for a given symbol string, or undefined if not found.
 * Used by the mapper and audio player to look up metadata from a stored phoneme.
 */
export function getIPAEntry(symbol) {
  return IPA_SYMBOLS.find((entry) => entry.symbol === symbol);
}

/**
 * Returns all IPA symbols belonging to a given category.
 * Used by IPABrowser.jsx to render each category tab.
 */
export function getSymbolsByCategory(category) {
  return IPA_SYMBOLS.filter((entry) => entry.category === category);
}

/**
 * Returns all vowel symbols. Used by the lexicon generator to identify
 * which phonemes can fill vowel slots in syllable templates.
 */
export function getVowels() {
  return IPA_SYMBOLS.filter((entry) => entry.isVowel);
}

/**
 * Returns all consonant symbols. Used by the lexicon generator to identify
 * which phonemes can fill consonant slots in syllable templates.
 */
export function getConsonants() {
  return IPA_SYMBOLS.filter((entry) => !entry.isVowel);
}

/**
 * Returns a flat deduplicated list of all subcategories for a given category.
 * Used by IPABrowser.jsx to optionally render subcategory groupings within a tab.
 */
export function getSubcategories(category) {
  const symbols = getSymbolsByCategory(category);
  return [...new Set(symbols.map((s) => s.subcategory).filter(Boolean))];
}