import { useEffect, useState } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useAsync = <T,>(
  callback: () => Promise<T>,
  immediate = true
): AsyncState<T> & { execute: () => Promise<void> } => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await callback();
      setState({ data: response, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error });
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, []);

  return { ...state, execute };
};
