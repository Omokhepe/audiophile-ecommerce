// 'use client';
//
// import { useEffect, useState } from 'react';
//
// export const useFetchData = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Could not fetch data');
//         const json = await response.json();
//         setData(json);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [url]);
//   return { loading, error, data };
// };

'use client';

import { useEffect, useState } from 'react';

type UseFetchDataReturn<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export function useFetchData<T = unknown>(url: string): UseFetchDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Could not fetch data');
        const json = (await response.json()) as T;

        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted && err instanceof Error) {
          setError(err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
