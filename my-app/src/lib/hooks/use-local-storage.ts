"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook for localStorage persistence
 * 
 * @param key - localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns [value, setValue, removeValue] tuple
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void, () => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // Save state
        setStoredValue(valueToStore);

        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}

/**
 * Hook for persisting STAR response data
 */
export interface StarResponseData {
  questionId: string | null;
  situation: string;
  task: string;
  action: string;
  result: string;
}

const STORAGE_KEY = "quick-response-builder-response";

export function useStarResponseStorage() {
  const [responseData, setResponseData, clearResponseData] = useLocalStorage<StarResponseData>(
    STORAGE_KEY,
    {
      questionId: null,
      situation: "",
      task: "",
      action: "",
      result: "",
    }
  );

  const updateResponse = useCallback(
    (updates: Partial<StarResponseData>) => {
      setResponseData((prev) => ({ ...prev, ...updates }));
    },
    [setResponseData]
  );

  return {
    responseData,
    updateResponse,
    clearResponseData,
  };
}

