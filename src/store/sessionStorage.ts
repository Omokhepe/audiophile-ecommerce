export function createNoopStorage<T = unknown>() {
  return {
    getItem(_key: string): Promise<T | null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: T): Promise<T> {
      return Promise.resolve(value);
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
}
