// Writing systems with Unicode block and per-character phoneme mappings
// Shape: { name, characters: [{ char, phonemes, defaultPhoneme }] }

/**
 * unicodeAlphabets.js
 * Writing systems available in the Character Browser (phoneme mapper).
 * Each system lists its characters with their known phonetic interpretations
 * as IPA symbols.
 *
 * This data is used exclusively as a UI shortcut — the user picks a character
 * like "J" or "Б", sees its phonetic options, picks one, and that IPA value
 * is what actually gets stored on the glyph. The source character is never
 * stored or used downstream.
 *
 * Phoneme values reflect the most common interpretations across languages that
 * use each script. Where a character has multiple common readings, all are
 * listed with the most common first (defaultPhoneme).
 *
 * Sources: Unicode character database, IPA chart, Wikipedia phonology articles
 * for each language family, and PHOIBLE inventory data.
 */

export const UNICODE_ALPHABETS = [

  // ---------------------------------------------------------------------------
  // LATIN
  // Standard 26-letter Latin alphabet. Phoneme options reflect the range of
  // values these letters take across major Latin-script languages.
  // ---------------------------------------------------------------------------
  {
    id: "latin",
    name: "Latin",
    region: "Europe / Americas / Africa",
    characters: [
      { char: "A", phonemes: ["a", "æ", "ɑ", "eɪ", "ə"], defaultPhoneme: "a" },
      { char: "B", phonemes: ["b", "β", "p"], defaultPhoneme: "b" },
      { char: "C", phonemes: ["k", "s", "tʃ", "ts", "ç"], defaultPhoneme: "k" },
      { char: "D", phonemes: ["d", "ð", "ɖ"], defaultPhoneme: "d" },
      { char: "E", phonemes: ["e", "ɛ", "eɪ", "ə", "i"], defaultPhoneme: "e" },
      { char: "F", phonemes: ["f", "v", "ɸ"], defaultPhoneme: "f" },
      { char: "G", phonemes: ["ɡ", "dʒ", "x", "ɣ", "ʒ"], defaultPhoneme: "ɡ" },
      { char: "H", phonemes: ["h", "x", "ħ", "ʔ"], defaultPhoneme: "h" },
      { char: "I", phonemes: ["i", "ɪ", "aɪ", "j"], defaultPhoneme: "i" },
      { char: "J", phonemes: ["dʒ", "j", "ʒ", "x", "h"], defaultPhoneme: "dʒ" },
      { char: "K", phonemes: ["k", "tʃ"], defaultPhoneme: "k" },
      { char: "L", phonemes: ["l", "ɭ", "ʎ", "ɹ"], defaultPhoneme: "l" },
      { char: "M", phonemes: ["m", "ɱ"], defaultPhoneme: "m" },
      { char: "N", phonemes: ["n", "ŋ", "ɲ", "ɳ"], defaultPhoneme: "n" },
      { char: "O", phonemes: ["o", "ɔ", "ɒ", "oʊ", "ə"], defaultPhoneme: "o" },
      { char: "P", phonemes: ["p", "f", "b"], defaultPhoneme: "p" },
      { char: "Q", phonemes: ["k", "q", "kw"], defaultPhoneme: "k" },
      { char: "R", phonemes: ["ɹ", "r", "ɾ", "ʁ", "ʀ"], defaultPhoneme: "ɹ" },
      { char: "S", phonemes: ["s", "z", "ʃ", "ʒ"], defaultPhoneme: "s" },
      { char: "T", phonemes: ["t", "θ", "tʃ", "ts", "ʈ"], defaultPhoneme: "t" },
      { char: "U", phonemes: ["u", "ʊ", "ʌ", "y", "w"], defaultPhoneme: "u" },
      { char: "V", phonemes: ["v", "b", "β", "f", "w"], defaultPhoneme: "v" },
      { char: "W", phonemes: ["w", "v", "β"], defaultPhoneme: "w" },
      { char: "X", phonemes: ["ks", "z", "x", "ʃ", "tʃ"], defaultPhoneme: "k" },
      { char: "Y", phonemes: ["j", "aɪ", "i", "y", "ɨ"], defaultPhoneme: "j" },
      { char: "Z", phonemes: ["z", "ts", "dz", "ʒ", "s"], defaultPhoneme: "z" },
    ],
  },

  // ---------------------------------------------------------------------------
  // CYRILLIC
  // Standard Russian Cyrillic. Phoneme values based on Russian pronunciation.
  // ---------------------------------------------------------------------------
  {
    id: "cyrillic",
    name: "Cyrillic",
    region: "Eastern Europe / Central Asia",
    characters: [
      { char: "А", phonemes: ["a", "ə"], defaultPhoneme: "a" },
      { char: "Б", phonemes: ["b", "p"], defaultPhoneme: "b" },
      { char: "В", phonemes: ["v", "f"], defaultPhoneme: "v" },
      { char: "Г", phonemes: ["ɡ", "k", "ɣ", "x"], defaultPhoneme: "ɡ" },
      { char: "Д", phonemes: ["d", "t"], defaultPhoneme: "d" },
      { char: "Е", phonemes: ["je", "e", "ə"], defaultPhoneme: "e" },
      { char: "Ё", phonemes: ["jo", "o"], defaultPhoneme: "o" },
      { char: "Ж", phonemes: ["ʒ", "ʃ"], defaultPhoneme: "ʒ" },
      { char: "З", phonemes: ["z", "s"], defaultPhoneme: "z" },
      { char: "И", phonemes: ["i", "ɪ", "j"], defaultPhoneme: "i" },
      { char: "Й", phonemes: ["j", "i"], defaultPhoneme: "j" },
      { char: "К", phonemes: ["k", "ɡ"], defaultPhoneme: "k" },
      { char: "Л", phonemes: ["l", "ɭ"], defaultPhoneme: "l" },
      { char: "М", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "Н", phonemes: ["n", "ŋ"], defaultPhoneme: "n" },
      { char: "О", phonemes: ["o", "ə", "ɔ"], defaultPhoneme: "o" },
      { char: "П", phonemes: ["p", "b"], defaultPhoneme: "p" },
      { char: "Р", phonemes: ["r", "ɾ", "ɹ"], defaultPhoneme: "r" },
      { char: "С", phonemes: ["s", "z", "ʃ"], defaultPhoneme: "s" },
      { char: "Т", phonemes: ["t", "d"], defaultPhoneme: "t" },
      { char: "У", phonemes: ["u", "ʊ", "w"], defaultPhoneme: "u" },
      { char: "Ф", phonemes: ["f", "v"], defaultPhoneme: "f" },
      { char: "Х", phonemes: ["x", "h", "χ"], defaultPhoneme: "x" },
      { char: "Ц", phonemes: ["ts", "dz"], defaultPhoneme: "ts" },
      { char: "Ч", phonemes: ["tʃ", "dʒ"], defaultPhoneme: "tʃ" },
      { char: "Ш", phonemes: ["ʃ", "ʒ"], defaultPhoneme: "ʃ" },
      { char: "Щ", phonemes: ["ʃtʃ", "ʃ"], defaultPhoneme: "ʃ" },
      { char: "Ъ", phonemes: ["ʔ"], defaultPhoneme: "ʔ" },
      { char: "Ы", phonemes: ["ɨ", "i"], defaultPhoneme: "ɨ" },
      { char: "Ь", phonemes: ["j"], defaultPhoneme: "j" },
      { char: "Э", phonemes: ["e", "ɛ"], defaultPhoneme: "e" },
      { char: "Ю", phonemes: ["ju", "u"], defaultPhoneme: "u" },
      { char: "Я", phonemes: ["ja", "a"], defaultPhoneme: "a" },
    ],
  },

  // ---------------------------------------------------------------------------
  // GREEK
  // Classical/Modern Greek alphabet.
  // ---------------------------------------------------------------------------
  {
    id: "greek",
    name: "Greek",
    region: "Southern Europe",
    characters: [
      { char: "Α", phonemes: ["a", "ə"], defaultPhoneme: "a" },
      { char: "Β", phonemes: ["v", "b"], defaultPhoneme: "v" },
      { char: "Γ", phonemes: ["ɣ", "j", "ɡ"], defaultPhoneme: "ɣ" },
      { char: "Δ", phonemes: ["ð", "d"], defaultPhoneme: "ð" },
      { char: "Ε", phonemes: ["e", "ɛ"], defaultPhoneme: "e" },
      { char: "Ζ", phonemes: ["z", "dz"], defaultPhoneme: "z" },
      { char: "Η", phonemes: ["i", "e", "ɛ"], defaultPhoneme: "i" },
      { char: "Θ", phonemes: ["θ", "t"], defaultPhoneme: "θ" },
      { char: "Ι", phonemes: ["i", "j"], defaultPhoneme: "i" },
      { char: "Κ", phonemes: ["k", "tʃ"], defaultPhoneme: "k" },
      { char: "Λ", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "Μ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "Ν", phonemes: ["n", "ŋ"], defaultPhoneme: "n" },
      { char: "Ξ", phonemes: ["ks", "gz"], defaultPhoneme: "k" },
      { char: "Ο", phonemes: ["o", "ɔ"], defaultPhoneme: "o" },
      { char: "Π", phonemes: ["p", "b"], defaultPhoneme: "p" },
      { char: "Ρ", phonemes: ["r", "ɾ"], defaultPhoneme: "r" },
      { char: "Σ", phonemes: ["s", "z"], defaultPhoneme: "s" },
      { char: "Τ", phonemes: ["t", "d"], defaultPhoneme: "t" },
      { char: "Υ", phonemes: ["i", "y", "u"], defaultPhoneme: "i" },
      { char: "Φ", phonemes: ["f", "ɸ"], defaultPhoneme: "f" },
      { char: "Χ", phonemes: ["x", "ç", "χ"], defaultPhoneme: "x" },
      { char: "Ψ", phonemes: ["ps"], defaultPhoneme: "s" },
      { char: "Ω", phonemes: ["o", "ɔ"], defaultPhoneme: "o" },
    ],
  },

  // ---------------------------------------------------------------------------
  // ARABIC
  // Arabic abjad (consonant alphabet). Vowels are typically unwritten.
  // Phoneme values based on Modern Standard Arabic.
  // ---------------------------------------------------------------------------
  {
    id: "arabic",
    name: "Arabic",
    region: "Middle East / North Africa",
    characters: [
      { char: "ا", phonemes: ["a", "aː", "ʔ"], defaultPhoneme: "a" },
      { char: "ب", phonemes: ["b", "p"], defaultPhoneme: "b" },
      { char: "ت", phonemes: ["t", "d"], defaultPhoneme: "t" },
      { char: "ث", phonemes: ["θ", "s", "t"], defaultPhoneme: "θ" },
      { char: "ج", phonemes: ["dʒ", "ʒ", "ɡ"], defaultPhoneme: "dʒ" },
      { char: "ح", phonemes: ["ħ", "h"], defaultPhoneme: "ħ" },
      { char: "خ", phonemes: ["x", "χ"], defaultPhoneme: "x" },
      { char: "د", phonemes: ["d", "t"], defaultPhoneme: "d" },
      { char: "ذ", phonemes: ["ð", "z", "d"], defaultPhoneme: "ð" },
      { char: "ر", phonemes: ["r", "ɾ"], defaultPhoneme: "r" },
      { char: "ز", phonemes: ["z", "s"], defaultPhoneme: "z" },
      { char: "س", phonemes: ["s", "z"], defaultPhoneme: "s" },
      { char: "ش", phonemes: ["ʃ", "ʒ"], defaultPhoneme: "ʃ" },
      { char: "ص", phonemes: ["s", "sˤ"], defaultPhoneme: "s" },
      { char: "ض", phonemes: ["d", "dˤ"], defaultPhoneme: "d" },
      { char: "ط", phonemes: ["t", "tˤ"], defaultPhoneme: "t" },
      { char: "ظ", phonemes: ["ð", "ðˤ", "z"], defaultPhoneme: "ð" },
      { char: "ع", phonemes: ["ʕ", "ʔ", "a"], defaultPhoneme: "ʕ" },
      { char: "غ", phonemes: ["ɣ", "ʁ", "ɡ"], defaultPhoneme: "ɣ" },
      { char: "ف", phonemes: ["f", "v"], defaultPhoneme: "f" },
      { char: "ق", phonemes: ["q", "k", "ɡ"], defaultPhoneme: "q" },
      { char: "ك", phonemes: ["k", "tʃ"], defaultPhoneme: "k" },
      { char: "ل", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "م", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "ن", phonemes: ["n", "ŋ"], defaultPhoneme: "n" },
      { char: "ه", phonemes: ["h", "ħ"], defaultPhoneme: "h" },
      { char: "و", phonemes: ["w", "u", "uː"], defaultPhoneme: "w" },
      { char: "ي", phonemes: ["j", "i", "iː"], defaultPhoneme: "j" },
    ],
  },

  // ---------------------------------------------------------------------------
  // HEBREW
  // Hebrew abjad. Phoneme values based on Modern Israeli Hebrew.
  // ---------------------------------------------------------------------------
  {
    id: "hebrew",
    name: "Hebrew",
    region: "Middle East",
    characters: [
      { char: "א", phonemes: ["ʔ", "a", "e"], defaultPhoneme: "ʔ" },
      { char: "ב", phonemes: ["b", "v"], defaultPhoneme: "b" },
      { char: "ג", phonemes: ["ɡ", "dʒ"], defaultPhoneme: "ɡ" },
      { char: "ד", phonemes: ["d"], defaultPhoneme: "d" },
      { char: "ה", phonemes: ["h", "ʔ", "a"], defaultPhoneme: "h" },
      { char: "ו", phonemes: ["v", "w", "u", "o"], defaultPhoneme: "v" },
      { char: "ז", phonemes: ["z", "ʒ"], defaultPhoneme: "z" },
      { char: "ח", phonemes: ["x", "χ", "ħ"], defaultPhoneme: "x" },
      { char: "ט", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "י", phonemes: ["j", "i"], defaultPhoneme: "j" },
      { char: "כ", phonemes: ["k", "x"], defaultPhoneme: "k" },
      { char: "ל", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "מ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "נ", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "ס", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "ע", phonemes: ["ʕ", "ʔ", "a"], defaultPhoneme: "ʔ" },
      { char: "פ", phonemes: ["p", "f"], defaultPhoneme: "p" },
      { char: "צ", phonemes: ["ts", "tʃ"], defaultPhoneme: "ts" },
      { char: "ק", phonemes: ["k", "q"], defaultPhoneme: "k" },
      { char: "ר", phonemes: ["ʁ", "r"], defaultPhoneme: "ʁ" },
      { char: "ש", phonemes: ["ʃ", "s"], defaultPhoneme: "ʃ" },
      { char: "ת", phonemes: ["t", "s"], defaultPhoneme: "t" },
    ],
  },

  // ---------------------------------------------------------------------------
  // DEVANAGARI
  // Used for Hindi, Sanskrit, Marathi, and many other South Asian languages.
  // Phoneme values based on standard Hindi pronunciation.
  // ---------------------------------------------------------------------------
  {
    id: "devanagari",
    name: "Devanagari",
    region: "South Asia",
    characters: [
      // Vowels
      { char: "अ", phonemes: ["ə", "a"], defaultPhoneme: "ə" },
      { char: "आ", phonemes: ["a", "aː"], defaultPhoneme: "a" },
      { char: "इ", phonemes: ["ɪ", "i"], defaultPhoneme: "i" },
      { char: "ई", phonemes: ["i"], defaultPhoneme: "i" },
      { char: "उ", phonemes: ["ʊ", "u"], defaultPhoneme: "u" },
      { char: "ऊ", phonemes: ["u"], defaultPhoneme: "u" },
      { char: "ए", phonemes: ["e", "eɪ"], defaultPhoneme: "e" },
      { char: "ऐ", phonemes: ["æ", "aɪ"], defaultPhoneme: "æ" },
      { char: "ओ", phonemes: ["o", "oʊ"], defaultPhoneme: "o" },
      { char: "औ", phonemes: ["ɔ", "aʊ"], defaultPhoneme: "ɔ" },
      // Consonants
      { char: "क", phonemes: ["k", "kʰ"], defaultPhoneme: "k" },
      { char: "ख", phonemes: ["kʰ", "k"], defaultPhoneme: "k" },
      { char: "ग", phonemes: ["ɡ"], defaultPhoneme: "ɡ" },
      { char: "घ", phonemes: ["ɡ", "h"], defaultPhoneme: "ɡ" },
      { char: "ङ", phonemes: ["ŋ"], defaultPhoneme: "ŋ" },
      { char: "च", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "छ", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "ज", phonemes: ["dʒ", "ʒ"], defaultPhoneme: "dʒ" },
      { char: "झ", phonemes: ["dʒ", "ʒ"], defaultPhoneme: "dʒ" },
      { char: "ञ", phonemes: ["ɲ", "n"], defaultPhoneme: "ɲ" },
      { char: "ट", phonemes: ["ʈ", "t"], defaultPhoneme: "ʈ" },
      { char: "ठ", phonemes: ["ʈ", "t"], defaultPhoneme: "ʈ" },
      { char: "ड", phonemes: ["ɖ", "d"], defaultPhoneme: "ɖ" },
      { char: "ढ", phonemes: ["ɖ", "d"], defaultPhoneme: "ɖ" },
      { char: "ण", phonemes: ["ɳ", "n"], defaultPhoneme: "ɳ" },
      { char: "त", phonemes: ["t", "θ"], defaultPhoneme: "t" },
      { char: "थ", phonemes: ["t", "θ"], defaultPhoneme: "t" },
      { char: "द", phonemes: ["d", "ð"], defaultPhoneme: "d" },
      { char: "ध", phonemes: ["d", "ð"], defaultPhoneme: "d" },
      { char: "न", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "प", phonemes: ["p"], defaultPhoneme: "p" },
      { char: "फ", phonemes: ["f", "p"], defaultPhoneme: "f" },
      { char: "ब", phonemes: ["b"], defaultPhoneme: "b" },
      { char: "भ", phonemes: ["b", "v"], defaultPhoneme: "b" },
      { char: "म", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "य", phonemes: ["j"], defaultPhoneme: "j" },
      { char: "र", phonemes: ["r", "ɾ"], defaultPhoneme: "r" },
      { char: "ल", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "व", phonemes: ["v", "w"], defaultPhoneme: "v" },
      { char: "श", phonemes: ["ʃ"], defaultPhoneme: "ʃ" },
      { char: "ष", phonemes: ["ʂ", "ʃ"], defaultPhoneme: "ʂ" },
      { char: "स", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "ह", phonemes: ["h", "ɦ"], defaultPhoneme: "h" },
    ],
  },

  // ---------------------------------------------------------------------------
  // GEORGIAN
  // Unique script of the Republic of Georgia. One of the oldest alphabets
  // still in active use. Known for its complex consonant clusters.
  // ---------------------------------------------------------------------------
  {
    id: "georgian",
    name: "Georgian",
    region: "Caucasus",
    characters: [
      { char: "ა", phonemes: ["a"], defaultPhoneme: "a" },
      { char: "ბ", phonemes: ["b", "p"], defaultPhoneme: "b" },
      { char: "გ", phonemes: ["ɡ", "k"], defaultPhoneme: "ɡ" },
      { char: "დ", phonemes: ["d", "t"], defaultPhoneme: "d" },
      { char: "ე", phonemes: ["e", "ɛ"], defaultPhoneme: "e" },
      { char: "ვ", phonemes: ["v", "w"], defaultPhoneme: "v" },
      { char: "ზ", phonemes: ["z", "s"], defaultPhoneme: "z" },
      { char: "თ", phonemes: ["t", "θ"], defaultPhoneme: "t" },
      { char: "ი", phonemes: ["i", "j"], defaultPhoneme: "i" },
      { char: "კ", phonemes: ["k", "kʼ"], defaultPhoneme: "k" },
      { char: "ლ", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "მ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "ნ", phonemes: ["n", "ŋ"], defaultPhoneme: "n" },
      { char: "ო", phonemes: ["o", "ɔ"], defaultPhoneme: "o" },
      { char: "პ", phonemes: ["p", "pʼ"], defaultPhoneme: "p" },
      { char: "ჟ", phonemes: ["ʒ", "ʃ"], defaultPhoneme: "ʒ" },
      { char: "რ", phonemes: ["r", "ɾ"], defaultPhoneme: "r" },
      { char: "ს", phonemes: ["s", "z"], defaultPhoneme: "s" },
      { char: "ტ", phonemes: ["t", "tʼ"], defaultPhoneme: "t" },
      { char: "უ", phonemes: ["u", "ʊ"], defaultPhoneme: "u" },
      { char: "ფ", phonemes: ["f", "p"], defaultPhoneme: "f" },
      { char: "ქ", phonemes: ["k", "x"], defaultPhoneme: "k" },
      { char: "ღ", phonemes: ["ɣ", "ɡ"], defaultPhoneme: "ɣ" },
      { char: "ყ", phonemes: ["q", "qʼ"], defaultPhoneme: "q" },
      { char: "შ", phonemes: ["ʃ"], defaultPhoneme: "ʃ" },
      { char: "ჩ", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "ც", phonemes: ["ts"], defaultPhoneme: "ts" },
      { char: "ძ", phonemes: ["dz"], defaultPhoneme: "dz" },
      { char: "წ", phonemes: ["ts", "tsʼ"], defaultPhoneme: "ts" },
      { char: "ჭ", phonemes: ["tʃ", "tʃʼ"], defaultPhoneme: "tʃ" },
      { char: "ხ", phonemes: ["x", "χ"], defaultPhoneme: "x" },
      { char: "ჯ", phonemes: ["dʒ"], defaultPhoneme: "dʒ" },
      { char: "ჰ", phonemes: ["h"], defaultPhoneme: "h" },
    ],
  },

  // ---------------------------------------------------------------------------
  // ARMENIAN
  // Script unique to the Armenian language, created in 405 AD.
  // ---------------------------------------------------------------------------
  {
    id: "armenian",
    name: "Armenian",
    region: "Caucasus",
    characters: [
      { char: "Ա", phonemes: ["a"], defaultPhoneme: "a" },
      { char: "Բ", phonemes: ["b", "p"], defaultPhoneme: "b" },
      { char: "Գ", phonemes: ["ɡ", "k"], defaultPhoneme: "ɡ" },
      { char: "Դ", phonemes: ["d", "t"], defaultPhoneme: "d" },
      { char: "Ե", phonemes: ["je", "e"], defaultPhoneme: "e" },
      { char: "Զ", phonemes: ["z"], defaultPhoneme: "z" },
      { char: "Է", phonemes: ["ɛ", "e"], defaultPhoneme: "ɛ" },
      { char: "Ը", phonemes: ["ə"], defaultPhoneme: "ə" },
      { char: "Թ", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "Ժ", phonemes: ["ʒ"], defaultPhoneme: "ʒ" },
      { char: "Ի", phonemes: ["i"], defaultPhoneme: "i" },
      { char: "Լ", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "Խ", phonemes: ["x", "χ"], defaultPhoneme: "x" },
      { char: "Ծ", phonemes: ["ts", "dz"], defaultPhoneme: "ts" },
      { char: "Կ", phonemes: ["k", "g"], defaultPhoneme: "k" },
      { char: "Հ", phonemes: ["h"], defaultPhoneme: "h" },
      { char: "Ձ", phonemes: ["dz", "ts"], defaultPhoneme: "dz" },
      { char: "Ղ", phonemes: ["ɣ", "x"], defaultPhoneme: "ɣ" },
      { char: "Ճ", phonemes: ["tʃ", "dʒ"], defaultPhoneme: "tʃ" },
      { char: "Մ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "Յ", phonemes: ["j", "h"], defaultPhoneme: "j" },
      { char: "Ն", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "Շ", phonemes: ["ʃ"], defaultPhoneme: "ʃ" },
      { char: "Ո", phonemes: ["vo", "o"], defaultPhoneme: "o" },
      { char: "Չ", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "Պ", phonemes: ["p", "b"], defaultPhoneme: "p" },
      { char: "Ջ", phonemes: ["dʒ"], defaultPhoneme: "dʒ" },
      { char: "Ռ", phonemes: ["r"], defaultPhoneme: "r" },
      { char: "Ս", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "Վ", phonemes: ["v"], defaultPhoneme: "v" },
      { char: "Տ", phonemes: ["t", "d"], defaultPhoneme: "t" },
      { char: "Ր", phonemes: ["ɾ", "r"], defaultPhoneme: "ɾ" },
      { char: "Ց", phonemes: ["ts"], defaultPhoneme: "ts" },
      { char: "Փ", phonemes: ["f", "p"], defaultPhoneme: "f" },
      { char: "Ք", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "Օ", phonemes: ["o", "ɔ"], defaultPhoneme: "o" },
      { char: "Ֆ", phonemes: ["f"], defaultPhoneme: "f" },
    ],
  },

  // ---------------------------------------------------------------------------
  // HIRAGANA
  // Japanese syllabary. Each character represents a CV syllable or a vowel.
  // Phoneme values are the consonant component — the vowel is implied by the
  // full syllable but we store only the onset consonant for mapping purposes.
  // ---------------------------------------------------------------------------
  {
    id: "hiragana",
    name: "Hiragana",
    region: "Japan",
    characters: [
      { char: "あ", phonemes: ["a"], defaultPhoneme: "a" },
      { char: "い", phonemes: ["i"], defaultPhoneme: "i" },
      { char: "う", phonemes: ["u", "ɯ"], defaultPhoneme: "u" },
      { char: "え", phonemes: ["e"], defaultPhoneme: "e" },
      { char: "お", phonemes: ["o"], defaultPhoneme: "o" },
      { char: "か", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "き", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "く", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "け", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "こ", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "さ", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "し", phonemes: ["ʃ", "s"], defaultPhoneme: "ʃ" },
      { char: "す", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "せ", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "そ", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "た", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "ち", phonemes: ["tʃ", "t"], defaultPhoneme: "tʃ" },
      { char: "つ", phonemes: ["ts", "t"], defaultPhoneme: "ts" },
      { char: "て", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "と", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "な", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "に", phonemes: ["n", "ɲ"], defaultPhoneme: "n" },
      { char: "ぬ", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "ね", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "の", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "は", phonemes: ["h"], defaultPhoneme: "h" },
      { char: "ひ", phonemes: ["ç", "h"], defaultPhoneme: "ç" },
      { char: "ふ", phonemes: ["ɸ", "f", "h"], defaultPhoneme: "f" },
      { char: "へ", phonemes: ["h"], defaultPhoneme: "h" },
      { char: "ほ", phonemes: ["h"], defaultPhoneme: "h" },
      { char: "ま", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "み", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "む", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "め", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "も", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "や", phonemes: ["j"], defaultPhoneme: "j" },
      { char: "ゆ", phonemes: ["j"], defaultPhoneme: "j" },
      { char: "よ", phonemes: ["j"], defaultPhoneme: "j" },
      { char: "ら", phonemes: ["ɾ", "r", "l"], defaultPhoneme: "ɾ" },
      { char: "り", phonemes: ["ɾ", "r", "l"], defaultPhoneme: "ɾ" },
      { char: "る", phonemes: ["ɾ", "r", "l"], defaultPhoneme: "ɾ" },
      { char: "れ", phonemes: ["ɾ", "r", "l"], defaultPhoneme: "ɾ" },
      { char: "ろ", phonemes: ["ɾ", "r", "l"], defaultPhoneme: "ɾ" },
      { char: "わ", phonemes: ["w"], defaultPhoneme: "w" },
      { char: "を", phonemes: ["o", "w"], defaultPhoneme: "o" },
      { char: "ん", phonemes: ["n", "m", "ŋ"], defaultPhoneme: "n" },
    ],
  },

  // ---------------------------------------------------------------------------
  // HANGUL (KOREAN JAMO)
  // Korean alphabet. Listed as individual jamo (letters) rather than
  // syllable blocks, so users can map the atomic sounds.
  // ---------------------------------------------------------------------------
  {
    id: "hangul",
    name: "Hangul",
    region: "Korea",
    characters: [
      // Initial consonants (choseong)
      { char: "ㄱ", phonemes: ["k", "ɡ"], defaultPhoneme: "k" },
      { char: "ㄴ", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "ㄷ", phonemes: ["t", "d"], defaultPhoneme: "t" },
      { char: "ㄹ", phonemes: ["r", "l", "ɾ"], defaultPhoneme: "r" },
      { char: "ㅁ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "ㅂ", phonemes: ["p", "b"], defaultPhoneme: "p" },
      { char: "ㅅ", phonemes: ["s", "ʃ"], defaultPhoneme: "s" },
      { char: "ㅇ", phonemes: ["ŋ", "ʔ"], defaultPhoneme: "ŋ" },
      { char: "ㅈ", phonemes: ["tʃ", "dʒ"], defaultPhoneme: "tʃ" },
      { char: "ㅊ", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "ㅋ", phonemes: ["k"], defaultPhoneme: "k" },
      { char: "ㅌ", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "ㅍ", phonemes: ["p"], defaultPhoneme: "p" },
      { char: "ㅎ", phonemes: ["h"], defaultPhoneme: "h" },
      // Vowels (jungseong)
      { char: "ㅏ", phonemes: ["a"], defaultPhoneme: "a" },
      { char: "ㅓ", phonemes: ["ə", "ʌ"], defaultPhoneme: "ə" },
      { char: "ㅗ", phonemes: ["o"], defaultPhoneme: "o" },
      { char: "ㅜ", phonemes: ["u"], defaultPhoneme: "u" },
      { char: "ㅡ", phonemes: ["ɯ", "ə"], defaultPhoneme: "ɯ" },
      { char: "ㅣ", phonemes: ["i"], defaultPhoneme: "i" },
      { char: "ㅐ", phonemes: ["ɛ", "e"], defaultPhoneme: "ɛ" },
      { char: "ㅔ", phonemes: ["e", "ɛ"], defaultPhoneme: "e" },
      { char: "ㅑ", phonemes: ["ja"], defaultPhoneme: "a" },
      { char: "ㅕ", phonemes: ["jə"], defaultPhoneme: "ə" },
      { char: "ㅛ", phonemes: ["jo"], defaultPhoneme: "o" },
      { char: "ㅠ", phonemes: ["ju"], defaultPhoneme: "u" },
    ],
  },

  // ---------------------------------------------------------------------------
  // ETHIOPIC (GEEZ)
  // Script used for Amharic, Tigrinya, and other Ethiopian/Eritrean languages.
  // One of the oldest continuously used writing systems in the world.
  // Showing base forms — each has 7 vowel variants in the full script.
  // ---------------------------------------------------------------------------
  {
    id: "ethiopic",
    name: "Ethiopic (Geez)",
    region: "East Africa",
    characters: [
      { char: "ሀ", phonemes: ["h"], defaultPhoneme: "h" },
      { char: "ለ", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "ሐ", phonemes: ["ħ", "h"], defaultPhoneme: "h" },
      { char: "መ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "ሠ", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "ረ", phonemes: ["r"], defaultPhoneme: "r" },
      { char: "ሰ", phonemes: ["s"], defaultPhoneme: "s" },
      { char: "ሸ", phonemes: ["ʃ"], defaultPhoneme: "ʃ" },
      { char: "ቀ", phonemes: ["k", "q"], defaultPhoneme: "k" },
      { char: "በ", phonemes: ["b"], defaultPhoneme: "b" },
      { char: "ተ", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "ቸ", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "ነ", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "ኘ", phonemes: ["ɲ", "n"], defaultPhoneme: "ɲ" },
      { char: "አ", phonemes: ["a", "ʔ"], defaultPhoneme: "a" },
      { char: "ከ", phonemes: ["k", "x"], defaultPhoneme: "k" },
      { char: "ወ", phonemes: ["w"], defaultPhoneme: "w" },
      { char: "ዐ", phonemes: ["ʕ", "a"], defaultPhoneme: "ʕ" },
      { char: "ዘ", phonemes: ["z"], defaultPhoneme: "z" },
      { char: "ዠ", phonemes: ["ʒ"], defaultPhoneme: "ʒ" },
      { char: "የ", phonemes: ["j"], defaultPhoneme: "j" },
      { char: "ደ", phonemes: ["d"], defaultPhoneme: "d" },
      { char: "ጀ", phonemes: ["dʒ"], defaultPhoneme: "dʒ" },
      { char: "ገ", phonemes: ["ɡ"], defaultPhoneme: "ɡ" },
      { char: "ጠ", phonemes: ["t"], defaultPhoneme: "t" },
      { char: "ጨ", phonemes: ["tʃ"], defaultPhoneme: "tʃ" },
      { char: "ጰ", phonemes: ["p"], defaultPhoneme: "p" },
      { char: "ፀ", phonemes: ["ts", "s"], defaultPhoneme: "ts" },
      { char: "ፈ", phonemes: ["f"], defaultPhoneme: "f" },
      { char: "ፐ", phonemes: ["p"], defaultPhoneme: "p" },
    ],
  },

  // ---------------------------------------------------------------------------
  // RUNIC (ELDER FUTHARK)
  // The oldest runic alphabet, used by Germanic peoples from roughly 150–800 AD.
  // Included as a popular choice for fantasy and conlang aesthetics.
  // ---------------------------------------------------------------------------
  {
    id: "runic",
    name: "Runic (Elder Futhark)",
    region: "Northern Europe (historical)",
    characters: [
      { char: "ᚠ", phonemes: ["f", "v"], defaultPhoneme: "f" },
      { char: "ᚢ", phonemes: ["u", "ʊ", "w"], defaultPhoneme: "u" },
      { char: "ᚦ", phonemes: ["θ", "ð"], defaultPhoneme: "θ" },
      { char: "ᚨ", phonemes: ["a", "æ"], defaultPhoneme: "a" },
      { char: "ᚱ", phonemes: ["r", "ɾ"], defaultPhoneme: "r" },
      { char: "ᚲ", phonemes: ["k", "g"], defaultPhoneme: "k" },
      { char: "ᚷ", phonemes: ["ɡ", "ɣ"], defaultPhoneme: "ɡ" },
      { char: "ᚹ", phonemes: ["w", "v"], defaultPhoneme: "w" },
      { char: "ᚺ", phonemes: ["h"], defaultPhoneme: "h" },
      { char: "ᚾ", phonemes: ["n"], defaultPhoneme: "n" },
      { char: "ᛁ", phonemes: ["i", "j"], defaultPhoneme: "i" },
      { char: "ᛃ", phonemes: ["j", "i"], defaultPhoneme: "j" },
      { char: "ᛇ", phonemes: ["ɪ", "e", "i"], defaultPhoneme: "i" },
      { char: "ᛈ", phonemes: ["p", "b"], defaultPhoneme: "p" },
      { char: "ᛉ", phonemes: ["z", "s", "r"], defaultPhoneme: "z" },
      { char: "ᛊ", phonemes: ["s", "z"], defaultPhoneme: "s" },
      { char: "ᛏ", phonemes: ["t", "d"], defaultPhoneme: "t" },
      { char: "ᛒ", phonemes: ["b", "p"], defaultPhoneme: "b" },
      { char: "ᛖ", phonemes: ["e", "ɛ"], defaultPhoneme: "e" },
      { char: "ᛗ", phonemes: ["m"], defaultPhoneme: "m" },
      { char: "ᛚ", phonemes: ["l"], defaultPhoneme: "l" },
      { char: "ᛜ", phonemes: ["ŋ", "n"], defaultPhoneme: "ŋ" },
      { char: "ᛞ", phonemes: ["d", "t"], defaultPhoneme: "d" },
      { char: "ᛟ", phonemes: ["o", "ø"], defaultPhoneme: "o" },
    ],
  },
];

// ---------------------------------------------------------------------------
// LOOKUP HELPERS
// ---------------------------------------------------------------------------

/**
 * Returns the writing system object for a given ID.
 *
 * @param {string} id - e.g. "latin"
 * @returns {Object|undefined}
 */
export function getAlphabetById(id) {
  return UNICODE_ALPHABETS.find((alpha) => alpha.id === id);
}

/**
 * Returns a summary list of all writing systems for populating
 * the alphabet picker dropdown in CharacterBrowser.
 *
 * @returns {{ id: string, name: string, region: string }[]}
 */
export function getAlphabetSummaries() {
  return UNICODE_ALPHABETS.map(({ id, name, region }) => ({ id, name, region }));
}

/**
 * Looks up a character within a writing system and returns its phoneme options.
 * Returns null if the character or system is not found.
 *
 * @param {string} alphabetId - e.g. "latin"
 * @param {string} char - the character to look up e.g. "J"
 * @returns {{ phonemes: string[], defaultPhoneme: string }|null}
 */
export function getCharacterPhonemes(alphabetId, char) {
  const system = getAlphabetById(alphabetId);
  if (!system) return null;
  const entry = system.characters.find((c) => c.char === char);
  return entry ? { phonemes: entry.phonemes, defaultPhoneme: entry.defaultPhoneme } : null;
}