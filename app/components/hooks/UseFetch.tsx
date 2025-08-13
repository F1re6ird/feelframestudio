import { useState, useEffect } from 'react';
import axios from 'axios';

type StrapiResponse<T> = {
  data: T;
  meta?: any;
};

function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<StrapiResponse<T>>(url);
        if (isMounted) setData(response.data.data);
      } catch (err: any) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();

    return () => {
      isMounted = false; // prevent setting state on unmounted component
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;