import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if code is running on client-side
 * Helps prevent hydration mismatches between server and client
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
