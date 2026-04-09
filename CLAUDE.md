# Conlang Studio — Project Specification

## What This Is

A web-based tool for building custom writing systems (constructed language scripts).
Users draw their own glyphs, map them to phonetic sounds, and the app either generates
naturalistic gibberish in their script or translates real English text into it.

Deployed as a static site (no backend, no database). Free to host on Vercel.

Live URL: [add after first deploy]
GitHub: [add repo URL]

---

## Core Concepts

### Alphabet
A named collection of glyphs created by the user. Users can maintain multiple alphabets
(e.g. "Elvish Draft", "Cipher Script"). Each alphabet is independent with its own glyphs
and mappings. Stored in localStorage and exportable as JSON.

### Glyph
A hand-drawn symbol created on a canvas. Stored as a base64 PNG data URL. A glyph belongs
to exactly one alphabet and maps to one or more IPA phonemes.

### Phoneme Mapping
Every glyph is ultimately mapped to one or more IPA phonemes — this is the single source
of truth for all phonetic operations. Users can arrive at this mapping two ways:
- **IPA mode** — browse IPA symbols directly by category, pick one
- **Character mode** — browse an existing writing system (Latin, Cyrillic, Arabic, Devanagari,
  Hebrew, Greek, Hangul, Hiragana, Katakana, Georgian, Armenian, and others via Unicode blocks),
  pick a character, then select from that character's known phonetic interpretations

In both modes, what gets stored is always IPA phonemes. The source character (e.g. "J") is
not stored — it is only a UI shortcut for finding the right phoneme(s).

---

## Data Model

```js
// Top-level app state
{
  alphabets: Alphabet[],
  activeAlphabetId: string
}

// Alphabet
{
  id: string,           // uuid
  name: string,         // user-defined e.g. "My Script"
  createdAt: number,    // timestamp
  glyphs: Glyph[]
}

// Glyph
{
  id: string,           // uuid
  alphabetId: string,
  imageData: string,    // base64 PNG data URL from canvas
  phonemes: string[],   // one or more IPA symbols e.g. ["dʒ"] or ["t", "ʃ"]
  label: string         // display label, usually the primary phoneme e.g. "dʒ"
}
```

---

## App Structure

Four main screens, navigated via top-level tabs. Each tab has a container component (e.g. AlphabetBuilder.jsx) that owns the layout and composes the sub-components. App.jsx imports only the container — never the sub-components directly:

### 1. Alphabet Builder
- Draw glyphs on a canvas and save them to the active alphabet
- Alphabet selector dropdown at the top (create new, rename, delete, switch)
- Drawing canvas with stroke width control and clear/undo
- Saved glyphs displayed in a grid below or beside the canvas
- Clicking a saved glyph loads it back into the canvas for redrawing
- No phoneme mapping happens here — just drawing and organizing

### 2. Phoneme Mapper
- Assign phoneme(s) to each glyph in the active alphabet
- Alphabet selector at the top
- Toggle at the top: "Browse by IPA" / "Browse by Character"
- Left panel: IPA browser or Character browser depending on toggle
  - IPA browser: symbols grouped by category (Vowels, Plosives, Fricatives, etc.)
    with description and play-audio button per symbol
  - Character browser: dropdown to pick writing system, then grid of characters
    each showing their known phonetic interpretations on hover/select
- Right panel: glyph grid for the active alphabet, click a glyph to assign the
  selected phoneme(s) to it
- Mapped glyphs show their assigned phoneme label as a badge
- Audio plays consistently from pre-recorded samples, not Web Speech API

### 3. Lexicon Generator
- Generates a set of words using the active alphabet's phoneme inventory
- Language profile selector: pick a reference language (English, Spanish, Arabic,
  Japanese, Mandarin, Russian, Swahili) — determines phoneme weights and syllable templates
- Word count slider (10–150)
- Generate button produces a Zipf-distributed word list rendered in the user's glyphs
- Each word shows its IPA transcription below it
- Word opacity reflects relative frequency (common words appear bolder)
- Glyphs without drawings show raw IPA as fallback

### 4. Translator
- Translates English text into the user's script
- Text input area
- Translate button converts English → IPA using CMU Pronouncing Dictionary lookup
  with rule-based fallback for unknown words
- Output renders each word in the user's glyphs with original word and IPA shown below
- Unmapped phonemes fall back to raw IPA symbols
- No external API calls — fully offline capable

---

## Persistence

### Auto-save
All alphabet data auto-saves to localStorage on every change via the `useAlphabet` hook.
Loads automatically on app start.

### Export
"Save alphabet" button downloads a `.conlang` file (JSON with a custom extension).
Contains the full alphabet object including all glyph image data.

### Import
"Load alphabet" button reads a `.conlang` file and merges it into the current session.
Validates the file structure before loading.

### Multiple alphabets
All alphabets are saved together in a single localStorage key as an array.
The active alphabet ID is also persisted so the user returns to where they left off.

---

## Component Structure

Each tab has a container component (e.g. `AlphabetBuilder.jsx`) that owns the layout
and composes the sub-components for that tab. `App.jsx` imports only the container —
never the sub-components directly. The container is also responsible for any local
UI state that doesn't need to live at the app level (e.g. which phoneme is selected,
which browser mode is active).

```
├── components/
│   ├── AlphabetBuilder/
│   │   ├── AlphabetBuilder.jsx    ← container, imported by App.jsx
│   │   ├── DrawingCanvas.jsx
│   │   └── GlyphLibrary.jsx
│   ├── PhonemeMapper/
│   │   ├── PhonemeMapper.jsx      ← container, imported by App.jsx
│   │   ├── IPABrowser.jsx
│   │   ├── CharacterBrowser.jsx
│   │   └── MappingPanel.jsx
│   ├── LexiconGenerator/
│   │   ├── LexiconGenerator.jsx   ← container, imported by App.jsx
│   │   ├── LanguageSelector.jsx
│   │   └── WordGrid.jsx
│   ├── Translator/
│   │   ├── Translator.jsx         ← container, imported by App.jsx
│   │   ├── TextInput.jsx
│   │   └── ScriptOutput.jsx
│   └── shared/
│       ├── AlphabetSelector.jsx
│       ├── GlyphRenderer.jsx
│       └── AudioButton.jsx
```

---

## Data Files Detail

### `src/data/ipa.js`
Array of IPA symbol objects:
```js
{
  symbol: "dʒ",
  category: "Affricates",
  description: "judge",
  audioFile: "dʒ.mp3"   // matches filename in public/audio/ipa/
}
```

### `src/data/unicodeAlphabets.js`
Array of writing system objects:
```js
{
  name: "Latin",
  characters: [
    { char: "J", phonemes: ["dʒ", "j", "ʒ", "x"], defaultPhoneme: "dʒ" },
    { char: "C", phonemes: ["k", "s", "tʃ"], defaultPhoneme: "k" },
    // ...
  ]
}
```

### `src/data/languageProfiles.js`
Array of language profile objects:
```js
{
  name: "English",
  phonemeWeights: {
    "ə": 0.12, "n": 0.07, "t": 0.07, "s": 0.06, "i": 0.06
    // ... all phonemes with frequency weights summing to 1.0
  },
  syllableTemplates: ["CV", "CVC", "CVC", "CVCV", "VC", "CVCC"],
  // templates listed with repetition to weight them by likelihood
}
```

---

## Audio

IPA audio samples stored in `public/audio/ipa/` as MP3 files.
Filenames match the `audioFile` field in `ipa.js`.
Files sourced from open-licensed IPA recordings (e.g. Wikimedia Commons IPA recordings).
Played via the Web Audio API through the `useAudio` hook — no Web Speech API.

---

## Coding Conventions

- **Function names**: verb + noun, descriptive. `saveGlyphToAlphabet`, `loadAlphabetFromStorage`,
  `generateWeightedWord`, `playIPASound`. Avoid abbreviations.
- **Comments**: every function gets a one-line comment describing what it does and what it returns.
  Complex logic gets inline comments explaining the why, not the what.
- **Component props**: always destructured at the top of the function. PropTypes not required
  but prop names should be self-explanatory.
- **State**: kept as high as needed, no higher. Alphabet state lives in App.jsx via useAlphabet.
  UI state (which tab, which toggle) lives in the component that owns it.
- **No premature optimization**: write it readable first. Comment where performance
  improvements might be needed later rather than optimizing upfront.
- **File length**: if a file is getting long, that's a signal to split it. Aim for components
  under 150 lines, utils under 100 lines.

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: plain CSS with CSS variables for theming — no CSS framework
- **Phonetics**: `cmu-pronouncing-dictionary` npm package for English → IPA
- **No other external dependencies** unless genuinely necessary
- **Deployment**: Vercel (auto-deploy on push to main)

---

## Known Limitations / Future Work

- Audio samples need to be sourced and added to `public/audio/ipa/` manually
- CMU dictionary covers English only — other source language translation not yet supported
- No cross-device sync (localStorage is per-browser by design for now)
- Shareable alphabet links (encode alphabet as URL param) would be a good v2 feature
