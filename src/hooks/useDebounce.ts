import { useEffect, useState } from "react";

/**
 * Custom React hook that debounces a value by a specified delay.
 *
 * @template T - The type of the value to debounce.
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds. Defaults to 500ms.
 * @returns The debounced value, which updates only after the specified delay has passed without changes.
 *
 * @example
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 */

export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
