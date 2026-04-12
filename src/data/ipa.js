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
 *   examples    — array of { word, bold } objects for the UI; bold is an exact
 *                 substring of word that produces the target sound in that word
 */

// ---------------------------------------------------------------------------
// VOWELS
// Organized by vowel chart position: close → mid → open, front → back
// ---------------------------------------------------------------------------

const VOWELS = [
  // Close vowels
  {
    symbol: "i",  category: "Vowels", subcategory: "Close",
    description: "fleece", example: "fl[ee]ce", audioFile: "i.mp3", isVowel: true,
    examples: [
      { word: "fleece", bold: "ee" },
      { word: "meet",   bold: "ee" },
      { word: "ski",    bold: "i"  },
    ],
  },
  {
    symbol: "y",  category: "Vowels", subcategory: "Close",
    description: "French 'tu'", example: "[u]", audioFile: "y.mp3", isVowel: true,
    examples: [
      { word: "French 'tu'", bold: "u" },
    ],
  },
  {
    symbol: "ɨ",  category: "Vowels", subcategory: "Close",
    description: "roses (unstressed)", example: "ros[e]s", audioFile: "ɨ.mp3", isVowel: true,
    examples: [
      { word: "roses",  bold: "e" },
      { word: "wanted", bold: "e" },
    ],
  },
  {
    symbol: "ʉ",  category: "Vowels", subcategory: "Close",
    description: "Swedish 'hus'", example: "h[u]s", audioFile: "ʉ.mp3", isVowel: true,
    examples: [
      { word: "Swedish 'hus'", bold: "u" },
    ],
  },
  {
    symbol: "ɯ",  category: "Vowels", subcategory: "Close",
    description: "Korean '으'", example: "[으]", audioFile: "ɯ.mp3", isVowel: true,
    examples: [
      { word: "Korean 'eu' (으)", bold: "eu" },
    ],
  },
  {
    symbol: "u",  category: "Vowels", subcategory: "Close",
    description: "goose", example: "g[oo]se", audioFile: "u.mp3", isVowel: true,
    examples: [
      { word: "goose", bold: "oo" },
      { word: "moon",  bold: "oo" },
      { word: "blue",  bold: "ue" },
    ],
  },

  // Near-close vowels
  {
    symbol: "ɪ",  category: "Vowels", subcategory: "Near-close",
    description: "kit", example: "k[i]t", audioFile: "ɪ.mp3", isVowel: true,
    examples: [
      { word: "kit", bold: "i" },
      { word: "bit", bold: "i" },
      { word: "gym", bold: "y" },
    ],
  },
  {
    symbol: "ʏ",  category: "Vowels", subcategory: "Near-close",
    description: "German 'hübsch'", example: "h[ü]bsch", audioFile: "ʏ.mp3", isVowel: true,
    examples: [
      { word: "German 'hübsch'", bold: "ü" },
    ],
  },
  {
    symbol: "ʊ",  category: "Vowels", subcategory: "Near-close",
    description: "foot", example: "f[oo]t", audioFile: "ʊ.mp3", isVowel: true,
    examples: [
      { word: "foot", bold: "oo" },
      { word: "book", bold: "oo" },
      { word: "good", bold: "oo" },
    ],
  },

  // Close-mid vowels
  {
    symbol: "e",  category: "Vowels", subcategory: "Close-mid",
    description: "face", example: "f[a]ce", audioFile: "e.mp3", isVowel: true,
    examples: [
      { word: "face", bold: "a"  },
      { word: "they", bold: "ey" },
    ],
  },
  {
    symbol: "ø",  category: "Vowels", subcategory: "Close-mid",
    description: "French 'feu'", example: "f[eu]", audioFile: "ø.mp3", isVowel: true,
    examples: [
      { word: "French 'feu'", bold: "eu" },
    ],
  },
  {
    symbol: "ɘ",  category: "Vowels", subcategory: "Close-mid",
    description: "(central close-mid)", example: "", audioFile: "ɘ.mp3", isVowel: true,
    examples: [
      { word: "Swedish 'annu'", bold: "u" },
    ],
  },
  {
    symbol: "ɵ",  category: "Vowels", subcategory: "Close-mid",
    description: "Swedish 'full'", example: "f[u]ll", audioFile: "ɵ.mp3", isVowel: true,
    examples: [
      { word: "Swedish 'full'", bold: "u" },
    ],
  },
  {
    symbol: "ɤ",  category: "Vowels", subcategory: "Close-mid",
    description: "Korean '으' (tense)", example: "", audioFile: "ɤ.mp3", isVowel: true,
    examples: [
      { word: "Korean back 'eu' (으, unrounded)", bold: "eu" },
    ],
  },
  {
    symbol: "o",  category: "Vowels", subcategory: "Close-mid",
    description: "goat", example: "g[o]at", audioFile: "o.mp3", isVowel: true,
    examples: [
      { word: "goat", bold: "oa" },
      { word: "bone", bold: "o"  },
    ],
  },

  // Mid vowels
  {
    symbol: "e̞",  category: "Vowels", subcategory: "Mid",
    description: "Spanish 'mesa'", example: "m[e]sa", audioFile: "e̞.mp3", isVowel: true,
    examples: [
      { word: "Spanish 'mesa'", bold: "e" },
    ],
  },
  {
    symbol: "ə",  category: "Vowels", subcategory: "Mid",
    description: "comma", example: "comm[a]", audioFile: "ə.mp3", isVowel: true,
    examples: [
      { word: "comma", bold: "a" },
      { word: "about", bold: "a" },
      { word: "sofa",  bold: "a" },
    ],
  },
  {
    symbol: "o̞",  category: "Vowels", subcategory: "Mid",
    description: "Spanish 'solo'", example: "sol[o]", audioFile: "o̞.mp3", isVowel: true,
    examples: [
      { word: "Spanish 'solo'", bold: "o" },
    ],
  },

  // Open-mid vowels
  {
    symbol: "ɛ",  category: "Vowels", subcategory: "Open-mid",
    description: "dress", example: "dr[e]ss", audioFile: "ɛ.mp3", isVowel: true,
    examples: [
      { word: "dress", bold: "e"  },
      { word: "bed",   bold: "e"  },
      { word: "said",  bold: "ai" },
    ],
  },
  {
    symbol: "œ",  category: "Vowels", subcategory: "Open-mid",
    description: "French 'peur'", example: "p[eu]r", audioFile: "œ.mp3", isVowel: true,
    examples: [
      { word: "French 'peur'", bold: "eu" },
    ],
  },
  {
    symbol: "ɜ",  category: "Vowels", subcategory: "Open-mid",
    description: "nurse", example: "n[ur]se", audioFile: "ɜ.mp3", isVowel: true,
    examples: [
      { word: "nurse", bold: "ur" },
      { word: "bird",  bold: "ir" },
      { word: "word",  bold: "or" },
    ],
  },
  {
    symbol: "ɞ",  category: "Vowels", subcategory: "Open-mid",
    description: "(central open-mid rounded)", example: "", audioFile: "ɞ.mp3", isVowel: true,
    examples: [
      { word: "Norwegian 'grøt'", bold: "ø" },
    ],
  },
  {
    symbol: "ʌ",  category: "Vowels", subcategory: "Open-mid",
    description: "strut", example: "str[u]t", audioFile: "ʌ.mp3", isVowel: true,
    examples: [
      { word: "strut", bold: "u"  },
      { word: "cup",   bold: "u"  },
      { word: "blood", bold: "oo" },
    ],
  },
  {
    symbol: "ɔ",  category: "Vowels", subcategory: "Open-mid",
    description: "thought", example: "th[ough]t", audioFile: "ɔ.mp3", isVowel: true,
    examples: [
      { word: "thought", bold: "ough" },
      { word: "law",     bold: "aw"   },
      { word: "caught",  bold: "augh" },
    ],
  },

  // Near-open vowels
  {
    symbol: "æ",  category: "Vowels", subcategory: "Near-open",
    description: "trap", example: "tr[a]p", audioFile: "æ.mp3", isVowel: true,
    examples: [
      { word: "trap", bold: "a" },
      { word: "cat",  bold: "a" },
      { word: "bad",  bold: "a" },
    ],
  },
  {
    symbol: "ɐ",  category: "Vowels", subcategory: "Near-open",
    description: "comma (German)", example: "komm[a]", audioFile: "ɐ.mp3", isVowel: true,
    examples: [
      { word: "Kammer", bold: "a" },
    ],
  },

  // Open vowels
  {
    symbol: "a",  category: "Vowels", subcategory: "Open",
    description: "Spanish 'casa'", example: "c[a]sa", audioFile: "a.mp3", isVowel: true,
    examples: [
      { word: "father", bold: "a" },
      { word: "spa",    bold: "a" },
    ],
  },
  {
    symbol: "ɶ",  category: "Vowels", subcategory: "Open",
    description: "French 'patte' (rounded)", example: "", audioFile: "ɶ.mp3", isVowel: true,
    examples: [
      { word: "French 'patte'", bold: "a" },
    ],
  },
  {
    symbol: "ä",  category: "Vowels", subcategory: "Open",
    description: "German 'Mann'", example: "M[a]nn", audioFile: "ä.mp3", isVowel: true,
    examples: [
      { word: "Mann", bold: "a" },
    ],
  },
  {
    symbol: "ɑ",  category: "Vowels", subcategory: "Open",
    description: "palm", example: "p[al]m", audioFile: "ɑ.mp3", isVowel: true,
    examples: [
      { word: "palm",   bold: "al" },
      { word: "spa",    bold: "a"  },
      { word: "father", bold: "a"  },
    ],
  },
  {
    symbol: "ɒ",  category: "Vowels", subcategory: "Open",
    description: "lot (British)", example: "l[o]t", audioFile: "ɒ.mp3", isVowel: true,
    examples: [
      { word: "lot", bold: "o" },
      { word: "hot", bold: "o" },
    ],
  },

  // Diphthongs (common English ones — not strictly IPA primitives but essential)
  {
    symbol: "eɪ", category: "Vowels", subcategory: "Diphthongs",
    description: "face", example: "f[ace]", audioFile: "eɪ.mp3", isVowel: true,
    examples: [
      { word: "face", bold: "ace" },
      { word: "rain", bold: "ai"  },
      { word: "they", bold: "ey"  },
    ],
  },
  {
    symbol: "aɪ", category: "Vowels", subcategory: "Diphthongs",
    description: "price", example: "pr[ice]", audioFile: "aɪ.mp3", isVowel: true,
    examples: [
      { word: "price", bold: "ice" },
      { word: "fly",   bold: "y"   },
      { word: "night", bold: "igh" },
    ],
  },
  {
    symbol: "ɔɪ", category: "Vowels", subcategory: "Diphthongs",
    description: "choice", example: "ch[oice]", audioFile: "ɔɪ.mp3", isVowel: true,
    examples: [
      { word: "choice", bold: "oi" },
      { word: "boy",    bold: "oy" },
      { word: "coin",   bold: "oi" },
    ],
  },
  {
    symbol: "aʊ", category: "Vowels", subcategory: "Diphthongs",
    description: "mouth", example: "m[outh]", audioFile: "aʊ.mp3", isVowel: true,
    examples: [
      { word: "mouth", bold: "ou" },
      { word: "now",   bold: "ow" },
      { word: "loud",  bold: "ou" },
    ],
  },
  {
    symbol: "oʊ", category: "Vowels", subcategory: "Diphthongs",
    description: "goat (American)", example: "g[oat]", audioFile: "oʊ.mp3", isVowel: true,
    examples: [
      { word: "goat", bold: "oa" },
      { word: "bone", bold: "o"  },
      { word: "slow", bold: "ow" },
    ],
  },
  {
    symbol: "ɪə", category: "Vowels", subcategory: "Diphthongs",
    description: "near", example: "n[ear]", audioFile: "ɪə.mp3", isVowel: true,
    examples: [
      { word: "near", bold: "ear" },
      { word: "deer", bold: "eer" },
    ],
  },
  {
    symbol: "eə", category: "Vowels", subcategory: "Diphthongs",
    description: "square", example: "squ[are]", audioFile: "eə.mp3", isVowel: true,
    examples: [
      { word: "square", bold: "are" },
      { word: "hair",   bold: "air" },
    ],
  },
  {
    symbol: "ʊə", category: "Vowels", subcategory: "Diphthongs",
    description: "cure", example: "c[ure]", audioFile: "ʊə.mp3", isVowel: true,
    examples: [
      { word: "cure", bold: "ure" },
      { word: "tour", bold: "our" },
    ],
  },
];

// ---------------------------------------------------------------------------
// CONSONANTS
// ---------------------------------------------------------------------------

const PLOSIVES = [
  {
    symbol: "p",  category: "Plosives", subcategory: "Bilabial",
    description: "pen", example: "[p]en", audioFile: "p.mp3", isVowel: false,
    examples: [
      { word: "pen",   bold: "p" },
      { word: "cap",   bold: "p" },
      { word: "sport", bold: "p" },
    ],
  },
  {
    symbol: "b",  category: "Plosives", subcategory: "Bilabial",
    description: "bad", example: "[b]ad", audioFile: "b.mp3", isVowel: false,
    examples: [
      { word: "bad",   bold: "b" },
      { word: "rob",   bold: "b" },
      { word: "about", bold: "b" },
    ],
  },
  {
    symbol: "t",  category: "Plosives", subcategory: "Alveolar",
    description: "tea", example: "[t]ea", audioFile: "t.mp3", isVowel: false,
    examples: [
      { word: "tea",  bold: "t" },
      { word: "cat",  bold: "t" },
      { word: "stop", bold: "t" },
    ],
  },
  {
    symbol: "d",  category: "Plosives", subcategory: "Alveolar",
    description: "dip", example: "[d]ip", audioFile: "d.mp3", isVowel: false,
    examples: [
      { word: "dip",    bold: "d"  },
      { word: "rod",    bold: "d"  },
      { word: "middle", bold: "dd" },
    ],
  },
  {
    symbol: "ʈ",  category: "Plosives", subcategory: "Retroflex",
    description: "Hindi 'ट'", example: "[ट]", audioFile: "ʈ.mp3", isVowel: false,
    examples: [
      { word: "Hindi 'ta' (ट, retroflex T)", bold: "t" },
    ],
  },
  {
    symbol: "ɖ",  category: "Plosives", subcategory: "Retroflex",
    description: "Hindi 'ड'", example: "[ड]", audioFile: "ɖ.mp3", isVowel: false,
    examples: [
      { word: "Hindi 'da' (ड, retroflex D)", bold: "da" },
    ],
  },
  {
    symbol: "c",  category: "Plosives", subcategory: "Palatal",
    description: "Hungarian 'tyúk'", example: "[ty]úk", audioFile: "c.mp3", isVowel: false,
    examples: [
      { word: "Hungarian 'tyúk'", bold: "ty" },
    ],
  },
  {
    symbol: "ɟ",  category: "Plosives", subcategory: "Palatal",
    description: "Hungarian 'dzsungel'", example: "[dj]", audioFile: "ɟ.mp3", isVowel: false,
    examples: [
      { word: "Hungarian 'dzsungel'", bold: "dzs" },
    ],
  },
  {
    symbol: "k",  category: "Plosives", subcategory: "Velar",
    description: "cat", example: "[c]at", audioFile: "k.mp3", isVowel: false,
    examples: [
      { word: "cat",  bold: "c" },
      { word: "kick", bold: "k" },
      { word: "skip", bold: "k" },
    ],
  },
  {
    symbol: "ɡ",  category: "Plosives", subcategory: "Velar",
    description: "gap", example: "[g]ap", audioFile: "ɡ.mp3", isVowel: false,
    examples: [
      { word: "gap", bold: "g"  },
      { word: "egg", bold: "gg" },
      { word: "go",  bold: "g"  },
    ],
  },
  {
    symbol: "q",  category: "Plosives", subcategory: "Uvular",
    description: "Arabic 'قلب'", example: "[ق]", audioFile: "q.mp3", isVowel: false,
    examples: [
      { word: "Arabic 'qalb' (قلب, heart)", bold: "q" },
    ],
  },
  {
    symbol: "ɢ",  category: "Plosives", subcategory: "Uvular",
    description: "(voiced uvular stop)", example: "", audioFile: "ɢ.mp3", isVowel: false,
    examples: [
      { word: "Inuktitut 'iglu' (igloo)", bold: "g" },
    ],
  },
  {
    symbol: "ʔ",  category: "Plosives", subcategory: "Glottal",
    description: "uh·oh", example: "uh[·]oh", audioFile: "ʔ.mp3", isVowel: false,
    examples: [
      { word: "uh-oh",           bold: "-"  },
      { word: "button (Cockney)", bold: "tt" },
    ],
  },
];

const NASALS = [
  {
    symbol: "m",  category: "Nasals", subcategory: "Bilabial",
    description: "map", example: "[m]ap", audioFile: "m.mp3", isVowel: false,
    examples: [
      { word: "map",    bold: "m"  },
      { word: "hammer", bold: "mm" },
      { word: "him",    bold: "m"  },
    ],
  },
  {
    symbol: "ɱ",  category: "Nasals", subcategory: "Labiodental",
    description: "symphony", example: "sym[ph]ony (assimilated)", audioFile: "ɱ.mp3", isVowel: false,
    examples: [
      { word: "comfort", bold: "mf"  },
      { word: "triumph", bold: "mph" },
    ],
  },
  {
    symbol: "n",  category: "Nasals", subcategory: "Alveolar",
    description: "nap", example: "[n]ap", audioFile: "n.mp3", isVowel: false,
    examples: [
      { word: "nap",   bold: "n"  },
      { word: "sunny", bold: "nn" },
      { word: "man",   bold: "n"  },
    ],
  },
  {
    symbol: "ɳ",  category: "Nasals", subcategory: "Retroflex",
    description: "Hindi retroflex n", example: "", audioFile: "ɳ.mp3", isVowel: false,
    examples: [
      { word: "Hindi 'na' (ण, retroflex N)", bold: "na" },
    ],
  },
  {
    symbol: "ɲ",  category: "Nasals", subcategory: "Palatal",
    description: "canyon", example: "ca[ny]on", audioFile: "ɲ.mp3", isVowel: false,
    examples: [
      { word: "canyon", bold: "ny" },
      { word: "onion",  bold: "ni" },
    ],
  },
  {
    symbol: "ŋ",  category: "Nasals", subcategory: "Velar",
    description: "sing", example: "si[ng]", audioFile: "ŋ.mp3", isVowel: false,
    examples: [
      { word: "sing",  bold: "ng" },
      { word: "king",  bold: "ng" },
      { word: "think", bold: "nk" },
    ],
  },
  {
    symbol: "ɴ",  category: "Nasals", subcategory: "Uvular",
    description: "(uvular nasal)", example: "", audioFile: "ɴ.mp3", isVowel: false,
    examples: [
      { word: "manga", bold: "n" },
    ],
  },
];

const TRILLS = [
  {
    symbol: "ʙ",  category: "Trills", subcategory: "Bilabial",
    description: "(bilabial trill)", example: "", audioFile: "ʙ.mp3", isVowel: false,
    examples: [
      { word: "brrr", bold: "rr" },
    ],
  },
  {
    symbol: "r",  category: "Trills", subcategory: "Alveolar",
    description: "Spanish 'perro'", example: "pe[rr]o", audioFile: "r.mp3", isVowel: false,
    examples: [
      { word: "Spanish 'perro'", bold: "rr" },
    ],
  },
  {
    symbol: "ʀ",  category: "Trills", subcategory: "Uvular",
    description: "French 'rue'", example: "[r]ue", audioFile: "ʀ.mp3", isVowel: false,
    examples: [
      { word: "rue", bold: "r" },
      { word: "rot", bold: "r" },
    ],
  },
];

const FLAPS = [
  {
    symbol: "ɾ",  category: "Flaps", subcategory: "Alveolar",
    description: "butter (American)", example: "bu[tt]er", audioFile: "ɾ.mp3", isVowel: false,
    examples: [
      { word: "butter", bold: "tt" },
      { word: "ladder", bold: "dd" },
      { word: "later",  bold: "t"  },
    ],
  },
  {
    symbol: "ɽ",  category: "Flaps", subcategory: "Retroflex",
    description: "Hindi retroflex flap", example: "", audioFile: "ɽ.mp3", isVowel: false,
    examples: [
      { word: "Hindi 'ra' (ड़, retroflex flap)", bold: "r" },
    ],
  },
];

const FRICATIVES = [
  {
    symbol: "ɸ",  category: "Fricatives", subcategory: "Bilabial",
    description: "Japanese 'fu'", example: "[f]u", audioFile: "ɸ.mp3", isVowel: false,
    examples: [
      { word: "Japanese 'fu'", bold: "f" },
    ],
  },
  {
    symbol: "β",  category: "Fricatives", subcategory: "Bilabial",
    description: "Spanish 'cabo'", example: "ca[b]o", audioFile: "β.mp3", isVowel: false,
    examples: [
      { word: "Spanish 'cabo'", bold: "b" },
    ],
  },
  {
    symbol: "f",  category: "Fricatives", subcategory: "Labiodental",
    description: "fat", example: "[f]at", audioFile: "f.mp3", isVowel: false,
    examples: [
      { word: "fat",   bold: "f"  },
      { word: "off",   bold: "ff" },
      { word: "phone", bold: "ph" },
    ],
  },
  {
    symbol: "v",  category: "Fricatives", subcategory: "Labiodental",
    description: "vat", example: "[v]at", audioFile: "v.mp3", isVowel: false,
    examples: [
      { word: "vat",   bold: "v" },
      { word: "love",  bold: "v" },
      { word: "heavy", bold: "v" },
    ],
  },
  {
    symbol: "θ",  category: "Fricatives", subcategory: "Dental",
    description: "thin", example: "[th]in", audioFile: "θ.mp3", isVowel: false,
    examples: [
      { word: "thin",      bold: "th" },
      { word: "bath",      bold: "th" },
      { word: "something", bold: "th" },
    ],
  },
  {
    symbol: "ð",  category: "Fricatives", subcategory: "Dental",
    description: "then", example: "[th]en", audioFile: "ð.mp3", isVowel: false,
    examples: [
      { word: "then",    bold: "th" },
      { word: "breathe", bold: "th" },
      { word: "father",  bold: "th" },
    ],
  },
  {
    symbol: "s",  category: "Fricatives", subcategory: "Alveolar",
    description: "sip", example: "[s]ip", audioFile: "s.mp3", isVowel: false,
    examples: [
      { word: "sun",    bold: "s"  },
      { word: "castle", bold: "s"  },
      { word: "miss",   bold: "ss" },
    ],
  },
  {
    symbol: "z",  category: "Fricatives", subcategory: "Alveolar",
    description: "zip", example: "[z]ip", audioFile: "z.mp3", isVowel: false,
    examples: [
      { word: "zip",  bold: "z"  },
      { word: "fizz", bold: "zz" },
      { word: "is",   bold: "s"  },
    ],
  },
  {
    symbol: "ʃ",  category: "Fricatives", subcategory: "Postalveolar",
    description: "ship", example: "[sh]ip", audioFile: "ʃ.mp3", isVowel: false,
    examples: [
      { word: "ship",    bold: "sh" },
      { word: "mission", bold: "ss" },
      { word: "machine", bold: "ch" },
    ],
  },
  {
    symbol: "ʒ",  category: "Fricatives", subcategory: "Postalveolar",
    description: "measure", example: "mea[s]ure", audioFile: "ʒ.mp3", isVowel: false,
    examples: [
      { word: "measure", bold: "s"  },
      { word: "vision",  bold: "si" },
      { word: "rouge",   bold: "ge" },
    ],
  },
  {
    symbol: "ʂ",  category: "Fricatives", subcategory: "Retroflex",
    description: "Mandarin 'sh'", example: "[sh]", audioFile: "ʂ.mp3", isVowel: false,
    examples: [
      { word: "Mandarin 'sh'", bold: "sh" },
    ],
  },
  {
    symbol: "ʐ",  category: "Fricatives", subcategory: "Retroflex",
    description: "Mandarin 'r'", example: "[r]", audioFile: "ʐ.mp3", isVowel: false,
    examples: [
      { word: "Mandarin 'r'", bold: "r" },
    ],
  },
  {
    symbol: "ç",  category: "Fricatives", subcategory: "Palatal",
    description: "German 'ich'", example: "i[ch]", audioFile: "ç.mp3", isVowel: false,
    examples: [
      { word: "German 'ich'", bold: "ch" },
      { word: "huge",         bold: "h"  },
    ],
  },
  {
    symbol: "ʝ",  category: "Fricatives", subcategory: "Palatal",
    description: "Spanish 'yo'", example: "[y]o", audioFile: "ʝ.mp3", isVowel: false,
    examples: [
      { word: "Spanish 'yo'", bold: "y" },
    ],
  },
  {
    symbol: "x",  category: "Fricatives", subcategory: "Velar",
    description: "loch", example: "lo[ch]", audioFile: "x.mp3", isVowel: false,
    examples: [
      { word: "loch", bold: "ch" },
      { word: "Bach", bold: "ch" },
    ],
  },
  {
    symbol: "ɣ",  category: "Fricatives", subcategory: "Velar",
    description: "Greek 'γάτα'", example: "[γ]", audioFile: "ɣ.mp3", isVowel: false,
    examples: [
      { word: "Greek 'gáta' (γάτα, cat)", bold: "g" },
    ],
  },
  {
    symbol: "χ",  category: "Fricatives", subcategory: "Uvular",
    description: "Arabic 'خ'", example: "[خ]", audioFile: "χ.mp3", isVowel: false,
    examples: [
      { word: "Arabic 'kha' (خ)", bold: "kh" },
    ],
  },
  {
    symbol: "ʁ",  category: "Fricatives", subcategory: "Uvular",
    description: "French 'rue'", example: "[r]ue", audioFile: "ʁ.mp3", isVowel: false,
    examples: [
      { word: "rue", bold: "r" },
    ],
  },
  {
    symbol: "ħ",  category: "Fricatives", subcategory: "Pharyngeal",
    description: "Arabic 'ح'", example: "[ح]", audioFile: "ħ.mp3", isVowel: false,
    examples: [
      { word: "Arabic 'ha' (ح)", bold: "ha" },
    ],
  },
  {
    symbol: "ʕ",  category: "Fricatives", subcategory: "Pharyngeal",
    description: "Arabic 'ع'", example: "[ع]", audioFile: "ʕ.mp3", isVowel: false,
    examples: [
      { word: "Arabic 'ayn' (ع)", bold: "ay" },
    ],
  },
  {
    symbol: "h",  category: "Fricatives", subcategory: "Glottal",
    description: "hat", example: "[h]at", audioFile: "h.mp3", isVowel: false,
    examples: [
      { word: "hat",    bold: "h" },
      { word: "behind", bold: "h" },
      { word: "ahead",  bold: "h" },
    ],
  },
  {
    symbol: "ɦ",  category: "Fricatives", subcategory: "Glottal",
    description: "behind", example: "be[h]ind", audioFile: "ɦ.mp3", isVowel: false,
    examples: [
      { word: "behind", bold: "h" },
      { word: "ahead",  bold: "h" },
    ],
  },
];

const AFFRICATES = [
  {
    symbol: "tʃ", category: "Affricates", subcategory: "Postalveolar",
    description: "church", example: "[ch]ur[ch]", audioFile: "tʃ.mp3", isVowel: false,
    examples: [
      { word: "church", bold: "ch"  },
      { word: "match",  bold: "tch" },
      { word: "nature", bold: "t"   },
    ],
  },
  {
    symbol: "dʒ", category: "Affricates", subcategory: "Postalveolar",
    description: "judge", example: "[j]ud[ge]", audioFile: "dʒ.mp3", isVowel: false,
    examples: [
      { word: "judge",  bold: "j"  },
      { word: "bridge", bold: "dg" },
      { word: "gem",    bold: "g"  },
    ],
  },
  {
    symbol: "ts", category: "Affricates", subcategory: "Alveolar",
    description: "cats", example: "ca[ts]", audioFile: "ts.mp3", isVowel: false,
    examples: [
      { word: "cats",  bold: "ts" },
      { word: "pizza", bold: "zz" },
    ],
  },
  {
    symbol: "dz", category: "Affricates", subcategory: "Alveolar",
    description: "adze", example: "a[dz]e", audioFile: "dz.mp3", isVowel: false,
    examples: [
      { word: "adze", bold: "dz" },
      { word: "beds", bold: "ds" },
    ],
  },
  {
    symbol: "tɕ", category: "Affricates", subcategory: "Palatal",
    description: "Mandarin 'j'", example: "[j]", audioFile: "tɕ.mp3", isVowel: false,
    examples: [
      { word: "Mandarin 'j'", bold: "j" },
    ],
  },
  {
    symbol: "dʑ", category: "Affricates", subcategory: "Palatal",
    description: "Polish 'dź'", example: "[dź]", audioFile: "dʑ.mp3", isVowel: false,
    examples: [
      { word: "Polish 'dź'", bold: "dź" },
    ],
  },
  {
    symbol: "tʂ", category: "Affricates", subcategory: "Retroflex",
    description: "Mandarin 'zh'", example: "[zh]", audioFile: "tʂ.mp3", isVowel: false,
    examples: [
      { word: "Mandarin 'zh'", bold: "zh" },
    ],
  },
  {
    symbol: "dʐ", category: "Affricates", subcategory: "Retroflex",
    description: "Polish 'dż'", example: "[dż]", audioFile: "dʐ.mp3", isVowel: false,
    examples: [
      { word: "Polish 'dż'", bold: "dż" },
    ],
  },
];

const APPROXIMANTS = [
  {
    symbol: "ʋ",  category: "Approximants", subcategory: "Labiodental",
    description: "Dutch 'west'", example: "[w]est", audioFile: "ʋ.mp3", isVowel: false,
    examples: [
      { word: "Dutch 'west'", bold: "w" },
    ],
  },
  {
    symbol: "ɹ",  category: "Approximants", subcategory: "Alveolar",
    description: "red (American)", example: "[r]ed", audioFile: "ɹ.mp3", isVowel: false,
    examples: [
      { word: "red",  bold: "r" },
      { word: "car",  bold: "r" },
      { word: "very", bold: "r" },
    ],
  },
  {
    symbol: "ɻ",  category: "Approximants", subcategory: "Retroflex",
    description: "Mandarin 'r'", example: "[r]", audioFile: "ɻ.mp3", isVowel: false,
    examples: [
      { word: "Mandarin 'r'", bold: "r" },
    ],
  },
  {
    symbol: "j",  category: "Approximants", subcategory: "Palatal",
    description: "yet", example: "[y]et", audioFile: "j.mp3", isVowel: false,
    examples: [
      { word: "yet",    bold: "y" },
      { word: "yes",    bold: "y" },
      { word: "beyond", bold: "y" },
    ],
  },
  {
    symbol: "ɰ",  category: "Approximants", subcategory: "Velar",
    description: "Korean '으' glide", example: "", audioFile: "ɰ.mp3", isVowel: false,
    examples: [
      { word: "Korean 'eu' (으)", bold: "eu" },
    ],
  },
  {
    symbol: "w",  category: "Approximants", subcategory: "Labial-velar",
    description: "wet", example: "[w]et", audioFile: "w.mp3", isVowel: false,
    examples: [
      { word: "wet",   bold: "w"  },
      { word: "away",  bold: "w"  },
      { word: "queen", bold: "qu" },
    ],
  },
];

const LATERAL_APPROXIMANTS = [
  {
    symbol: "l",  category: "Lateral Approximants", subcategory: "Alveolar",
    description: "let", example: "[l]et", audioFile: "l.mp3", isVowel: false,
    examples: [
      { word: "let",   bold: "l"  },
      { word: "hello", bold: "ll" },
      { word: "feel",  bold: "l"  },
    ],
  },
  {
    symbol: "ɭ",  category: "Lateral Approximants", subcategory: "Retroflex",
    description: "Tamil 'ள'", example: "[ள]", audioFile: "ɭ.mp3", isVowel: false,
    examples: [
      { word: "Tamil 'la' (ள, retroflex L)", bold: "la" },
    ],
  },
  {
    symbol: "ʎ",  category: "Lateral Approximants", subcategory: "Palatal",
    description: "Italian 'gli'", example: "g[li]", audioFile: "ʎ.mp3", isVowel: false,
    examples: [
      { word: "Italian 'gli'", bold: "gl"  },
      { word: "million",       bold: "lli" },
    ],
  },
  {
    symbol: "ʟ",  category: "Lateral Approximants", subcategory: "Velar",
    description: "(velar lateral)", example: "", audioFile: "ʟ.mp3", isVowel: false,
    examples: [
      { word: "Tibetan 'l'", bold: "l" },
    ],
  },
];

const CLICKS = [
  // Included for completeness (Zulu, Xhosa, Khoisan languages)
  {
    symbol: "ʘ",  category: "Clicks", subcategory: "Bilabial",
    description: "(bilabial click)", example: "", audioFile: "ʘ.mp3", isVowel: false,
    examples: [
      { word: "Zulu bilabial click", bold: "bilabial" },
    ],
  },
  {
    symbol: "ǀ",  category: "Clicks", subcategory: "Dental",
    description: "tsk sound", example: "tsk", audioFile: "ǀ.mp3", isVowel: false,
    examples: [
      { word: "tsk", bold: "tsk" },
    ],
  },
  {
    symbol: "ǃ",  category: "Clicks", subcategory: "Alveolar",
    description: "(alveolar click)", example: "", audioFile: "ǃ.mp3", isVowel: false,
    examples: [
      { word: "Zulu alveolar click", bold: "alveolar" },
    ],
  },
  {
    symbol: "ǂ",  category: "Clicks", subcategory: "Palatal",
    description: "(palatal click)", example: "", audioFile: "ǂ.mp3", isVowel: false,
    examples: [
      { word: "Nama palatal click", bold: "palatal" },
    ],
  },
  {
    symbol: "ǁ",  category: "Clicks", subcategory: "Lateral",
    description: "(lateral click)", example: "", audioFile: "ǁ.mp3", isVowel: false,
    examples: [
      { word: "Zulu lateral click", bold: "lateral" },
    ],
  },
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
