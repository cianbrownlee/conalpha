// Syllable structure rules (CV, CVC, etc.) per language profile

/**
 * syllableTemplates.js
 * Parses and applies syllable structure templates for word generation.
 * Templates are strings like "CV", "CVC", "CVCV" where:
 *   C = consonant slot
 *   V = vowel slot
 *   N = nasal coda (approximated as a nasal consonant)
 *
 * Language profiles in languageProfiles.js define which templates are used
 * and how often (via repetition in the array). This module provides the
 * logic for turning a template string into a sequence of phoneme slot types
 * that the lexicon generator can fill.
 */

// Valid slot type characters in a template string
const SLOT_TYPES = {
  C: "consonant",
  V: "vowel",
  N: "nasal",
};

// IPA symbols that count as nasals for the N slot
export const NASAL_PHONEMES = new Set(["m", "n", "ŋ", "ɲ", "ɳ", "ɴ", "ɱ"]);

// ---------------------------------------------------------------------------
// TEMPLATE PARSING
// ---------------------------------------------------------------------------

/**
 * Parses a template string into an array of slot type descriptors.
 * Unknown characters in the template are silently skipped.
 *
 * Example: parseTemplate("CVC") => ["consonant", "vowel", "consonant"]
 *
 * @param {string} template - e.g. "CVC", "CVCV", "CVN"
 * @returns {string[]} - array of slot type strings
 */
export function parseTemplate(template) {
  return template
    .split("")
    .map((char) => SLOT_TYPES[char])
    .filter(Boolean);
}

/**
 * Picks a random template from a language profile's template array.
 * Templates are repeated in the array to weight them by likelihood,
 * so a simple random pick naturally respects those weights.
 *
 * @param {string[]} templates - the syllableTemplates array from a language profile
 * @returns {string} - a single template string e.g. "CVC"
 */
export function pickTemplate(templates) {
  if (!templates || templates.length === 0) return "CV";
  return templates[Math.floor(Math.random() * templates.length)];
}

/**
 * Picks multiple templates to form a multi-syllable word structure.
 * Returns an array of parsed slot sequences, one per syllable.
 *
 * The number of syllables is weighted toward 1-2 for most languages,
 * matching natural word length distributions.
 *
 * @param {string[]} templates - the syllableTemplates array from a language profile
 * @returns {string[][]} - array of slot type arrays, one per syllable
 */
export function pickWordStructure(templates) {
  // Syllable count: 1 = 45%, 2 = 35%, 3 = 15%, 4 = 5%
  const rand = Math.random();
  let syllableCount;
  if (rand < 0.45)      syllableCount = 1;
  else if (rand < 0.80) syllableCount = 2;
  else if (rand < 0.95) syllableCount = 3;
  else                  syllableCount = 4;

  return Array.from({ length: syllableCount }, () =>
    parseTemplate(pickTemplate(templates))
  );
}

/**
 * Filters an array of IPA phoneme symbols down to only those that match
 * a given slot type (consonant, vowel, or nasal).
 * Used by the generator to know which phonemes are valid for a given slot.
 *
 * @param {string[]} phonemes - available IPA symbols from the user's alphabet
 * @param {string} slotType - "consonant", "vowel", or "nasal"
 * @param {Function} isVowelFn - function that takes a symbol and returns boolean
 * @returns {string[]}
 */
export function filterPhonemesForSlot(phonemes, slotType, isVowelFn) {
  switch (slotType) {
    case "vowel":
      return phonemes.filter((p) => isVowelFn(p));
    case "nasal":
      return phonemes.filter((p) => NASAL_PHONEMES.has(p));
    case "consonant":
    default:
      return phonemes.filter((p) => !isVowelFn(p));
  }
}