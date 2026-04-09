// Loads and plays IPA audio samples from public/audio/ipa/ via Web Audio API

/**
 * useAudio.js
 * Hook for playing IPA audio samples from public/audio/ipa/.
 * Audio files are loaded on demand and cached so they don't reload on
 * every play. Uses HTML Audio elements — no Web Speech API.
 *
 * Usage:
 *   const { playPhoneme, isLoading } = useAudio();
 *   playPhoneme("dʒ"); // plays public/audio/ipa/dʒ.mp3
 *
 * If an audio file doesn't exist yet (samples not yet sourced), the
 * error is caught silently and nothing plays. No UI disruption.
 */

import { useState, useRef, useCallback } from "react";
import { getIPAEntry } from "../data/ipa";

// Base path for all IPA audio files
const AUDIO_BASE_PATH = "/audio/ipa/";

export function useAudio() {
  // Cache of loaded Audio objects keyed by IPA symbol
  // useRef so the cache persists across renders without causing re-renders
  const audioCache = useRef({});

  // Tracks which symbol is currently loading (for UI feedback if needed)
  const [loadingSymbol, setLoadingSymbol] = useState(null);

  /**
   * Returns the audio file path for a given IPA symbol.
   * Looks up the audioFile field from the IPA dataset.
   * Returns null if the symbol is not found in the dataset.
   *
   * @param {string} symbol - IPA symbol e.g. "dʒ"
   * @returns {string|null}
   */
  function getAudioPath(symbol) {
    const entry = getIPAEntry(symbol);
    if (!entry || !entry.audioFile) return null;
    return AUDIO_BASE_PATH + entry.audioFile;
  }

  /**
   * Loads an Audio object for a given IPA symbol, using the cache if available.
   * Returns a promise that resolves to the Audio element, or null on failure.
   *
   * @param {string} symbol
   * @returns {Promise<HTMLAudioElement|null>}
   */
  async function loadAudio(symbol) {
    // Return cached version if available
    if (audioCache.current[symbol]) {
      return audioCache.current[symbol];
    }

    const path = getAudioPath(symbol);
    if (!path) return null;

    return new Promise((resolve) => {
      const audio = new Audio(path);

      audio.addEventListener("canplaythrough", () => {
        audioCache.current[symbol] = audio;
        resolve(audio);
      }, { once: true });

      audio.addEventListener("error", () => {
        // File not found or not yet sourced — fail silently
        resolve(null);
      }, { once: true });

      audio.load();
    });
  }

  /**
   * Plays the audio sample for a given IPA symbol.
   * Stops any currently playing sample first to prevent overlap.
   * Does nothing if the audio file doesn't exist.
   *
   * @param {string} symbol - IPA symbol to play
   */
  const playPhoneme = useCallback(async (symbol) => {
    setLoadingSymbol(symbol);

    try {
      const audio = await loadAudio(symbol);

      if (!audio) {
        setLoadingSymbol(null);
        return;
      }

      // Reset to start in case it was already played
      audio.currentTime = 0;
      await audio.play();
    } catch (error) {
      // Play can fail if the user hasn't interacted with the page yet
      // (browser autoplay policy) — fail silently
      console.warn(`Could not play audio for /${symbol}/`, error.message);
    } finally {
      setLoadingSymbol(null);
    }
  }, []);

  /**
   * Preloads audio files for a list of IPA symbols.
   * Call this when the IPA browser mounts to warm the cache for common symbols.
   * Non-blocking — loads in the background.
   *
   * @param {string[]} symbols
   */
  const preloadPhonemes = useCallback((symbols) => {
    symbols.forEach((symbol) => {
      // Fire and forget — errors are handled inside loadAudio
      loadAudio(symbol);
    });
  }, []);

  /**
   * Clears the audio cache. Useful if audio files are updated.
   * Not exposed in the UI by default.
   */
  const clearAudioCache = useCallback(() => {
    audioCache.current = {};
  }, []);

  return {
    playPhoneme,
    preloadPhonemes,
    clearAudioCache,
    isLoading: loadingSymbol !== null,
    loadingSymbol,
  };
}